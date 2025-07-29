import React from "react";
import { motion } from "framer-motion";
import { Lock, Send, CalendarClock, Clock, Shield } from "lucide-react";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Experience the future with
          <span className="text-blue-600"> Forá</span>
        </h2>
      </div>

      {/* First Row */}
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle icon={<Send size={28} />}>Time Capsule Messages</CardTitle>
          <CardContent
            bgFrom="from-violet-400"
            bgTo="to-indigo-400"
            text="Send messages to the future — they’ll unlock when the time is right."
          />
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle icon={<CalendarClock size={28} />}>
            Schedule Everything
          </CardTitle>
          <CardContent
            bgFrom="from-amber-400"
            bgTo="to-orange-400"
            text="Craft messages now and let Chrono deliver them exactly when intended."
          />
        </BounceCard>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle icon={<Lock size={28} />}>Secure Unlock Timers</CardTitle>
          <CardContent
            bgFrom="from-green-400"
            bgTo="to-emerald-400"
            text="Messages remain locked until a chosen date or event."
          />
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle icon={<Shield size={28} />}>Privacy First</CardTitle>
          <CardContent
            bgFrom="from-pink-400"
            bgTo="to-red-400"
            text="Military-grade encryption keeps every word between you and time."
          />
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children, icon }) => {
  return (
    <h3 className="mx-auto mb-2 flex items-center justify-center gap-2 text-center text-2xl font-semibold">
      {icon}
      {children}
    </h3>
  );
};

const CardContent = ({ bgFrom, bgTo, text }) => {
  return (
    <div
      className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br ${bgFrom} ${bgTo} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
    >
      <span className="block text-center font-medium text-white">{text}</span>
    </div>
  );
};

export default BouncyCardsFeatures;
