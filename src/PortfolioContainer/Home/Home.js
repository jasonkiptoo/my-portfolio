import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./Home.css";
import Profile from "./Profile/Profile";

function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Navbar />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
