import React from "react";

interface BusinessCardProps {
  title: string;
  image: string;
  quote?: string;
  bulletPoints?: string[];
  subtitle?: string;
  linkedinUrl?: string;
  isLightTheme?: boolean; // New prop to control card theme
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  title,
  image,
  quote,
  bulletPoints,
  subtitle,
  linkedinUrl,
  isLightTheme = false,
}) => {
  const cardBg = isLightTheme ? "bg-[#F3F3F3]" : "bg-[#121317]";
  const textColor = isLightTheme ? "text-black" : "text-white";
  const secondaryTextColor = isLightTheme
    ? "text-black opacity-60"
    : "text-white opacity-60";
  const secondaryTextColorSubtitle = isLightTheme
    ? "text-black opacity-60"
    : "text-white opacity-60";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${cardBg} group`}
      role="article"
      aria-label={`Card for ${title}`}
    >
      {/* Image */}
      <div className="relative aspect-[5/4]">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover"
          role="img"
        />
      </div>

      {/* Content */}
      <div className={`py-4 px-4 ${textColor}`}>
        <h3 className="text-xl font-bold mb-1" role="heading" aria-level={3}>
          {title}
        </h3>

        {/* Render subtitle for Team/Professionals section */}
        {subtitle && (
          <p
            className={`text-xs ${secondaryTextColorSubtitle} mb-3`}
            role="text"
          >
            {subtitle}
          </p>
        )}

        {/* Render quote for Strategic Alliances section */}
        {quote && (
          <p className={`text-sm ${secondaryTextColor}`} role="text">
            "{quote}"
          </p>
        )}

        {/* Render bullet points for Divisions section */}
        {bulletPoints && (
          <ul
            className={`text-sm ${secondaryTextColor} list-disc list-inside`}
            role="list"
          >
            {bulletPoints.map((point, index) => (
              <li key={index} role="listitem">
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* Render LinkedIn link for Team/Professionals section */}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 text-black-500 text-xs pointer-events-none"
            role="link"
            aria-label={`Visit ${title}'s LinkedIn profile`}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.026-3.059-1.863-3.059-1.863 0-2.147 1.454-2.147 2.956v5.707h-3v-11h2.879v1.504h.041c.401-.757 1.381-1.504 2.841-1.504 3.038 0 3.599 2 3.599 4.604v6.396z" />
            </svg>
            {linkedinUrl}
          </a>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;
