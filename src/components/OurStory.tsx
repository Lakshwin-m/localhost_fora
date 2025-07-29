"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OurStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Paragraphs fade in with scroll
      const paragraphs = contentRef.current?.querySelectorAll(".paragraph");
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Name highlights animation
      const boldNames =
        containerRef.current?.querySelectorAll(".name-highlight");
      if (boldNames) {
        gsap.to(boldNames, {
          textShadow: "0 0 8px rgba(255, 255, 255, 0.4)",
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black"
      ref={containerRef}
    >
      <main className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
          >
            Our Story
          </h1>
        </div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-300">
            <motion.div
              ref={contentRef}
              className="text-lg sm:text-xl lg:text-2xl leading-relaxed space-y-8 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="paragraph">
                <p>
                  We're seven friends —{" "}
                  <span className="text-white font-bold name-highlight">
                    Lakshwin
                  </span>
                  ,{" "}
                  <span className="text-white font-bold name-highlight">
                    Rohan
                  </span>
                  ,{" "}
                  <span className="text-white font-bold name-highlight">
                    Abhimanyu
                  </span>
                  ,{" "}
                  <span className="text-white font-bold name-highlight">
                    Vishal
                  </span>
                  ,{" "}
                  <span className="text-white font-bold name-highlight">
                    Prathik
                  </span>
                  ,{" "}
                  <span className="text-white font-bold name-highlight">
                    Dwaragesh
                  </span>
                  , and{" "}
                  <span className="text-white font-bold name-highlight">
                    Varnikka
                  </span>{" "}
                  — who got tired of waiting for cool ideas to exist, so we
                  started building them ourselves.
                </p>
              </div>

              <div className="paragraph">
                <p>
                  <span className="font-bold">Localhost</span> didn’t start in a
                  meeting room. It started in group chats, midnight calls, and
                  chaotic Slack threads. No rules, no roadmaps — just a shared
                  drive to create without limits.
                </p>
              </div>

              <div className="paragraph">
                <p>
                  The spark that started it all is{" "}
                  <span className="font-bold">Forá</span> — a time capsule
                  messaging app inspired by one weird and wonderful question:{" "}
                  <span className="font-bold">
                    “What if you could talk to the future?”
                  </span>
                </p>
              </div>

              <div className="paragraph">
                <p>
                  That question ignited countless ideas, late-night debates, and
                  coding marathons only close friends can pull off. From that
                  energy, something uniquely ours began to take shape.
                </p>
              </div>

              <div className="paragraph">
                <p>
                  Today, <span className="font-bold">Localhost</span> is where
                  curiosity meets craftsmanship — a creative playground and
                  innovation lab where we build with intention, experiment
                  boldly, and bring unexpected ideas to life. From innovative
                  apps to AI-powered tools, we’re always pushing the boundaries
                  of what technology can do.
                </p>
              </div>

              <div className="paragraph">
                <p>
                  <span className="font-bold">Forá is just the beginning.</span>
                </p>
              </div>

              <div className="paragraph">
                <motion.p
                  className="text-white font-bold text-2xl sm:text-3xl"
                  animate={{
                    textShadow: [
                      "0 0 8px rgba(255, 255, 255, 0.4)",
                      "0 0 12px rgba(255, 255, 255, 0.6)",
                      "0 0 8px rgba(255, 255, 255, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  And we’re only getting started.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurStory;
