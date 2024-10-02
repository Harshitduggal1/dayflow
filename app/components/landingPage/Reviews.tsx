"use client";

import { motion } from "framer-motion";
import { testimonials } from "./constants";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className=" container">
        <h2 className="text-8xl md:text-8xl text-center font-extrabold tracking-tighter">
          Beyond Expectations.
        </h2>
        <p className="text-4xl md:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300/30 tracking-tight mt-5 max-w-sm mx-auto">
          Our revolutionary   Sheduling Enterprice Software have transformed our clients&apos;
          strategies✨.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 md:p-10 border border-cyan-600 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <span className="text-lg md:text-2xl tracking-tight">
                  {testimonial.review}
                </span>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] before:content-[''] after:absolute before:absolute after:inset-0 before:inset-0 after:bg-[rgb(46,46,176)] after:mix-blend-soft-light before:border before:border-cyan-600 before:z-10 before:rounded-lg">
                   
                  </div>
                  <div className="flex flex-col font-semibold text-white/60">
                    <span>{testimonial.name}</span>
                    <span className="text-sm text-white font-medium">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
              </div>
            ))}          </motion.div>
        </div>
      </div>
    </section>
  );
};