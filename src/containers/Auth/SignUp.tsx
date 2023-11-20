import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Logo } from "assets/images";
import "./styles.scss"; // Import the SCSS file
import BackButton from "components/backButton";
import { toast } from "react-toastify";
import { capitalizeFirstLetter } from "resources/utils";

const SignUpSchema: any = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
});

const SignUp = () => {
  const signupBtnRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const [initialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Handle form submission here
    toast.success("Successfully Registered!");
    navigate("/login");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const CustomErrorMessage = ({ name }: any) => (
    <ErrorMessage name={name}>
      {(msg) => (
        <span className="error-message">* {capitalizeFirstLetter(msg)}</span>
      )}
    </ErrorMessage>
  );

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
            <img
              className="logo cursor-pointer"
              src={Logo}
              alt="logo"
              onClick={handleBackClick}
            />
            <div className="logo-text">Tales to Share</div>
          </div>
          <p className="bold-text">Sign up</p>
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={(values: {
              firstName: string;
              lastName: string;
              email: string;
              password: string;
              confirmPassword: string;
            }) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }: any) => {
              const isButtonDisabled: any = Object.keys(errors).some(
                (errorKey): any => touched[errorKey]
              );
              return (
                <Form>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control mb-0"
                      placeholder="First Name"
                    />
                    <CustomErrorMessage name="firstName" />
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control mb-0"
                      placeholder="Last Name"
                    />
                    <CustomErrorMessage name="lastName" />
                  </div>
                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <CustomErrorMessage name="email" />
                  </div>
                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className="form-control mb-0"
                      placeholder="Password"
                    />

                    <CustomErrorMessage name="password" />
                  </div>
                  <div className="form-group">
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="form-control mb-0"
                      placeholder="Confirm Password"
                    />

                    <CustomErrorMessage name="confirmPassword" />
                  </div>
                  <div className="sign-info">
                    <button
                      type="submit"
                      ref={signupBtnRef}
                      className={`btn btn-primary ${
                        isButtonDisabled ? "disabled" : ""
                      }`}
                      disabled={isButtonDisabled}
                    >
                      <span className="indicator-label">Sign Up</span>
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
          <div style={{ padding: "10px" }}>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="f-link">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
