import React from "react";
import { Link } from "react-router-dom";
import { Users, Rocket, Code, Lightbulb } from "lucide-react";
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
        <section className="text-white ">
          <Footerdemo />
        </section>
      </main>
    </>
  );
};

export default HomePage;
