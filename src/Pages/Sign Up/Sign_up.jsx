import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./Sign_up.css";

const Sign_up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Prevent multiple clicks

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/sign-up",
        { name, email, password },
        { withCredentials: true }
      );

      alert("Signup successful!");
      navigate("/sign-in"); // Using React Router for smoother navigation
    } catch (error) {
      const msg = error.response?.data?.message || error.message;
      alert("Signup failed: " + msg);
    } finally {
      setLoading(false); // Restore button usability
    }
  };

  return (
    <div className="landing-page">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="input-field"
            />
          </div>

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
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="form-footer">
          Already have an account? <a href="/sign-in">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Sign_up;