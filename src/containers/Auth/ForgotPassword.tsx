import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Logo } from "assets/images";
import "./styles.scss"; // Import the SCSS file
import BackButton from "components/backButton";
import { toast } from "react-toastify";

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});

const ForgotPassword = () => {
  const [initialValues] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <section className="sign-in-page">
      <div className="background-container">
        <img
          className="background-image"
          src={
            "https://withjoy.com/blog/wp-content/uploads/2023/07/Engagement-Photos-Cost-4-1170x780.jpg"
          }
          alt="background"
        />
      </div>
      <div className="sign-in-container">
        <div className="sign-user_card">
          <BackButton onBackClick={handleBackClick} text={"Back to Home"} />

          <div className="logo-layout">
            <img className="logo cursor-pointer" src={Logo} alt="logo" />
            <div className="logo-text">Tales to Share</div>
          </div>
          <p className="bold-text">Reset Password</p>
          <p className="text-grey">
            Enter your email address and we will send you an email with
            instructions to reset your password.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={forgotPasswordSchema}
            onSubmit={(values: { email: string }, { resetForm }: any) => {
              toast.success("Email Sent!");
              navigate("/login");
            }}
          >
            {({ errors, touched, isValid }: any) => {
              const isButtonDisabled: any = Object.keys(errors).some(
                (errorKey): any => touched[errorKey]
              );
              return (
                <Form className="mt-4">
                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="form-control  mb-0"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="sign-info">
                    <button
                      type="submit"
                      className={`btn btn-primary ${
                        isButtonDisabled ? "disabled" : ""
                      }`}
                      disabled={isButtonDisabled}
                    >
                      Reset Password
                    </button>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <Link to="/login" className="f-link">
                      Back to login
                    </Link>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
