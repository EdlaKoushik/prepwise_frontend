import React from "react";
import "./LandingPage.css"; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="icon">
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 2a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15zm-7.5 5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5zm-3 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H9zm-2 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7z"/>
            </svg>
          </span>
          <span className="title">PrepWise</span>
        </div>
        <nav className="nav">
          <a href="/sign-in">Sign In</a>
          <a href="/sign-up">Sign Up</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h1>
          Get Interview-Ready with <span className="highlight">AI-Powered</span> Practice & Feedback
        </h1>
        <p>
          Practice real interview questions, get instant feedback, and boost your confidence with PrepWise's intelligent AI interviewer.
        </p>
        <a href="/sign-up" className="cta-btn">Get Started Free</a>
      </main>

      {/* Features Section */}
      <section className="features ">
        <div className="feature-card flex flex-col items-center">
          <span className="emoji">💬</span>
          <h3>AI Interviewer</h3>
          <p>Simulate real interviews with an AI that adapts to your responses.</p>
        </div>
        <div className="feature-card flex flex-col items-center">
          <span className="emoji">⚡</span>
          <h3>Instant Feedback</h3>
          <p>Receive actionable feedback to improve your answers and skills instantly.</p>
        </div>
        <div className="feature-card flex flex-col items-center">
          <span className="emoji">🛡️</span>
          <h3>Personalized Practice</h3>
          <p>Customize interview topics and difficulty to match your goals.</p>
        </div>
      </section>

      {/* Footer Call to Action */}
      <footer className="footer">
        <a href="/sign-up" className="cta-btn large">Start Practicing Now</a>
      </footer>
    </div>
  );
};

export default LandingPage;





