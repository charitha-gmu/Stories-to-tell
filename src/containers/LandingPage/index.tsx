import React from "react";
import { Facebook, Instagram, Twitter } from "assets/icons";
import { Logo } from "assets/images";
import Header from "components/Header";
import OurStory from "components/OurStory";
import FeatureComponent from "components/feature-component";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="fixed-header">
        <Header />
      </div>
      <div className="landing-page">
        <div className="video-container">
          <video autoPlay muted loop>
            <source src="/background-video.mp4" type="video/mp4" />
            {/* Add more source elements for different video formats (e.g., webm, ogg) */}
          </video>
        </div>

        <div className="overlay-container">
          <div className="center-text-overlay">
            <div className="header-text">Plan your forever, better.</div>

            <div className="tagline-text">
              Design a personalized website, create an <br /> all-in-one
              registry, and experience wedding <br /> planning the way it should
              be.
            </div>

            <div className="get-started-btn">Get Started</div>
          </div>
        </div>
        {/* <FeatureComponent
          image="https://withjoy.com/assets/public/marcom-prod/wedding-website/design-features/design-theme.png?opt=aggressive&ver=2"
          header="Your Header"
          text="Your Text"
          direction="left"
        /> */}
        <div className="footer">
          <div className="footer-content-container">
            <div className="footer-logo">
              <img
                className="logo cursor-pointer"
                src={Logo}
                alt="logo"
                // onClick={() => {
                //   navigate("/");
                // }}
              />
              <div className="logo-text">Tales to Share</div>
            </div>
            <div className="footer-content">
              <div className="names-list">
                <div className="text">About Tales To Share</div>
                <div className="text">Our Story</div>
                <div className="text">FAQ's</div>
                <div className="text">Contact Us</div>
                <div className="text">Terms & Privacy</div>
              </div>

              <div className="apps-list">
                <a
                  href="https://www.instagram.com/instagram/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="app-icon" src={Instagram} alt="instagram" />
                </a>

                <a
                  href="https://www.facebook.com/facebook/?brand_redir=103274306376166"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="app-icon" src={Facebook} alt="facebook" />
                </a>

                <a
                  href="https://twitter.com/X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="app-icon" src={Twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="footer-text"> © 2023 Tales to Share, Inc.</div>
          </div>
        </div>
      </div>
      {/* <OurStory /> */}
    </div>
  );
};

export default LandingPage;
