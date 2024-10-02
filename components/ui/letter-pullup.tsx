"use client";

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterPullupProps {
  className?: string;
  words: string;
  duration?: number;
}

export default function InfiniteLetterPullup({
  className,
  words,
  duration = 2,
}: LetterPullupProps) {
  const letters = words.split("");

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: [100, 0, 0, -100],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: duration,
        times: [0, 0.1, 0.9, 1],
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  return (
    <motion.div 
      className="flex justify-center overflow-hidden h-24"
      variants={containerVariants}
      animate="animate"
    >
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          custom={i}
          className={cn(
            "font-display text-center text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 via-purple-600 to-pink-700 tracking-[-0.02em] md:text-8xl md:leading-[5rem]",
            className,
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </motion.div>
  );
}