import React, { useState, useEffect } from "react";
import InterviewCard from "../../Components/InterviewCard/InterviewCard";
import "./DashboardPage.css";
import robotImg from '../../assets/robot.png';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const dummyUserInterviews = [
  {
    _id: "1",
    role: "Content Developer",
    type: "Technical",
    techstack: ["React", "Node.js"],
    createdAt: "2025-04-19T20:10:00Z",
    feedback: {
      totalScore: 70,
      finalAssessment: "The candidate's performance was weak. They demonstrated lack of technical...",
    },
  },
];

const dummyAllInterview = [
  {
    _id: "2",
    role: "Front End Developer",
    type: "Technical",
    techstack: ["React", "CSS"],
    createdAt: "2025-05-26T10:00:00Z",
    feedback: null,
  },
  {
    _id: "3",
    role: "AIMAL Training Room",
    type: "Mixed",
    techstack: ["Python", "AI"],
    createdAt: "2025-05-27T10:00:00Z",
    feedback: null,
  },
  // Add more as needed
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [userInterviews] = useState(dummyUserInterviews);
  const [allInterview] = useState(dummyAllInterview);
  const userId = "user123"; // Replace with actual user ID from auth

  const hasPastInterviews = userInterviews.length > 0;
  const hasUpcomingInterviews = allInterview.length > 0;
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:5001/api/auth/check-auth", {
          withCredentials: true,
        });
      } catch {
        alert("Not authenticated");
        navigate("/sign-in");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="parent-container">
      <div className="dashboard-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="text-area">
            <h2 className="hero-title">Get Interview-Ready with AI-Powered Practice & Feedback</h2>
            <p className="hero-subtitle">
              Practice real interview questions & get instant feedback
            </p>
            <button
              className="hero-btn"
              onClick={() => window.location.href = "/interview"}
            >
              Start an Interview
            </button>
          </div>
          <img src={robotImg} alt="robo-dude" className="robot-img"/>
        </section>

        {/* Your Interviews */}
        <section className="flex flex-col gap-6 mt-8">
          <h2 className="section-title">Your Interviews</h2>
          <div className="interviews-section">
            {hasPastInterviews ? (
              userInterviews.map((interview) => (
                <InterviewCard key={interview._id} userId={userId} interviewId={interview._id} role={interview.role} type={interview.type} techstack={interview.techstack} createdAt={interview.createdAt} feedback={interview.feedback} onView={(id) => window.location.href = `/interview/${id}`} onFeedback={(id) => window.location.href = `/interview/${id}/feedback`}
                />
              ))
            ) : (
              <p className="text-gray-400">You haven't taken any interviews yet</p>
            )}
          </div>
        </section>

        {/* Take Interviews */}
        <section className="flex flex-col gap-6 mt-8">
          <h2 className="section-title">Take Interviews</h2>
          <div className="interviews-section">
            {hasUpcomingInterviews ? (
              allInterview.map((interview) => (
                <InterviewCard key={interview._id} userId={userId} interviewId={interview._id} role={interview.role} type={interview.type} techstack={interview.techstack} createdAt={interview.createdAt} feedback={interview.feedback} onView={(id) => window.location.href = `/interview/${id}`} onFeedback={(id) => window.location.href = `/interview/${id}/feedback`}
                />
              ))
            ) : (
              <p className="text-gray-400">There are no interviews available</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

