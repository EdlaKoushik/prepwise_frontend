import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import Sign_in from './Pages/Sign In/Sign_in.jsx';
import Sign_up from './Pages/Sign Up/Sign_up.jsx';
import DashboardPage from './Pages/DashboardPage/DashboardPage.jsx';
import InterviewGenPage from './Pages/InterviewGenPage/InterviewGenPage.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<Sign_in />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage/>
          </ProtectedRoute>
        } />
        <Route path ="/interviewGenPage" element={
          <ProtectedRoute>
            <InterviewGenPage/>
          </ProtectedRoute>
        }/>
      </Routes>
    </Router>
  )
}

export default App