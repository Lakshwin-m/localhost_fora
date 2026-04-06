import React from "react";
import { Link } from "react-router-dom";
import { Users, Rocket, Code, Lightbulb } from "lucide-react";
import { trackEvent } from "@/lib/ga";
import MeetTheTeam from "@/components/MeetTheTeam";
import Heroscrollanimation from "./ui/hero-scroll-animation";
import { StackingCard } from "@/components/ui/stacking-card";
import OurStory from "@/components/OurStory";
import footer from "@/components/ui/footer";
import TimeCapsuleLaunch from "@/components/TimeCapsuleLaunch";
import { Footerdemo } from "@/components/ui/underline-animation";
const services = [
  {
    title: "Empower Digital Creativity",
    description:
      "Foster a world where users and creators alike can express themselves through powerful, beautifully designed applications.",
    image:
      "https://images.unsplash.com/photo-1581091012184-7c12f8e761d4?w=800&auto=format&fit=crop",
    color: "#4F46E5",
  },
  {
    title: "Promote Inclusive Innovation",
    description:
      "Ensure our technologies are accessible and beneficial to diverse users and communities.",
    image:
      "https://images.unsplash.com/photo-1624697963075-ec9a376251bf?w=800&auto=format&fit=crop",
    color: "#EC4899",
  },
  {
    title: "Revolutionize User Experience",
    description:
      "Set new standards in app usability, aesthetics, and interactivity.",
    image:
      "https://images.unsplash.com/photo-1612277790683-5ec7a05b4be3?w=800&auto=format&fit=crop",
    color: "#10B981",
  },
  {
    title: "Deliver High-Quality Apps",
    description:
      "We help brands tell their stories with compelling visuals, messaging, and experiences.",
    image:
      "https://images.unsplash.com/photo-1613470208960-d3d46ef56df2?w=800&auto=format&fit=crop",
    color: "#F97316",
  },
  {
    title: "Innovate Through Technology",
    description: "Embrace the latest technologies to stay ahead of the curve.",
    image:
      "https://images.unsplash.com/photo-1611186871348-b4e2a6d02ad9?w=800&auto=format&fit=crop",
    color: "#6366F1",
  },
];

const HomePage = () => {
  return (
    <>
      {/* Hero animation sits outside to avoid white background interference */}
      <Heroscrollanimation />
      <TimeCapsuleLaunch />
      {/* Main Content */}
      <main className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 bg-black text-white space-y-24">
        {/* About */}
        <section className="max-w-4xl mx-auto text-center px-2 sm:px-4">
          <OurStory />
        </section>

        {/* What We Do */}
        <section className="max-w-6xl mx-auto text-center px-2 sm:px-4">
          <StackingCard services={services} />
        </section>

        {/* Meet the Team */}
        <section className="">
          <MeetTheTeam />
        </section>

        {/* Careers CTA - Clean, Minimal */}
        <section className="max-w-6xl mx-auto py-32 px-4 sm:px-6">
          <div className="border-t border-b border-neutral-800 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tighter text-white mb-6 leading-none">
                Join the Team.
              </h2>
              <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-xl">
                We are always looking for exceptional talent. If you have an uncompromising standard for craft, we want to hear from you.
              </p>
            </div>
            
            <Link 
              to="/careers" 
              onClick={() => trackEvent("join_team_cta_click", { location: "homepage" })}
              className="flex-shrink-0 group inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 text-xs font-medium uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              View Openings
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="text-white ">
          <Footerdemo />
        </section>
      </main>
    </>
  );
};

export default HomePage;
