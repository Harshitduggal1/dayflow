"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes"
import {
  Moon,
  Sun,
  ChevronDown,
  ArrowRight,
  Monitor,
  Users,
  BarChart,
  FileText,
  HelpCircle,
  Book,
  Coffee,
  Zap,
  Gift,
  Sparkles,
  PieChart,
  Bell,
  Shield,
  Activity,
  Code,
  Building,
  Briefcase,
  Rocket,
  GraduationCap,
  Stethoscope,
  DollarSign,
  ShoppingBag,
  Cpu,
  Heart,
  Landmark,
  Film,
  TrendingUp,
  Newspaper,
  BookOpen,
  Video,
  Mic,
  MessageCircle,
  GitBranch,
  Map,
  Mail,
  MessageSquare,
} from "lucide-react";
import Logo from "@/public/ailogo.png";
import { HStack, Icon } from "@chakra-ui/react";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const subMenuVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.5,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    color: "#3B82F6",
    transition: { duration: 0.2 },
  },
};

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface SubMenuProps {
  title: string;
  items: NavItem[];
}

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex justify-center p-2 rounded-full bg-blue-600 text-white  hover:bg-emerald-400 transition-colors "
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};


const SubMenu: React.FC<SubMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        whileHover="hover"
        className="px-4 py-2 font-semibold text-slate-900 hover:text-cyan-600 dark:text-white/80 dark:hover:text-blue-600 transition-colors flex items-center gap-1 group"
      >
        <motion.span
          initial={{ backgroundSize: "0 2px" }}
          whileHover={{
            backgroundSize: "100% 2px",
            backgroundImage: "linear-gradient(to right, #3B82F6, #60A5FA)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={subMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute z-50 left-0 mt-4 bg-white text-slate-900/80  hover:text-sky-500 font-bold text-pretty p-6 rounded-2xl shadow-2xl w-[700px]"
            style={{
              top: "100%",
              zIndex: 50,
            }}
          >
            <div className="grid grid-cols-2 gap-8">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 hover:text-cyan-600 transition-colors group"
                  >
                    <motion.div
                      className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <motion.span
                      className="font-medium"
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export const Navbar: React.FC = () => {
  const productItems: NavItem[] = [
    { name: "Analytics Dashboard", href: "/product/analytics", icon: <BarChart size={20} /> },
    { name: "Team Collaboration", href: "/product/collaboration", icon: <Users size={20} /> },
    { name: "Smart Integrations", href: "/product/integrations", icon: <Zap size={20} /> },
    { name: "AI-Powered Insights", href: "/product/ai-insights", icon: <Sparkles size={20} /> },
    { name: "Custom Reporting", href: "/product/reporting", icon: <FileText size={20} /> },
    { name: "Mobile App", href: "/product/mobile", icon: <Monitor size={20} /> },
    { name: "Data Visualization", href: "/product/visualization", icon: <PieChart size={20} /> },
    { name: "Automated Workflows", href: "/product/workflows", icon: <ArrowRight size={20} /> },
    { name: "Real-time Notifications", href: "/product/notifications", icon: <Bell size={20} /> },
    { name: "Advanced Security", href: "/product/security", icon: <Shield size={20} /> },
    { name: "Performance Metrics", href: "/product/metrics", icon: <Activity size={20} /> },
    { name: "API Access", href: "/product/api", icon: <Code size={20} /> },
  ];

  const solutionItems: NavItem[] = [
    { name: "Enterprise", href: "/solutions/enterprise", icon: <Building size={20} /> },
    { name: "Small Business", href: "/solutions/small-business", icon: <Briefcase size={20} /> },
    { name: "Startups", href: "/solutions/startups", icon: <Rocket size={20} /> },
    { name: "Education", href: "/solutions/education", icon: <GraduationCap size={20} /> },
    { name: "Healthcare", href: "/solutions/healthcare", icon: <Stethoscope size={20} /> },
    { name: "Finance", href: "/solutions/finance", icon: <DollarSign size={20} /> },
    { name: "Retail", href: "/solutions/retail", icon: <ShoppingBag size={20} /> },
    { name: "Technology", href: "/solutions/technology", icon: <Cpu size={20} /> },
    { name: "Non-profit", href: "/solutions/non-profit", icon: <Heart size={20} /> },
    { name: "Government", href: "/solutions/government", icon: <Landmark size={20} /> },
    { name: "Media", href: "/solutions/media", icon: <Film size={20} /> },
  ];

  const blogItems: NavItem[] = [
    { name: "Product Updates", href: "/blogs/product-updates", icon: <Gift size={20} /> },
    { name: "Case Studies", href: "/blogs/case-studies", icon: <FileText size={20} /> },
    { name: "Industry Insights", href: "/blogs/industry-insights", icon: <TrendingUp size={20} /> },
    { name: "Tips & Tricks", href: "/blogs/tips-tricks", icon: <Coffee size={20} /> },
    { name: "Company News", href: "/blogs/company-news", icon: <Newspaper size={20} /> },
    { name: "Guest Posts", href: "/blogs/guest-posts", icon: <Users size={20} /> },
    { name: "Tutorials", href: "/blogs/tutorials", icon: <BookOpen size={20} /> },
    { name: "Webinars", href: "/blogs/webinars", icon: <Video size={20} /> },
    { name: "Infographics", href: "/blogs/infographics", icon: <PieChart size={20} /> },
    { name: "Podcasts", href: "/blogs/podcasts", icon: <Mic size={20} /> },
    { name: "eBooks", href: "/blogs/ebooks", icon: <Book size={20} /> },
    { name: "White Papers", href: "/blogs/white-papers", icon: <FileText size={20} /> },
  ];

  const resourceItems: NavItem[] = [
    { name: "Documentation", href: "/resources/documentation", icon: <FileText size={20} /> },
    { name: "API Reference", href: "/resources/api-reference", icon: <GitBranch size={20} /> },
    { name: "Community", href: "/resources/community", icon: <Users size={20} /> },
    { name: "Support", href: "/resources/support", icon: <HelpCircle size={20} /> },
    { name: "Tutorials", href: "/resources/tutorials", icon: <BookOpen size={20} /> },
    { name: "Training", href: "/resources/training", icon: <GraduationCap size={20} /> },
    { name: "Webinars", href: "/resources/webinars", icon: <Video size={20} /> },
    { name: "Blog", href: "/resources/blog", icon: <Book size={20} /> },
    { name: "Events", href: "/resources/events", icon: <Map size={20} /> },
    { name: "Newsletter", href: "/resources/newsletter", icon: <Mail size={20} /> },
    { name: "Live Chat", href: "/resources/live-chat", icon: <MessageCircle size={20} /> },
    { name: "Case Studies", href: "/resources/case-studies", icon: <FileText size={20} /> },
    { name: "Customer Stories", href: "/resources/customer-stories", icon: <MessageSquare size={20} /> },
  ];

  return (
    <><motion.div
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col py-6 px-4 md:px-8 mx-auto md:flex-row md:items-center md:justify-between text-white bg-transparent backdrop-blur-sm"
      style={{ zIndex: 10 }}
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <span className="ml-2  bg-clip-text text-3xl text-bold text-transparent font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">Dayflow.<span className="text-white font-extrabold text-3xl">IO</span></span>
        </Link>
      </motion.div>
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
        <div className="flex justify-center gap-4 pr-52">
          <SubMenu title="Product" items={productItems} />
          <SubMenu title="Solutions" items={solutionItems} />
          <SubMenu title="Blog" items={blogItems} />
          <SubMenu title="Resources" items={resourceItems} />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 font-semibold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
          >
            <Link href="/pricing">Pricing</Link>
          </motion.div>
        </div>
        <div className="flex justify-center items-center gap-4 ml-auto">
         
        <ThemeToggle  />
     
        </div>
      </motion.div>
    </motion.div>
    
    <HStack className="flex justify-center pr-14 text-3xl md:justify-center space-x-6 mt-4 md:mt-0 text-blue-900/40 dark:text-blue-200">
  <Link href="https://github.com/harshitduggal1" className="hover:text-blue-600 transition">
    <Icon as={IoLogoGithub} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-blue-700 transition">
    <Icon as={FaYoutube} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-blue-700 transition">
    <Icon as={FaTwitter} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-blue-700 transition">
    <Icon as={FaFacebook} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-blue-700 transition">
    <Icon as={FaInstagram} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-blue-700 transition">
    <Icon as={FaPinterest} className="w-6 h-6" />
  </Link>
</HStack></>
  );
};
export default Navbar;
