import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { trackEvent } from "@/lib/ga";

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [accepted, setAccepted] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedRole && scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      if (scrollHeight <= clientHeight + 10) {
        setHasScrolledToBottom(true);
      } else {
        setHasScrolledToBottom(false);
        setAccepted(false);
      }
    }
  }, [selectedRole]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setHasScrolledToBottom(true);
      }
    }
  };

  // Replace with actual Google Form Link
  const gFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSciSfLmWeCmIcGxD8CzoaEvBf63brtJSGgHYnz9c23R1yNKmg/viewform?usp=header";

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 font-sans selection:bg-white selection:text-black flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {!selectedRole ? (
          <div className="animate-in fade-in duration-700 ease-out">
            <Link to="/" className="inline-flex items-center text-xs text-neutral-500 hover:text-white transition-colors mb-20 uppercase tracking-widest font-medium">
              <ArrowLeft className="w-3 h-3 mr-3" />
              Index
            </Link>

            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">Careers.</h1>
            <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mb-32 leading-relaxed">
              We are building the next generation of digital experiences. Join a team dedicated to craft, performance, and impact.
            </p>

            <div className="border-t border-neutral-800">
              <div className="py-10 flex text-xs text-neutral-500 uppercase tracking-widest font-medium">
                <span className="w-2/3">Open Positions</span>
                <span className="w-1/3 text-right">Location / Type</span>
              </div>
              
              <button 
                onClick={() => {
                  setSelectedRole("Intern");
                  trackEvent("join_team_cta_click", { role: "Intern", location: "careers_page" });
                }}
                className="w-full text-left group flex items-center justify-between py-10 border-t border-neutral-800 hover:bg-neutral-900/30 transition-colors px-6 -mx-6"
              >
                <div className="w-2/3">
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">Intern</h3>
                </div>
                <div className="w-1/3 flex items-center justify-end gap-6">
                  <span className="text-neutral-500 hidden sm:inline-block font-light text-sm">Remote</span>
                  <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:-rotate-45 transition-all duration-500" strokeWidth={1} />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-700 ease-out">
            <button 
              onClick={() => { setSelectedRole(null); setAccepted(false); }}
              className="inline-flex items-center text-xs text-neutral-500 hover:text-white transition-colors mb-20 uppercase tracking-widest font-medium"
            >
              <ArrowLeft className="w-3 h-3 mr-3" />
              All Roles
            </button>

            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">{selectedRole}</h2>
              <p className="text-neutral-500 font-light">Remote</p>
            </div>

            <div className="border border-neutral-800/80 bg-neutral-950 p-8 md:p-14">
              <div className="flex items-center justify-between mb-12 border-b border-neutral-800/80 pb-6">
                <h3 className="text-xs font-medium tracking-widest uppercase text-neutral-400">Non-Disclosure Agreement</h3>
                
              </div>
              
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="text-sm md:text-base font-light text-neutral-400 leading-loose mb-16 space-y-8 max-h-[50vh] overflow-y-auto pr-6 custom-scrollbar"
              >
  <p>
    Before accessing the application materials for this position, you must review and accept our standard Confidentiality and Non-Disclosure terms.
  </p>

  <div className="pl-6 border-l border-neutral-800 space-y-8">
    
    <div>
      <h4 className="text-neutral-200 font-medium mb-2 uppercase text-xs tracking-widest">
        1. Nature of Organization
      </h4>
      <p>
        The Applicant acknowledges that this opportunity is offered by an early-stage, currently unregistered company operating under the name ./localhost. The company is in the process of formal registration, expected to be completed within the next month.
      </p>
    </div>

    <div>
      <h4 className="text-neutral-200 font-medium mb-2 uppercase text-xs tracking-widest">
        2. Confidential Information
      </h4>
      <p>
        The Applicant acknowledges that during the application and interview process, they may be exposed to proprietary information, business strategies, technical designs, product concepts, and other trade secrets related to Forá and associated projects.
      </p>
    </div>

    <div>
      <h4 className="text-neutral-200 font-medium mb-2 uppercase text-xs tracking-widest">
        3. Strict Confidence
      </h4>
      <p>
        All information discussed, shared, or otherwise provided to the Applicant shall be held in strict confidence and shall not be disclosed, reproduced, or distributed to any third party without explicit written authorization.
      </p>
    </div>

    <div>
      <h4 className="text-neutral-200 font-medium mb-2 uppercase text-xs tracking-widest">
        4. Sole Purpose
      </h4>
      <p>
        We ensure that any information collected during the application process is used solely for evaluation purposes and not for personal gain, commercial use, or any other external purpose

    <div>
      <h4 className="text-neutral-200 font-medium mb-2 uppercase text-xs tracking-widest">
        5. Non-Disclosure of Materials
      </h4>
      <p>
        The applicant agrees not to publicly share, publish, or discuss any materials, ideas, or internal details related to the company or its products on social media, portfolios, or any public platform until explicitly permitted.
      </p>
    </div>

  </div>

  <p className="text-neutral-500">
    By confirming below, you acknowledge that you have read, understood, and agree to these terms.
  </p>
</div>

              <div className="pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <label className={`flex items-center space-x-4 group ${hasScrolledToBottom ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}>
                  <div className="relative items-center justify-center flex-shrink-0 flex">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={accepted}
                      disabled={!hasScrolledToBottom}
                      onChange={(e) => setAccepted(e.target.checked)}
                    />
                    <div className="w-5 h-5 border border-neutral-600 bg-transparent peer-checked:bg-white peer-checked:border-white transition-all duration-300 flex items-center justify-center">
                      <Check className={`w-3 h-3 text-black transition-opacity duration-300 ${accepted ? 'opacity-100' : 'opacity-0'}`} strokeWidth={3} />
                    </div>
                  </div>
                  <span className={`transition-colors text-xs uppercase tracking-widest font-medium ${hasScrolledToBottom ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-500'}`}>
                    I agree to the terms {hasScrolledToBottom ? '' : ''}
                  </span>
                </label>

                <a
                  href={accepted ? gFormLink : undefined}
                  target={accepted ? "_blank" : undefined}
                  rel={accepted ? "noopener noreferrer" : undefined}
                  className={`
                    px-10 py-4 text-xs font-medium tracking-widest uppercase transition-all duration-500
                    ${accepted 
                      ? "bg-white text-black hover:bg-neutral-200 cursor-pointer" 
                      : "bg-neutral-900 text-neutral-600 cursor-not-allowed"}
                  `}
                  onClick={(e) => {
                    if (!accepted) {
                      e.preventDefault();
                    } else {
                      trackEvent("continue_application_submit", { role: selectedRole });
                    }
                  }}
                >
                  Continue Application
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
