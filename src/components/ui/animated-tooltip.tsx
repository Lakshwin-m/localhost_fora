import React, { useState, useCallback, useMemo } from "react";

// Person interface
interface Person {
  id: number;
  name: string;
  image: string;
  description: string;
  role: string;
  linkedin: string;
  Acheivements: string[];
  email: string;
}

const AnimatedTooltip: React.FC = () => {
  const [hoveredPerson, setHoveredPerson] = useState<Person | null>(null);

  // Memoize people data to prevent recreation on every render
  const people: Person[] = useMemo(
    () => [
      {
        id: 1,
        name: "Lakshwin Krishna Reddy M",
        image: "./Pictures/Untitled design (1).png",
        description:
          "Lakshwin is an emerging AI/ML developer and the founder of localhost, with hands-on experience in building intelligent, user-focused applications. Proficient in Python, JavaScript, React, Flask, and SQL, he has developed projects ranging from a power grid fault-detection chatbot using NLP to a sentiment analysis tool powered by spaCy and NLTK. He is also leading the creation of Forá, a time capsule messaging app that blends emotional storytelling with modern web technologies. Comfortable working with platforms like GitHub, Jupyter, VS Code, and Colab, he brings together strong technical skills and creative thinking. With a growing interest in LLM fine-tuning and a certification in relational databases, Lakshwin consistently seeks innovative ways to apply machine learning in real-world scenarios.",
        role: "Founder | CTO",
        linkedin: "https://www.linkedin.com/in/lakshwinkrishna/",
        Acheivements: [
          "Built an intelligent chatbot for solar inverter fault detection and power loss analysis using natural language processing techniques.",
          "Founded localhost and leads the design and development of Forá, an innovative messaging app that lets users send messages to the future.",
          "Designed and delivered a desktop sentiment analysis tool applying deep learning models to interpret and visualize movie review sentiments.",
        ],
        email: "lakshwinkrishna@gmail.com",
      },
      {
        id: 2,
        name: "A Rohan",
        image: "./Pictures/Untitled design.png",
        description:
          "A Rohan is a technically skilled individual with a strong foundation in Python, SQL, HTML, JavaScript, and Java. He is experienced in tools such as PyCharm, Visual Studio Code, Jupyter Notebooks, and GitHub. Known for strong leadership, app development and front-end development expertise, and active contribution to technical communities. Adept at organizing workshops, managing teams, and delivering real-world tech solutions through effective collaboration and innovation.",
        role: "Co-Founder | CEO",
        linkedin: "https://www.linkedin.com/in/rohan-a/",
        Acheivements: [
          "Served as House Captain and Junior Captain at Sir Mutha School; led the 'Sapphire' house to win the discipline cup in 2022.",
          "Led a student team during the institute's annual technical symposium, ARCANE'24, as an Executive Member of the Open Source Club.",
          "Conducted a 7-day Python library workshop exclusively for second-year students to enhance their technical skills.",
        ],
        email: "akrohan437@gmail.com",
      },
      {
        id: 3,
        name: "S V Vishal",
        image: "./Pictures/Untitled design (3).png",
        description:
          "S V Vishal is an aspiring psychologist with a focus on research, clinical, and organizational psychology. He is currently exploring lesser-known areas of the field through independent research. He serves as the Head of R&D and Innovation at localhost, leading studies on emerging psychological trends and behavioral insights. Interested in the intersection of mental health, workplace dynamics, and societal behavior. Driven by a commitment to make psychological knowledge more accessible and impactful.",
        role: "Co-Founder | Head of R&D and Finance",
        linkedin: "https://www.linkedin.com/in/david-kim/",
        Acheivements: [
          "Served as the Head of Finance for college cultural events.",
          "Conducted research in the field of psychology.",
          "Guitarist with grade 3 certification",
        ],
        email: "svvishal.workspace@gmail.com",
      },
      {
        id: 4,
        name: "Abhimanyu Srinivasan",
        image: "./Pictures/IMG_0538.jpg",
        description:
          "Abhimanyu Srinivasan is a dedicated Chemical Engineer with a natural ability to organize, plan, and optimize operations. He combines technical knowledge with a systematic approach to ensure smooth workflows and consistent outcomes.",
        role: "Co-Founder | Head of Growth & Product Management",
        linkedin: "https://www.linkedin.com/in/alex-thompson/",
        Acheivements: [
          "Organized and managed major events within the department",
          "Coordinated with faculty and student teams to ensure smooth planning and execution of events",
        ],
        email: "abhizsrini@gmail.com",
      },
      {
        id: 5,
        name: "Varnikka T M",
        image: "./Pictures/IMG_0639.png",
        description:
          "Varnikka T M  is a third-year undergraduate student pursuing a Bachelor of Engineering in Computer Science at BITS Pilani, Dubai Campus. She has a strong interest in digital marketing, content development, and IT-enabled communication strategies. As the current Vice President of SHADES, the university's official art and design club, she leads strategic planning, event coordination, and branding initiatives for campus-wide creative events.Varnikka has interned at IDP Education UAE and Constellation, where she contributed to digital campaigns, video content strategy, and technical data projects. At IDP, she worked with the marketing and IT team to develop a structured YouTube content series and evaluate editing tools. At Constellation, she completed a technical internship focused on data analysis and project work using Jupyter Notebook.",
        role: "Head of Marketing",
        linkedin: "https://www.linkedin.com/in/alex-thompson/",
        Acheivements: [
          "Serving as Vice President of SHADES (2024–2025), overseeing university-wide events such as Artex ",
          "Responsible for strategic planning, budgeting, team coordination, and promotional activities across digital platforms.",
        ],
        email: "varnikkatm@gmail.com",
      },
      {
        id: 6,
        name: "Dwaragesh C",
        image: "./Pictures/Untitled design (4) (1).png",
        description:
          "Dwaragesh C is a full Stack Developer with diverse interests and is a dedicated team manager. He fosters growth and upbrings the greatest of the team in a positive environment. He is a freelance video editor who brings life to media and an experienced designer.",
        role: "Creative Media Producer | Developer",
        linkedin: "https://www.linkedin.com/in/lisa-wang/",
        Acheivements: [
          "Participated in multiple hackathons and led to the lead the team to the finals.",
          "Hosted multiple events in college, ensuring the success of the event as well as managing the entire designing works.",
        ],
        email: "dwarageshc7203@gmail.com",
      },
      
    ],
    []
  );

  // Memoized event handlers to prevent recreation
  const handleMouseEnter = useCallback(
    (person: Person) => {
      setHoveredPerson(person);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredPerson(null);
  }, []);

  // Memoized avatar styles to prevent recalculation
  const getAvatarStyles = useCallback(
    (person: Person, index: number) => {
      const isHovered = hoveredPerson?.id === person.id;

      let className =
        "w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl transition-all duration-200 ease-out relative ";

      if (isHovered) {
        className +=
          "scale-105 sm:scale-110 ring-1 sm:ring-2 ring-white/30 ring-offset-1 sm:ring-offset-2 ring-offset-gray-900";
      } else {
        className += "hover:scale-105";
      }

      return {
        className,
        style: {
          marginLeft:
            index > 0
              ? window.innerWidth < 640
                ? "-12px"
                : window.innerWidth < 768
                ? "-16px"
                : "-20px"
              : "0",
          zIndex: isHovered ? 50 : people.length - index,
        },
      };
    },
    [hoveredPerson, people.length]
  );

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-5xl px-2">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Meet theTeam
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light px-4">
            Meet the visionary leaders who drive innovation and shape the future
            of our organization
          </p>
        </div>

        {/* Team avatars */}
        <div className="relative mb-8 sm:mb-12 w-full max-w-6xl">
          <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-2 sm:gap-0 px-2">
            {people.map((person, index) => {
              const avatarStyles = getAvatarStyles(person, index);

              return (
                  <div
                    key={person.id}
                    className="relative group cursor-pointer flex-shrink-0"
                    onMouseEnter={() => handleMouseEnter(person)}
                    onMouseLeave={handleMouseLeave}
                    style={avatarStyles.style}
                  >
                  {/* Optimized tooltip - responsive positioning */}
                  {hoveredPerson?.id === person.id && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 sm:mb-6 md:mb-8 z-50 opacity-0 animate-fade-in pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-sm border border-gray-300 text-black px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-lg min-w-[180px] sm:min-w-[220px] max-w-[280px] sm:max-w-[320px]">
                        <div className="font-medium text-xs sm:text-sm md:text-base mb-1">
                          {person.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-700 tracking-wide">
                          {person.role}
                        </div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
                      </div>
                    </div>
                  )}

                  {/* Avatar */}
                  <div className={avatarStyles.className}>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }

        @media (max-width: 475px) {
          .xs\:w-20 {
            width: 5rem;
          }
          .xs\:h-20 {
            height: 5rem;
          }
          .xs\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedTooltip;
