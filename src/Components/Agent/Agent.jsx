import React, { useState } from "react";
import aiAvatar from "../../assets/ai-avatar.png";
import userAvatar from "../../assets/user-avatar.png";
import "./Agent.css";

const CallStatus = {
  INACTIVE: "INACTIVE",
  CONNECTING: "CONNECTING",
  ACTIVE: "ACTIVE",
  FINISHED: "FINISHED",
};

const Agent = ({ userName }) => {
  const [callStatus, setCallStatus] = useState(CallStatus.INACTIVE);
  const isSpeaking = true;
  const messages = [
    "whats your name ?",
    "My name is John Doe , nice to meet you !"
  ];
  const lastMessage =messages[messages.length-1];

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <img
              src={aiAvatar}
              alt="AI Interviewer"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak"></span>}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <img
              src={userAvatar}
              alt="User Avatar"
              width={120}
              height={120}
              className="rounded-full object-cover mt-7.5"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length >0 && (
        <div className ="transcript-border">
          <div className="transcript">
            <p className="animate-fadeIn">
              {lastMessage}
            </p>
          </div>
        </div>
      )}
      <div className="call-btn-row">
        {callStatus !== "ACTIVE" ? (
          <button className="btn-call" onClick={() => setCallStatus(CallStatus.CONNECTING)}>
            {callStatus === "INACTIVE" || callStatus === "FINISHED" ? "Call" : ". . ."}
          </button>
        ) : (
          <button className="btn-end" onClick={() => setCallStatus(CallStatus.FINISHED)}>
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;