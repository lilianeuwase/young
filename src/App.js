import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Copyright from "./components/footer/copyright";
import Footer from "./components/footer/footer";
import Contact from "./components/homepage/contact";
import Interview from "./components/homepage/interview";
import Header from "./components/navbar/header";
import ScrollToTop from "./components/ScrollToTop";
import MeetTheTeam from "./components/whoweare/team/meetTheTeam";
import ActivityOfficer from "./components/workwithus/positions/activityOfficer";
import FinancialOfficer from "./components/workwithus/positions/financialOfficer";
import MonitorEv from "./components/workwithus/positions/monitorEv";
import GalleryPage from "./pages/galleryPage";
import HomePage from "./pages/homepage";
import OurPrograms from "./pages/ourPrograms";
import WhoWeAre from "./pages/whoWeAre";
import WorkWithUs from "./pages/workWithUs";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/ourprograms" element={<OurPrograms />} />
            <Route path="/meettheteam" element={<MeetTheTeam />} />
            <Route path="/workwithus" element={<WorkWithUs />} />
            <Route path="/workwithus/activityofficer" element={<ActivityOfficer />} />
            <Route path="/workwithus/monitoringandevaluationofficer" element={<MonitorEv />} />
            <Route path="/workwithus/financialofficer" element={<FinancialOfficer />} />
          </Routes>
        </div>
      </ScrollToTop>
      <div className="bg-white">
        <Contact />
      </div>
      <Interview />
      <Footer />
      <Copyright />
    </Router>
  );
}

export default App;
