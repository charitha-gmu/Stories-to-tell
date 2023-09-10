import { Close } from "assets/icons";
import { Logo } from "assets/images";
import CustomModal from "components/CustomModal/CustomModal";
import React from "react";

type FaqsProps = {
  toggle: () => void;
};

const Faqs = (props: FaqsProps) => {
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
            <span className="header-faqs">FAQS</span>
            <div className="questions">
              <span>1. Is the website free?</span>
              <br />
              Of course; you’ll never have to pay for your Tales to share
              website.
            </div>
            <div className="questions">
              <span>2. How can I contact customer support? </span> <br />
              You can reach our customer support team by mailing us at
              talesToShare@gmail.com.
            </div>
            <div className="questions">
              <span>
                3. How can I provide feedback or suggestions for improvement?
              </span>
              <br />
              We value your feedback! You can provide feedback or suggestions by
              talesToShare@gmail.com..
            </div>
            <div className="questions">
              <span>
                4. Where can I find your terms of use and privacy policy?
              </span>
              <br />
              You can find our Terms of Use and Privacy Policy by visiting the
              respective links in the footer of our website.
            </div>

            <div className="questions">
              <span>
                5. What should I do if I encounter technical issues or errors on
                the website?
              </span>
              <br />
              If you encounter technical issues or errors while using your
              customized website, please contact our support team at
              support@talestoshare. Describe the issue in detail, and we will
              assist you as soon as possible.
            </div>
            <div className="questions">
              <span>6. Is my data safe and secure on Tales to share?</span>
              <br />
              We take data security seriously. Our website employs
              industry-standard security measures to protect your data. For more
              information, please refer to our Privacy Policy.
            </div>
          </>
        </div>
      </div>
    </CustomModal>
  );
};

export default Faqs;
