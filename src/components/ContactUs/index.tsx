import { Close } from "assets/icons";
import { Logo } from "assets/images";
import CustomModal from "components/CustomModal/CustomModal";
import React from "react";

type ContactUsProps = {
  toggle: () => void;
};

const ContactUs = (props: ContactUsProps) => {
  const { toggle } = props;
  return (
    <CustomModal>
      <div className="faq-content-container">
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
            <span className="header-faqs">Contact Us</span>
            <div className="questions">
              <span>General Inquires</span>
              <br />
              Telephone: 877-331-7752
              <br />
              Email: help@talestoshare.com
            </div>
            <div className="questions">
              <span>Support team </span> <br />
              Email: support@talestoshare.com
            </div>
            <div className="questions">
              <span>Careers</span>
              <br />
              Email: careers@talestoshare.com
            </div>
          </>
        </div>
      </div>
    </CustomModal>
  );
};

export default ContactUs;
