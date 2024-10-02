"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: [0, -10, 0],  // Creates a "up-up" bouncing effect
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,  // Infinite loop
          repeatType: "loop",
          ease: "easeInOut",
          duration: 2,  // Adjust to control the speed of the bounce effect
        },
      },
    },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff4545] to-[#000] leading-[5rem] tracking-[-0.02em] drop-shadow-sm animate-pulse",  // Added `animate-pulse` for smooth text effect
        className,
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
