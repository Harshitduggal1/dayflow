import {
  addMinutes,
  format,
  fromUnixTime,
  isAfter,
  isBefore,
  parse,
} from "date-fns";
import prisma from "../lib/db";
import { Prisma } from "@prisma/client";
import { nylas } from "../lib/nylas";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NylasResponse, GetFreeBusyResponse } from "nylas";

// Define the props interface for the TimeSlots component
interface iappProps {
  selectedDate: Date;
  userName: string;
  meetingDuration: number;
}

// Define the expected structure of the data from Prisma
interface PrismaAvailability {
  fromTime: string;
  tillTime: string;
  id: number;
  User: {
    grantEmail: string;
    grantId: string;
  };
}

// Function to get availability of the user
async function getAvailability(
  selectedDate: Date,
  userName: string
): Promise<{ data: PrismaAvailability | null; nylasCalendarData: NylasResponse<GetFreeBusyResponse[]> }> {
  const currentDay = format(selectedDate, "EEEE");

  // Set the time for the start and end of the day
  const startOfDay = new Date(selectedDate);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(selectedDate);
  endOfDay.setHours(23, 59, 59, 999);

  // Query availability from Prisma
  const data = await prisma.availability.findFirst({
    where: {
      day: currentDay as Prisma.EnumDayFilter,
      User: {
        username: userName,
      },
    },
    select: {
      fromTime: true,
      tillTime: true,
      id: true,
      User: {
        select: {
          grantEmail: true,
          grantId: true,
        },
      },
    },
  });

  // Ensure that the grantId and grantEmail exist before making the Nylas API request
  if (!data?.User.grantId || !data?.User.grantEmail) {
    throw new Error("User grant information is missing.");
  }

  // Fetch availability from Nylas
  const nylasCalendarData = await nylas.calendars.getFreeBusy({
    identifier: data.User.grantId,
    requestBody: {
      startTime: Math.floor(startOfDay.getTime() / 1000),
      endTime: Math.floor(endOfDay.getTime() / 1000),
      emails: [data.User.grantEmail],
    },
  });

  // Convert the id to number and ensure User properties are non-null to match PrismaAvailability interface
  const prismaData: PrismaAvailability | null = data ? {
    ...data,
    id: Number(data.id),
    User: {
      grantEmail: data.User.grantEmail,
      grantId: data.User.grantId,
    },
  } : null;

  return { data: prismaData, nylasCalendarData };
}// Function to calculate available time slots
function calculateAvailableTimeSlots(
  dbAvailability: { fromTime?: string; tillTime?: string },
  nylasData: NylasResponse<GetFreeBusyResponse[]>,
  date: string,
  duration: number
): string[] {
  const now = new Date();

  // Parse available times, or return an empty array if times are invalid
  if (!dbAvailability.fromTime || !dbAvailability.tillTime) {
    return [];
  }

  const availableFrom = parse(
    `${date} ${dbAvailability.fromTime}`,
    "yyyy-MM-dd HH:mm",
    new Date()
  );
  const availableTill = parse(
    `${date} ${dbAvailability.tillTime}`,
    "yyyy-MM-dd HH:mm",
    new Date()
  );

  // Safely handle Nylas data by checking if the response has timeSlots
  const busySlots = nylasData.data.flatMap((entry) => {
    if ("timeSlots" in entry) {
      return entry.timeSlots.map((slot: { startTime: number; endTime: number }) => ({
        start: fromUnixTime(slot.startTime),
        end: fromUnixTime(slot.endTime),
      }));
    } else {
      // Handle error or no time slots case
      console.error("Error fetching busy slots from Nylas", entry);
      return [];
    }
  });

  // Generate possible 30-minute slots within available time
  const allSlots: Date[] = [];
  let currentSlot = availableFrom;
  while (isBefore(currentSlot, availableTill)) {
    allSlots.push(currentSlot);
    currentSlot = addMinutes(currentSlot, duration);
  }

  // Filter out busy slots and times before the current time
  const freeSlots = allSlots.filter((slot) => {
    const slotEnd = addMinutes(slot, duration);
    return (
      isAfter(slot, now) && // Ensure slot is after the current time
      !busySlots.some(
        (busy) =>
          (!isBefore(slot, busy.start) && isBefore(slot, busy.end)) ||
          (isAfter(slotEnd, busy.start) && !isAfter(slotEnd, busy.end)) ||
          (isBefore(slot, busy.start) && isAfter(slotEnd, busy.end))
      )
    );
  });

  // Format free slots into readable strings
  return freeSlots.map((slot) => format(slot, "HH:mm"));
}

// Component to display available time slots
export async function TimeSlots({
  selectedDate,
  userName,
  meetingDuration,
}: iappProps): Promise<JSX.Element> {
  const { data, nylasCalendarData } = await getAvailability(selectedDate, userName);

  // Handle the case where no availability is found in the database
  if (!data) {
    return <p>No availability found for this user on the selected date.</p>;
  }

  const dbAvailability = { fromTime: data.fromTime, tillTime: data.tillTime };
  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  const availableSlots = calculateAvailableTimeSlots(
    dbAvailability,
    nylasCalendarData,
    formattedDate,
    meetingDuration
  );

  return (
    <div>
      <p className="text-base font-semibold">
        {format(selectedDate, "EEE")}.{" "}
        <span className="text-sm text-muted-foreground">
          {format(selectedDate, "MMM. d")}
        </span>
      </p>

      <div className="mt-3 max-h-[350px] overflow-y-auto">
        {availableSlots.length > 0 ? (
          availableSlots.map((slot, index) => (
            <Link
              key={index}
              href={`?date=${format(selectedDate, "yyyy-MM-dd")}&time=${slot}`}
            >
              <Button variant="outline" className="w-full mb-2">
                {slot}
              </Button>
            </Link>
          ))
        ) : (
          <p>No available time slots for this date.</p>
        )}
      </div>
    </div>
  );
}
