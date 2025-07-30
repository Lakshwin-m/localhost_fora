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
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  // Memoize people data to prevent recreation on every render
  const people: Person[] = useMemo(
    () => [
      {
        id: 1,
        name: "Lakshwin Krishna Reddy M",
        image: "./Pictures/Untitled design (1).png",
        description:
          "Lakshwin is an emerging AI/ML developer and the founder of localhost, with hands-on experience in building intelligent, user-focused applications. Proficient in Python, JavaScript, React, Flask, and SQL, he has developed projects ranging from a power grid fault-detection chatbot using NLP to a sentiment analysis tool powered by spaCy and NLTK. He is also leading the creation of Forá, a time capsule messaging app that blends emotional storytelling with modern web technologies. Comfortable working with platforms like GitHub, Jupyter, VS Code, and Colab, he brings together strong technical skills and creative thinking. With a growing interest in LLM fine-tuning and a certification in relational databases, Lakshwin consistently seeks innovative ways to apply machine learning in real-world scenarios.",
        role: "Founder | Full-Stack Developer | AI Engineer",
        linkedin: "https://www.linkedin.com/in/lakshwinkrishna/",
        Acheivements: [
          "Developed Chrono, a time capsule app using React and TypeScript",
          "Created Capsula, an AI-driven personal assistant",
          "Contributed to open-source projects in the AI/ML space",
        ],
        email: "lakshwinkrishna@gmail.com",
      },
      {
        id: 2,
        name: "A Rohan",
        image: "./Pictures/Untitled design.png",
        description:
          "A Rohan is a technically skilled individual with a strong foundation in Python, SQL, HTML, JavaScript, and Java. He is experienced in tools such as PyCharm, Visual Studio Code, Jupyter Notebooks, and GitHub. Known for strong leadership, app development and front-end development expertise, and active contribution to technical communities. Adept at organizing workshops, managing teams, and delivering real-world tech solutions through effective collaboration and innovation.",
        role: "Co-Founder | Mobile App Developer | UI/UX Designer",
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
        role: "Co-Founder | Head of R&D and Innovation",
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
        name: "Prathik E",
        image: "./Pictures/IMG_0515 (2).png",
        description:
          "Prathik E is an ambitious and detail-oriented undergraduate student currently pursuing his degree in Computer Science, with a strong passion for technology and innovation. Alongside his academic journey, he actively contribute as both a Q/A Tester and an AI/ML Engineer, where his roles are vital in ensuring software quality and developing intelligent, data-driven solutions. His dual expertise allows him to bridge the gap between precision testing and smart automation, making him a valuable asset in building reliable and forward-thinking tech products.",
        role: "Head of Quality Assurance",
        linkedin: "https://www.linkedin.com/in/emily-rodriguez/",
        Acheivements: [
          "Designed user-friendly interfaces for Chrono and Capsula",
          "Conducted user research to inform design decisions",
          "Created design systems to ensure consistency across products",
        ],
        email: "prathike693@gmail.com",
      },
      {
        id: 6,
        name: "Dwaragesh",
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
      {
        id: 7,
        name: "Varnikka T M",
        image: "./Pictures/IMG_0639.png",
        description:
          "Varnikka T M  is a third-year undergraduate student pursuing a Bachelor of Engineering in Computer Science at BITS Pilani, Dubai Campus. She has a strong interest in digital marketing, content development, and IT-enabled communication strategies. As the current Vice President of SHADES, the university’s official art and design club, she leads strategic planning, event coordination, and branding initiatives for campus-wide creative events.Varnikka has interned at IDP Education UAE and Constellation, where she contributed to digital campaigns, video content strategy, and technical data projects. At IDP, she worked with the marketing and IT team to develop a structured YouTube content series and evaluate editing tools. At Constellation, she completed a technical internship focused on data analysis and project work using Jupyter Notebook.",
        role: "Head of Marketing",
        linkedin: "https://www.linkedin.com/in/alex-thompson/",
        Acheivements: [
          "Serving as Vice President of SHADES (2024–2025), overseeing university-wide events such as Artex ",
          "Responsible for strategic planning, budgeting, team coordination, and promotional activities across digital platforms.",
        ],
        email: "varnikkatm@gmail.com",
      },
    ],
    []
  );

  // Memoized event handlers to prevent recreation
  const handleMouseEnter = useCallback(
    (person: Person) => {
      if (!selectedPerson) {
        setHoveredPerson(person);
      }
    },
    [selectedPerson]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredPerson(null);
  }, []);

  const handlePersonClick = useCallback((person: Person) => {
    setSelectedPerson(person);
    setHoveredPerson(null);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedPerson(null);
  }, []);

  // Memoized avatar styles to prevent recalculation
  const getAvatarStyles = useCallback(
    (person: Person, index: number) => {
      const isSelected = selectedPerson?.id === person.id;
      const isHovered = hoveredPerson?.id === person.id;

      let className =
        "w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-200 ease-out relative ";

      if (isSelected) {
        className +=
          "scale-125 ring-4 ring-blue-400/50 ring-offset-4 ring-offset-gray-900";
      } else if (isHovered) {
        className +=
          "scale-110 ring-2 ring-white/30 ring-offset-2 ring-offset-gray-900";
      } else {
        className += "hover:scale-105";
      }

      return {
        className,
        style: {
          marginLeft: index > 0 ? "-20px" : "0",
          zIndex: isSelected ? 50 : people.length - index,
        },
      };
    },
    [selectedPerson, hoveredPerson, people.length]
  );

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 md:p-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-5xl">
          <h1 className="text-6xl md:text-7xl font-extralight text-white mb-6 tracking-tight leading-tight">
            Meet the Team
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
            Meet the visionary leaders who drive innovation and shape the future
            of our organization
          </p>
        </div>

        {/* Team avatars */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center">
            {people.map((person, index) => {
              const avatarStyles = getAvatarStyles(person, index);

              return (
                <div
                  key={person.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(person)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handlePersonClick(person)}
                  style={avatarStyles.style}
                >
                  {/* Optimized tooltip - simpler animation */}
                  {hoveredPerson?.id === person.id && !selectedPerson && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-8 z-50 opacity-0 animate-fade-in pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-sm border border-gray-300 text-black px-4 py-3 rounded-lg shadow-lg min-w-[220px] max-w-[320px]">
                        <div className="font-medium text-sm md:text-base mb-1">
                          {person.name}
                        </div>
                        <div className="text-xs md:text-sm text-gray-700 tracking-wide">
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

        {/* Selected Profile Panel - Optimized */}
        {selectedPerson && (
          <div className="max-w-4xl w-full opacity-0 animate-fade-in-up">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-5 md:px-8 md:py-6">
                <button
                  onClick={handleClosePanel}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-150 p-2 rounded-full hover:bg-gray-700/50"
                  aria-label="Close profile panel"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-gray-600 shadow-lg">
                    <img
                      src={selectedPerson.image}
                      alt={selectedPerson.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-light mb-2 tracking-tight text-white">
                      {selectedPerson.name}
                    </h2>
                    <p className="text-yellow-400 text-base md:text-lg font-medium tracking-wide">
                      {selectedPerson.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3 flex items-center">
                      <div className="w-3 h-0.5 bg-blue-500 mr-2" />
                      Executive Summary
                    </h3>
                    <p className="text-gray-800 leading-relaxed text-sm md:text-base mb-6">
                      {selectedPerson.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3 flex items-center">
                      <div className="w-3 h-0.5 bg-green-500 mr-2" />
                      Key Achievements
                    </h3>
                    <div className="space-y-2 mb-6">
                      {selectedPerson.Acheivements.filter(Boolean).map(
                        (achievement, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm leading-snug">
                              {achievement}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    {selectedPerson.email && (
                      <>
                        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3 flex items-center">
                          <div className="w-3 h-0.5 bg-yellow-500 mr-2" />
                          Contact Information
                        </h3>
                        <p className="text-gray-800 text-sm md:text-base">
                          {selectedPerson.email}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
      `}</style>
    </div>
  );
};

export default AnimatedTooltip;
