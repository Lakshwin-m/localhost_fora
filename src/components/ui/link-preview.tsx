"use client";

import React from "react";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  isStatic?: boolean;
  imageSrc?: string;
};

const LinkPreview: React.FC<LinkPreviewProps> = ({
  children,
  url,
  className = "",
  width = 200,
  height = 125,
  isStatic = false,
  imageSrc = "",
}) => {
  // Generate preview image URL only if not static
  const src = isStatic
    ? imageSrc
    : `https://api.microlink.io/?url=${encodeURIComponent(
        url
      )}&screenshot=true&meta=false`;

  return (
    <a
      href={url}
      className={`inline-flex items-center gap-3 underline hover:no-underline ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {src && (
        <img
          src={src}
          alt="Link preview"
          width={width}
          height={height}
          style={{ borderRadius: 8, objectFit: "cover", width, height }}
        />
      )}
      <span>{children}</span>
    </a>
  );
};

export default LinkPreview;
