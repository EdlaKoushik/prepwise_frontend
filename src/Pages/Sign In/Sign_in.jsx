import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sign_in.css";

const Sign_in = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Prevent duplicate submissions

    try {
      const res = await axios.post(
        "https://prepwise-backend.vercel.app/api/auth/sign-in",
        { email, password },
        { withCredentials: true }
      );

      localStorage.setItem("userId", res.data.userId); // Store user ID if needed
      alert("Login successful!");
      navigate("/dashboard"); // More SPA-friendly redirection
    } catch (error) {
      const msg = error.response?.data?.message || error.message;
      alert(`Login failed: ${msg}`);
    } finally {
      setLoading(false); // Restore button usability
    }
  };

  return (
    <div className="landing-page">
      <div className="form-container">
        <h2 className="form-title">Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="input-field"
            />
          </div>

          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="form-footer">
          No account yet? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Sign_in;
