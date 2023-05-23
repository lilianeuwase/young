import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Copyright from "./components/footer/copyright";
import Footer from "./components/footer/footer";
import Header from "./components/navbar/header";
import GalleryPage from "./pages/galleryPage";
import HomePage from "./pages/homepage";
import OurPrograms from "./pages/ourPrograms";
import WhoWeAre from "./pages/whoWeAre";

function App() {
  return (
    <Router>
    <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/ourprograms" element={<OurPrograms />} />
        </Routes>
      </div>
      <Footer/>
      <Copyright/>
    </Router>
  );
}

export default App;
