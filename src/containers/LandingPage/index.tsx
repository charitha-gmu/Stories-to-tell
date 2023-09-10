import React, { useState } from "react";
import { Facebook, Instagram, Twitter } from "assets/icons";
import { Logo, WeddingWebsite } from "assets/images";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import OurStory from "components/OurStory";
import FeatureComponent from "components/feature-component";
import Faqs from "components/Faqs";
import ContactUs from "components/ContactUs";

const LandingPage = () => {
  const [openOurStory, setOpenOurStory] = useState<boolean>(false);
  const [openContactUs, setOpenContactUs] = useState<boolean>(false);
  const [openFaqs, setOpenFaqs] = useState<boolean>(false);
  const navigate = useNavigate();

  const isUserLoggedIn = localStorage.getItem("signedIn") === "true";

  const handleGetStarted = () => {
    if (isUserLoggedIn) {
      navigate("/details-form");
    } else {
      navigate(`/login`, { state: { redirect: "/details-form" } });
    }
  };
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

            <div className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </div>
          </div>
        </div>

        <FeatureComponent
          image="https://withjoy.com/assets/public/marcom-prod/wedding-website/design-features/design-theme.png?opt=aggressive&ver=2"
          header="Your Specifications, Our Priority"
          text="We design to match your unique requirements, providing versatility you demand."
          direction="left"
        />

        <FeatureComponent
          image={WeddingWebsite}
          header="Meet your Match"
          text="We will match your paper suite, so everything feels like you from start to finish."
          direction="right"
        />

        <div className="footer">
          <div className="footer-content-container">
            <div className="footer-logo">
              <img className="logo cursor-pointer" src={Logo} alt="logo" />
              <div className="logo-text">Tales to Share</div>
            </div>
            <div className="footer-content">
              <div className="names-list">
                <div className="text" onClick={() => setOpenOurStory(true)}>
                  About Tales To Share
                </div>
                <div className="text" onClick={() => setOpenOurStory(true)}>
                  Our Story
                </div>
                <div className="text" onClick={() => setOpenFaqs(true)}>
                  FAQ's
                </div>
                <div className="text" onClick={() => setOpenContactUs(true)}>
                  Contact Us
                </div>
                <div className="text" onClick={() => setOpenOurStory(true)}>
                  Terms & Privacy
                </div>
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
      {openOurStory ? <OurStory toggle={() => setOpenOurStory(false)} /> : null}
      {openFaqs ? <Faqs toggle={() => setOpenFaqs(false)} /> : null}
      {openContactUs ? (
        <ContactUs toggle={() => setOpenContactUs(false)} />
      ) : null}
    </div>
  );
};

export default LandingPage;
