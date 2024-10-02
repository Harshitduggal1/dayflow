"use client";



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link'; // Added Link for routing
import { plans } from './constants';
import { cn } from '@/lib/utils';
import { CircleArrowUp, CreditCard, Gem, Headset, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Define types for the pricing plan
interface Plan {
  id: string;
  title: string;
  priceMonthly: string;
  priceYearly: string;
  buttonText: string;
  features: string[];
}

// Define types for the PlanCard props
interface PlanCardProps {
  plan: Plan;
  billPlan: string;
  index: number;
}

// Define types for the FeatureItem props
interface FeatureItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const Pricing: React.FC = () => {
  const [billPlan, setBillPlan] = useState<string>("monthly");

  useEffect(() => {
    gsap.from(".pricing-header", { 
      opacity: 0, 
      y: -50, 
      duration: 1, 
      ease: "power3.out" 
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pricing-header text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-fuchsia-500 to-violet-700 text-white border-transparent px-6 py-3 rounded-full shadow-xl">
            <Gem className="w-5 h-5 mr-2" />
            <span className="text-xl font-semibold">Choose Your Plan</span>
          </Badge>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-blue-500 to-indigo-600 drop-shadow-lg">
            Unlock Premium Features
          </h2>
          <p className="text-2xl text-gray-200 font-medium max-w-3xl mx-auto">
            Elevate your experience with our tailored pricing plans. Find the perfect fit and scale your needs.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <motion.div
            className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-800 p-1 rounded-full flex items-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setBillPlan("monthly")}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                billPlan === "monthly" ? "bg-white text-indigo-700 shadow-xl" : "text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillPlan("annually")}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                billPlan === "annually" ? "bg-white text-indigo-700 shadow-xl" : "text-gray-300"
              }`}
            >
              Annually
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, idx) => (
            <PlanCard key={plan.id.toString()} plan={{...plan, id: plan.id.toString()}} billPlan={billPlan} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <FeatureItem icon={CreditCard} text="Secure Payments" />
          <FeatureItem icon={Headset} text="24/7 Support" />
          <FeatureItem icon={CircleArrowUp} text="Regular Updates" />
        </motion.div>
      </div>
    </div>
  );
};

const PlanCard: React.FC<PlanCardProps> = ({ plan, billPlan, index }) => {
  const getPlanRoute = (title: string) => {
    switch (title) {
      case "Free":
        return "/free-plan";
      case "Standard":
        return "/standard-plan";
      case "Premium":
        return "/premium-plan";
      default:
        return "/";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-105",
        plan.title === "Standard"
          ? "bg-gradient-to-r from-indigo-700 via-purple-600 to-fuchsia-800 text-white"
          : " text-white"
      )}
    >
      <div className="p-10">
        <h3 className="text-3xl font-bold mb-6">{plan.title}</h3>
        <div className="text-5xl font-extrabold mb-4">
          {billPlan === "monthly" ? plan.priceMonthly : plan.priceYearly}
          <span className="text-lg font-bold">/{billPlan === "monthly" ? "mo" : "yr"}</span>
        </div>
        <Link href={getPlanRoute(plan.title)} passHref>
          <Button
            className={cn(
              "w-full py-4 rounded-full text-xl font-bold transition-all duration-300 shadow-lg transform hover:translate-y-[-2px]",
              plan.title === "Standard"
                ? "bg-white text-purple-700 hover:bg-purple-800 hover:text-white"
                : "bg-indigo-800 text-white hover:bg-blue-600"
            )}
          >
            {plan.buttonText}
          </Button>
        </Link>
      </div>
      <div className="bg-opacity-50 p-8 rounded-lg bg-gradient-to-r from-slate-900 to-slate-950">
        <ul className="space-y-6">
          {plan.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center text-lg"
            >
              <Zap className="w-6 h-6 mr-4 text-indigo-600" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, text }) => (
  <div className="flex items-center bg-gradient-to-r from-violet-700 to-fuchsia-700 rounded-full px-8 py-4 shadow-xl">
    <Icon className="w-6 h-6 mr-4 text-white" />
    <span className="text-lg font-bold text-white">{text}</span>
  </div>
);

export default Pricing;