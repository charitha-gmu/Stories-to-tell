import { Close } from "assets/icons";
import { Logo } from "assets/images";
import CustomModal from "components/CustomModal/CustomModal";
import React from "react";

type TermsAndPrivacyProps = {
  toggle: () => void;
};

const TermsAndPrivacy = (props: TermsAndPrivacyProps) => {
  const { toggle } = props;

  return (
    <CustomModal>
      <div className="terms-privacy-content-container">
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
          <div className="content">
            <span className="header">Terms Of Use</span> <br />
            Welcome to Tales To Share. By accessing or using this Website, you
            agree to comply with and be bound by these Terms of Use. <br />
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
            <br /> We reserve the right to modify or discontinue the Website at
            any time without notice. <br />
            All content on this Website, including text, graphics, logos,
            images, and software, is the property of Tales To Share or its
            licensors and is protected by copyright and other intellectual
            property laws. <br />
            You may not reproduce, modify, distribute, or otherwise use any
            content from this Website without the prior written consent of Tales
            To Share.
          </div>

          <div className="content">
            <span className="header">Privacy</span> <br />
            Tales to Share respects your privacy and is committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and disclose your personal information when you use
            our Website. <br />
            We may collect personal information that you voluntarily provide to
            us, such as your name, email address, and other contact information.
            <br /> You may have certain rights regarding your personal
            information, such as the right to access, correct, or delete your
            information. Contact us at help@talestoshare.com to exercise these
            rights.
            <br />
            We implement reasonable security measures to protect your personal
            information; however, no method of transmission over the internet or
            electronic storage is completely secure. <br />
            We may update this Privacy Policy from time to time, and the latest
            version will be posted on our Website. .
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default TermsAndPrivacy;
