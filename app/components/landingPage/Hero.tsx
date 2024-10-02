/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client";

import { useEffect, useRef, useMemo, useCallback, useState } from "react";
import { gsap } from "gsap";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import HeroImage from "@/public/canva.png";
import { Heading } from "@chakra-ui/react";
import { StargateColors } from "@/app/utils/colors";
import LetterPullup from "@/components/ui/letter-pullup";

const words = ["seamless", "cutting-edge", "efficient", "intuitive", "dynamic"];

export function Hero() {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const animateElement = useCallback((element: gsap.TweenTarget, delay: number, y = 50) => {
    gsap.fromTo(
      element,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        delay,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);
  useEffect(() => {
    animateElement(titleRef.current, 0);
    animateElement(subTitleRef.current, 0.3);
    animateElement(textRef.current, 0.5);
    animateElement(imageRef.current, 0.7, 0);
  }, [animateElement]);

  const memoizedSpotlight = useMemo(() => (
    <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
  ), []);

  const memoizedSvg = useMemo(() => (
    <svg
      className="absolute inset-0 -mt-24 blur-3xl"
      style={{ zIndex: -1 }}
      fill="none"
      viewBox="0 0 400 400"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10_20)">
        <g filter="url(#filter0_f_10_20)">
          <path
            d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
            fill="#03FFE0"
          ></path>
          <path
            d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
            fill="#7C87F8"
          ></path>
          <path
            d="M320 400H400V78.75L106.2 134.75L320 400Z"
            fill="#4C65E4"
          ></path>
          <path
            d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
            fill="#043AFF"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="720.666"
          id="filter0_f_10_20"
          width="720.666"
          x="-160.333"
          y="-160.333"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_10_20"
            stdDeviation="80.1666"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  ), []);
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="relative flex flex-col items-center justify-center w-full py-12 lg:py-20">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
          <motion.span
            className={cn(
              "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
            )}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          >
            Introducing Dayflow.io
          </motion.span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>

        {memoizedSpotlight}
        <Heading
  fontSize={{ base: 48, md: 64, lg: 84 }}
  color={StargateColors.white}
  lineHeight={1}
  textAlign="center"
>

</Heading>

<AnimatePresence mode="wait">
  <Heading
    as={motion.h1}
    fontSize={{ base: 48, md: 64, lg: 84 }}
    key={currentWord}
    color={StargateColors.white}
    lineHeight={1}
    initial={{ opacity: 0.2, filter: "blur(4px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0.2, filter: "blur(4px)" }}
  >
 
  </Heading>
</AnimatePresence>

{/* Wrap in a flex container */}
<div className="flex flex-row items-center justify-center space-x-4">
  <h1 className="text-6xl font-bold">Revolutionizing</h1>
  <h1 className="text-6xl font-bold">{currentWord}</h1>
 
</div>

        <h1
          ref={subTitleRef}
          className="block text-transparent pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-blue-500 via-purple-600 to-fuchsia-700 bg-clip-text text-center text-7xl font-semibold leading-none"
        >
          <span>Solutions for Your Business</span>
        </h1>

        <p
          ref={textRef}
          className="mt-16 max-w-xl pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10"
        >
          Scheduling a meeting can be a pain. But we at Dayflow.io make it easy
          for your clients to schedule meetings with you{" "}⚡️
        </p>

        <motion.div
          className="mt-5 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
            <Link href="/dashboard" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
              <p className=" text-white text-foreground text-base text-center md:text-base font-bold pl-4 pr-4 lg:pr-0">
                ✨{" "}Effortlessly organize your appointments with AI.
              </p>
              <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20 bg-gradient-to-r from-emerald-500 via-lime-400 to-yellow-300 text-slate-900/50 font-extrabold">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <LetterPullup words={"Glimpse of the dashboard"}  />

      <div className="relative items-center w-full py-12 mx-auto mt-12">
        {memoizedSvg}
        <div className="relative flex items-center py-10 md:py-20 w-full">
          <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
          <div className="flex justify-center rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
            <BorderBeam size={450} duration={12} delay={9} />
            <Image
              ref={imageRef}
              src={HeroImage}
              alt="Hero image"
              priority
              className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
            />
               </div>
          </div>
          </div>
        
    </section>
  );
}
