import React from "react";
import "./InterviewCard.css";
import adobe from "../../assets/covers/adobe.png";
import amazon from "../../assets/covers/amazon.png";
import facebook from "../../assets/covers/facebook.png";
import hostinger from "../../assets/covers/hostinger.png";
import pinterest from "../../assets/covers/pinterest.png";
import quora from "../../assets/covers/quora.png";
import reddit from "../../assets/covers/reddit.png";
import skype from "../../assets/covers/skype.png";
import spotify from "../../assets/covers/spotify.png";
import telegram from "../../assets/covers/telegram.png";
import tiktok from "../../assets/covers/tiktok.png";
import yahoo from "../../assets/covers/yahoo.png";
import techDefault from "../../assets/tech.svg"; // Your blue default icon
import { mappings } from "../../utils/techIcons";

// Import all cover images from assets/covers
const coverImages = [
  adobe,
  amazon,
  facebook,
  hostinger,
  pinterest,
  quora,
  reddit,
  skype,
  spotify,
  telegram,
  tiktok,
  yahoo,
];

export default function InterviewCard({
  interviewId,
  role,
  type,
  techstack,
  createdAt,
  feedback,
  onView,
  onFeedback,
}) {
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const badgeClass = {
    Behavioral: "badge behavioral",
    Mixed: "badge mixed",
    Technical: "badge technical",
  }[normalizedType] || "badge mixed";

  const formattedDate = new Date(createdAt).toLocaleDateString();
  const randomCover = coverImages[Math.floor(Math.random() * coverImages.length)];

  // Helper to handle icon fallback
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = techDefault;
  };

  return (
    <div className="interview-card">
      {/* Type Badge */}
      <div className={badgeClass}>{normalizedType}</div>

      {/* Cover Image */}
      <img src={randomCover} alt="cover" className="cover-img" />

      {/* Interview Role */}
      <h3 className="role">{role} Interview</h3>

      {/* Date & Score */}
      <div className="meta">
        <span>📅 {formattedDate}</span>
        <span>⭐ {feedback?.totalScore || "---"}/100</span>
      </div>

      {/* Feedback or Placeholder Text */}
      <p className="feedback">
        {feedback?.finalAssessment ||
          "You haven't taken this interview yet. Take it now to improve your skills."}
      </p>

      {/* Tech Stack & Button */}
      <div className="techstack">
        <div className="tech-icons">
          {techstack &&
            techstack.map((tech, idx) => {
              const slug = mappings[tech.toLowerCase()] || tech.toLowerCase();
              const iconUrl = slug
                ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`
                : techDefault;
              // If iconUrl is techDefault or if tech is 'ai', use local techDefault
              const isAI = tech.toLowerCase() === 'ai';
              return (
                <img
                  key={idx}
                  src={isAI ? techDefault : iconUrl}
                  alt={tech}
                  title={tech}
                  className="tech-icon"
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 4,
                    background: "#fff",
                    borderRadius: 4,
                  }}
                  onError={handleImgError}
                />
              );
            })}
        </div>
        <button
          className="action-btn"
          onClick={() => (feedback ? onFeedback(interviewId) : onView(interviewId))}
        >
          {feedback ? "Check Feedback" : "View Interview"}
        </button>
      </div>
    </div>
  );
}