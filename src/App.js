import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Copyright from "./components/footer/copyright";
import Footer from "./components/footer/footer";
import Header from "./components/navbar/header";
import HomePage from "./pages/homepage";


function App() {
  return (
    <Router>
    <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer/>
      <Copyright/>
    </Router>
  );
}

export default App;
