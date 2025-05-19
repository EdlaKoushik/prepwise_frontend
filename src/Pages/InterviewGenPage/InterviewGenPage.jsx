// import React from 'react'
// import Agent from '../../Components/Agent/Agent.jsx'


// const InterviewPage = () => {
//   return (
//     <>
//     <h1>Interview Generation</h1>
//       <Agent userName ="You" userId ="user1" type ="generate"/>
//     </>
    
//   )
// }

// export default InterviewPage


import React from 'react';
import Agent from '../../Components/Agent/Agent.jsx';
import './InterviewGenPage.css';

const InterviewGenPage = () => {
  return (
    <div className="interview-gen-bg">
      <div className="interview-gen-header">
        <span className="logo">PrepWise</span>
        <h2 className="interview-gen-title">Interview generation</h2>
      </div>
      <Agent userName="koushik" userId="user1" type="generate" />
      <div className="interview-gen-footer">
        {/* <div className="interview-gen-message">
          Let's prepare your interview, ask you a few questions, and generate a mock session!
        </div>
        <button className="btn-end">End</button> */}
      </div>
    </div>
  );
};

export default InterviewGenPage;