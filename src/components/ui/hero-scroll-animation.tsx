"use client";

import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import Silk from "./silk";
import { Typewriter } from "./typewriter";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-gradient-to-t from-[#ebebeb] to-[#dadada] flex flex-col items-center justify-center text-black font-semibold"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl px-6 text-center tracking-tight leading-tight z-10">
        <span className="text-purple-600">Hi,</span>
      </h1>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0.2, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-40% 0px -40% 0px",
    once: false,
  });

  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Restart animation
      setShowTypewriter(false);
      setTimeout(() => setShowTypewriter(true), 100); // slight delay to restart
    }
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale, rotate }}
      className="relative h-screen bg-black text-white flex flex-col justify-center items-center px-6"
    >
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-2xl sm:text-2xl font-semibold tracking-tight leading-tight mb-4">
          We Are:
        </h2>
        {showTypewriter && (
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            <Typewriter text="./localhost" cursorChar="_" speed={100} />
          </h1>
        )}
      </div>
    </motion.section>
  );
};

const HeroScrollAnimation: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[200vh] w-full">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default HeroScrollAnimation;
