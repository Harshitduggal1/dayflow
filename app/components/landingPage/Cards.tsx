import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaStripe, FaGoogle, FaAmazon, FaFacebook, FaMicrosoft } from "react-icons/fa";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Ultra-Scheduler",
    description:
      "A $10 trillion enterprise software for global-scale scheduling, optimizing time across industries.",
    icon: <FaStripe className="text-blue-500" />,
    link: "/dashboard",
  },
  {
    title: "HyperPlan",
    description:
      "An intelligent scheduling tool built for the largest enterprises, streamlining operations with AI.",
    icon: <FaGoogle className="text-red-500" />,
    link: "/dashboard",
  },
  {
    title: "SchedulePro",
    description:
      "A revolutionary platform for automating scheduling for trillion-dollar companies with maximum efficiency.",
    icon: <FaGoogle className="text-yellow-500" />,
    link: "/dashboard",
  },
  {
    title: "TimeSync",
    description:
      "A global scheduling solution for enterprises, offering predictive analytics and AI-driven insights.",
    // eslint-disable-next-line react/jsx-no-undef
    icon: <FaFacebook className="text-blue-700" />,
    link: "/dashboard",
  },
  {
    title: "CloudPlanner",
    description:
      "A cutting-edge platform that synchronizes enterprise-level schedules across global teams.",
    icon: <FaAmazon className="text-green-500" />,
    link: "/dashboard",
  },
  {
    title: "SmartSchedule",
    description:
      "Empowering global operations with scalable, AI-enhanced scheduling solutions.",
    icon: <FaMicrosoft className="text-purple-500" />,
    link: "/dashboard",
  },
];
export default CardHoverEffect;