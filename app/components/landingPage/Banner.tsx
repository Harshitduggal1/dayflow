"use client"

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Button } from '@/components/ui/button';
import Icons from './ui/icons';

gsap.registerPlugin(TextPlugin);

const Banner = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        gsap.to(titleRef.current, {
            duration: 2,
            text: "Revolutionizing Scheduling with AI Optimization!!",
            ease: "power1.inOut"
        });

        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 2 }
        });
    }, [controls]);

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col relative items-center justify-center mx-auto max-w-5xl w-full py-20 lg:pb-40"
        >
            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="flex relative items-center justify-center w-full rounded-2xl p-5 md:p-8 lg:p-12 lg:rounded-3xl overflow-hidden"
style={{
    background: "linear-gradient(90deg, rgba(0, 255, 255, 1), rgba(0, 128, 255, 1), rgba(148, 0, 211, 1))",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.25)"
}}

                
            >
                <motion.div 
                    className="absolute w-full h-full top-0 left-0"
                    animate={{
                        background: [
                            "radial-gradient(circle, rgba(154, 230, 180, 0.3) 0%, rgba(250, 240, 137, 0.3) 100%)",
                            "radial-gradient(circle, rgba(250, 240, 137, 0.3) 0%, rgba(154, 230, 180, 0.3) 100%)"
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                />
                {[Icons.social1, Icons.social2, Icons.social3, Icons.social4].map((Icon, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${index % 2 === 0 ? 'bottom-1/4' : 'top-1/4'} ${index < 2 ? 'left-16' : 'right-12'} hidden lg:flex items-center justify-center`}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360],
                        }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: index }}
                    >
                        <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                ))}
                <div className="flex flex-col items-center justify-center max-w-2xl mx-auto py-5 lg:py-8 z-10">
                    <motion.h2
                        ref={titleRef}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl text-white lg:text-4xl xl:text-5xl font-extrabold text-center !leading-tight"
                    />
                    <motion.p 
                        ref={descriptionRef}
                        variants={textVariants}
                        initial="hidden"
                        animate={controls}
                        className="mt-6 text-center max-w-lg text-2xl font-semibol text-transparent bg-clip-text bg-transparent bg-gradient-to-r from-gray-100 to-gray-300/30"
                    >
                        Unlock the full potential of your scheduling operations with our cutting-edge AI technology, designed to maximize efficiency and productivity. 
                        <span className="hidden lg:inline-flex">
                            Discover a new era of streamlined workflows, real-time insights, and unparalleled scalability.
                        </span>
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button size="lg" className="mt-6 bg-purple-400  hover:bg-violet-800 text-white" asChild>
                            <Link href="/auth/register">
                                Get Started - It&apos;s Free
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Banner;