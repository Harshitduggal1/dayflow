import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import AlmostFinished from "@/public/work-is-almost-over-happy.gif";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarCheck2 } from "lucide-react";
import Link from "next/link";

const GrantIdRoute = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>You Are Almost Done!!✅</CardTitle>
          <CardDescription>
            We have to now connect your calendar to your account<br/>
            To get you started instantly
          </CardDescription>
          <Image
            src={AlmostFinished}
            alt="Almost Finished"
            className="w-full rounded-lg"
          />
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/api/auth">
              <CalendarCheck2 className="size-4 mr-2" />
              Connect Calender to Account 
            </Link>
          </Button>
          <div className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#fcd2f6] to-[#f92add]  ">
          something went wrong? <br/>
          Contact us immediately
            
          <Button asChild className="w-full">
            <Link href="/support/contact-us">
              <CalendarCheck2 className="size-4 mr-2" />
              Contact Us
              
            </Link>
          </Button>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrantIdRoute;
