import { Close } from "assets/icons";
import { Logo } from "assets/images";
import CustomModal from "components/CustomModal/CustomModal";
import React from "react";

type OurStoryProps = {
  toggle: () => void;
};

const OurStory = (props: OurStoryProps) => {
  const { toggle } = props;

  return (
    <CustomModal>
      <div className="our-story-content-container">
        <div className="header-container">
          <div className="logo-layout">
            <img className="logo cursor-pointer" src={Logo} alt="logo" />
            <div className="logo-text">Tales to Share</div>
          </div>
          <img
            src={Close}
            alt="close"
            style={{ fill: "green" }}
            onClick={toggle}
          ></img>
        </div>
        <div className="content-container">
          <>
            <span className="header-our-story">Our Story</span>
            Hey there! We're the creative minds behind Tales to Share, and we're
            thrilled to share our journey with you. It all began during a
            late-night study session for our SWE 632 course. We realized that
            our project should not only showcase our UI design skills but also
            be something truly special. That's when the idea for Tales to Share,
            a wedding website platform, was born. Our vision was clear from the
            start: we wanted to make wedding websites more intuitive,
            thoughtful, and personal. We believed that every couple deserved a
            unique online space to tell their love story and plan their dream
            wedding. With passion in our hearts and design in our DNA, we set
            out to create a platform that's as beautiful and memorable as the
            love stories it showcases. We poured our creativity into crafting a
            plethora of stunning UI elements, making sure that every pixel
            reflects the love and joy that weddings are all about. But our
            journey doesn't end here. We're committed to constantly evolving and
            building new features to make your wedding planning experience
            smarter and more enjoyable. We're here to support you every step of
            the way, from creating the perfect invitation to organizing your
            guest list, and everything in between. So, welcome to Tales to Share
            – your canvas for weaving your love story and planning the most
            extraordinary day of your life. We can't wait to be a part of your
            journey and help you create memories that will last a lifetime.
            Cheers to love and adventure! 🥂💍❤️
            {/* <span>Sree Charitha</span>
            <span>Sai Kiran</span>
            <span>Sreeram</span> */}
          </>
        </div>
      </div>
    </CustomModal>
  );
};

export default OurStory;
