import React, { useState } from "react";
import { Facebook, Instagram, Twitter } from "assets/icons";
import { Logo, WeddingWebsite } from "assets/images";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import OurStory from "components/OurStory";
import FeatureComponent from "components/feature-component";
import Faqs from "components/Faqs";
import ContactUs from "components/ContactUs";
import TermsAndPrivacy from "components/TermsPrivacy";
import { getViewInvitationText } from "resources/utils";

const options = {
  learnMore: "Learn More",
  story: "Story",
  contactUs: "Contact Us",
  faqs: "Faqs",
  termsAndPrivacy: "Terms and Privacy",
};

const LandingPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<any>([options.learnMore]);

  const navigate = useNavigate();

  const isUserLoggedIn = localStorage.getItem("signedIn") === "true";

  const handleGetStarted = () => {
    if (isUserLoggedIn && getViewInvitationText() === "View Invitation") {
      navigate("/invitation");
    } else if (isUserLoggedIn) {
      navigate("/details-form");
    } else {
      navigate(`/login`, { state: { redirect: "/details-form" } });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  const toggle = () => {
    setSelectedTab([options.learnMore]);
    setSelectedOption("");
  };

  const render_modal_content = () => {
    switch (selectedOption) {
      case options.story:
        return <OurStory toggle={toggle} />;

      case options.faqs:
        return <Faqs toggle={toggle} />;

      case options.contactUs:
        return <ContactUs toggle={toggle} />;

      case options.termsAndPrivacy:
        return <TermsAndPrivacy toggle={toggle} />;
    }
  };

  return (
    <div className="landing-container">
      <div className="fixed-header">
        <Header
          selectedTab={selectedTab}
          setSelectedOption={setSelectedOption}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="landing-page">
        <div className="video-container">
          <video autoPlay muted loop>
            <source
              src="https://s3.amazonaws.com/saikiran645assignment1.com/background-video.mp4"
              type="video/mp4"
            />
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
              {getViewInvitationText()}
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
              <img
                className="logo cursor-pointer"
                src={Logo}
                alt="logo"
                onClick={handleScrollToTop}
              />
              <div className="logo-text">Tales to Share</div>
            </div>
            <div className="footer-content">
              <div className="names-list">
                {/* <div className="text" onClick={() => setOpenOurStory(true)}>
                  About Tales To Share
                </div> */}
                <div
                  className="text"
                  onClick={() => setSelectedOption(options.story)}
                >
                  Our Story
                </div>
                <div
                  className="text"
                  onClick={() => setSelectedOption(options.faqs)}
                >
                  FAQ's
                </div>
                <div
                  className="text"
                  onClick={() => setSelectedOption(options.contactUs)}
                >
                  Contact Us
                </div>
                <div
                  className="text"
                  onClick={() => setSelectedOption(options.termsAndPrivacy)}
                >
                  Terms & Privacy
                </div>
              </div>

              <div className="apps-list">
                <a
                  href="https://www.instagram.com/instagram/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-text-view">
                    <img className="app-icon" src={Instagram} alt="instagram" />
                    {/* <p>Instagram</p> */}
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/facebook/?brand_redir=103274306376166"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-text-view">
                    <img className="app-icon" src={Facebook} alt="facebook" />
                    {/* <p>Facebook</p> */}
                  </div>
                </a>

                <a
                  href="https://twitter.com/X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-text-view">
                    <img className="app-icon" src={Twitter} alt="twitter" />
                    {/* <p>Twitter</p> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="footer-text"> © 2023 Tales to Share, Inc.</div>
          </div>
        </div>
      </div>
      {render_modal_content()}
    </div>
  );
};

export default LandingPage;
