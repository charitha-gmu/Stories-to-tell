import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Logo } from "assets/images";
import BackButton from "components/backButton";
import "./styles.scss"; // Import the SCSS file
import { toast } from "react-toastify";
import { capitalizeFirstLetter } from "resources/utils";

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
});

const SignIn = () => {
  const loginBtnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [initialValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    localStorage.removeItem("users");

    const newUser: any = { email: values.email };

    localStorage.setItem("user", JSON.stringify(newUser));

    localStorage.setItem("signedIn", "true");

    toast.success("Login Successful!");
    navigate(location.state?.redirect || "/");
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
          <BackButton onBackClick={handleBackClick} />
          <div className="logo-layout">
            <img
              className="logo cursor-pointer"
              src={Logo}
              alt="logo"
              onClick={handleBackClick}
            />
            <div className="logo-text">Tales to Share</div>
          </div>
          <p className="bold-text">Sign in</p>
          <p>
            Don't have an account ?{" "}
            <Link to="/signup" className="f-link">
              Signup?
            </Link>
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values: { email: string; password: string }) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }: any) => {
              const isButtonDisabled: any = Object.keys(errors).some(
                (errorKey): any => touched[errorKey]
              );
              return (
                <Form className="mt-4">
                  <div className="form-group" style={{ textAlign: "center" }}>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="form-control mb-0"
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
                  <div className="sign-info">
                    <button
                      type="submit"
                      ref={loginBtnRef}
                      className={`btn btn-primary ${
                        isButtonDisabled ? "disabled" : ""
                      }`}
                      disabled={isButtonDisabled}
                    >
                      <span className="indicator-label">Sign In</span>
                    </button>
                    {/* <div className="custom-control custom-checkbox d-inline-block">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck"
                      >
                        Remember Me
                      </label>
                    </div> */}
                  </div>
                </Form>
              );
            }}
          </Formik>
          <div className="mt-3">
            <div
              className="d-flex justify-content-center links"
              style={{ padding: "5px" }}
            >
              <Link to="/forgot-password" className="f-link">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
