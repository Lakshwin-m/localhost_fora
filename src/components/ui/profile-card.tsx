import React, { useState } from "react";

const ProfileCard = ({ name, username, image, role, description }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <>
      <style>
        {`
          .hover-scale {
            transition: transform 700ms ease-out;
          }
          .hover-scale:hover {
            transform: scale(1.02);
          }
          .image-scale {
            transition: transform 700ms ease-out;
          }
          .image-container:hover .image-scale {
            transform: scale(1.03);
          }
          .hover-translate {
            transition: transform 500ms ease-out;
          }
          .hover-translate:hover {
            transform: translateX(4px);
          }
          .hover-scale-sm {
            transition: transform 500ms ease-out;
          }
          .hover-scale-sm:hover {
            transform: scale(1.1);
          }
        `}
      </style>

      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg dark:shadow-2xl dark:shadow-black/80 overflow-hidden hover-scale transition-all">
        <div className="relative overflow-hidden image-container">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover image-scale"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 dark:from-black/60 to-transparent pointer-events-none" />
          <div className="absolute top-6 left-6">
            <h2 className="text-2xl font-medium text-white drop-shadow-lg">
              {name}
            </h2>
          </div>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden hover-scale-sm ring-2 ring-gray-200 dark:ring-zinc-700">
              <img
                src={image}
                alt={`${name} avatar`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hover-translate">
              <div className="text-sm font-semibold text-gray-800 dark:text-zinc-200">
                @{username}
              </div>
              <div className="text-xs text-purple-600 font-medium">{role}</div>
            </div>
          </div>
          <button
            onClick={() => setShowDesc(!showDesc)}
            className="bg-gray-900 dark:bg-zinc-800 text-white rounded-lg px-4 py-2 text-sm font-medium
                       transition-all duration-500 ease-out transform hover:scale-105 
                       hover:bg-gray-800 dark:hover:bg-zinc-700 active:scale-95"
          >
            {showDesc ? "Hide" : "See more"}
          </button>
        </div>

        {/* Description */}
        {showDesc && (
          <div className="px-4 pb-4 text-sm text-gray-600 dark:text-zinc-400 transition-all duration-300">
            {description}
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileCard;
