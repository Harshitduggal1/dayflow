import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import scheduling from "@/public/scheduling.png";
import scheduling2 from "@/public/scheduling2.png";
import scheduling3 from "@/public/scheduling3.png";

interface TabData {
  [key: string]: { text: string; image: StaticImageData; href: string };
}

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Automated Workforce Scheduling");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const controls = useAnimation();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const tabData: TabData = {
    "Automated Workforce Scheduling": {
      text: `Optimize staff allocation using AI-powered scheduling systems that take into account employee availability, skill sets, and business needs. This solution automatically generates work schedules, balancing efficiency and employee satisfaction, leading to significant cost savings and increased productivity across all departments. Real-time updates ensure last-minute changes are managed seamlessly.`,
      image: scheduling,
      href: "/workforce-scheduling",
    },
    "Resource Management": {
      text: `Efficiently track, allocate, and optimize the use of all enterprise resources, from equipment and meeting rooms to specialized tools and personnel. This system ensures resources are available when needed, preventing conflicts or downtime, and providing comprehensive oversight through detailed reports and analytics.`,
      image: scheduling2,
      href: "/resource-management",
    },
    "AI-Driven Forecasting": {
      text: `Leverage advanced machine learning algorithms to predict future workforce and resource demands. This feature analyzes historical data and market trends to make accurate predictions about future staffing needs.`,
      image: scheduling3,
      href: "/ai-forecasting",
    },
    "Marketing": {
      text: `Boost your marketing efforts with data-driven insights, real-time campaign management, and automation tools. This feature integrates with CRM systems to track customer interactions and optimize campaigns for maximum ROI.`,
      image: scheduling,
      href: "/marketing",
    },
    "Project Management": {
      text: `Handle projects with precision and confidence by centralizing task assignments, tracking milestones, and improving collaboration across teams.`,
      image: scheduling2,
      href: "/project-management",
    },
    "Product Management": {
      text: `Manage the entire product lifecycle, from concept to launch, with powerful tools designed to streamline product development.`,
      image: scheduling3,
      href: "/product-management",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    // GSAP animation for tabs
    gsap.fromTo(
      tabsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, ease: "power3.out", duration: 0.8 }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.3 },
    },
  };

  const tabVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const handleTabClick = async (tab: string) => {
    await controls.start({ opacity: 0, y: -20 });
    setActiveTab(tab);
    controls.start({ opacity: 1, y: 0 });
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4 font-sans mt-16">
      <motion.div
        className="max-w-4xl w-full bg-transparent bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-opacity-20 p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl font-black text-center mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Enterprise Management Suite
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(tabData).map((tab, index) => (
            <motion.button
              key={tab}

              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              className={`py-2 px-4 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white text-purple-600"
                  : "bg-purple-600 bg-opacity-50 text-white hover:bg-opacity-75"
              }`}
              onClick={() => handleTabClick(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={tabVariants}
              animate={activeTab === tab ? "active" : "inactive"}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white bg-opacity-10 p-6 rounded-xl shadow-inner backdrop-filter backdrop-blur-sm"
          >
            {isLoading ? (
              <motion.div
                className="flex justify-center items-center h-32"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-8 h-8 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={tabData[activeTab].image}
                    alt={activeTab}
                    priority
                    className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl mb-4"
                  />
                </motion.div>
                <motion.p
                  className="text-lg text-white leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}

                  animate={{ opacity: 1, y: 0 }}                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {tabData[activeTab].text}
                </motion.p>
                <Link href={tabData[activeTab].href} passHref>
                  <motion.button
                    className="mt-4 bg-white text-purple-700 font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:from-purple-700 hover:via-blue-600 hover:to-fuchsia-400"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255,255,255,0.7)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Tabs;