import Header from "components/Header";
import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="/background-video.mp4" type="video/mp4" />
          {/* Add more source elements for different video formats (e.g., webm, ogg) */}
        </video>
      </div>
      <div className="text-overlay">
        <Header />
      </div>

      <div className="overlay-container">
        <div className="center-text-overlay">
          <div className="header-text">Plan your forever, better.</div>

          <div className="tagline-text">
            Design a personalized website, create an <br /> all-in-one registry,
            and experience wedding <br /> planning the way it should be.
          </div>

          <div className="get-started-btn">Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
