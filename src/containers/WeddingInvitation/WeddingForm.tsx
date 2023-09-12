import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Logo } from "assets/images";
import "containers/Auth/styles.scss"; // Import the SCSS file

const weddingSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  partnerFirstName: Yup.string().required("Partner's First Name is required"),
  weddingDate: Yup.date().required("Wedding Date is required"),
  location: Yup.string().required("Location is required"),
  ourStory: Yup.string().required("Our Story is required"),
  eventDetails: Yup.string().required("Event Details is required"),
});

const WeddingForm = () => {
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const [initialValues] = useState({
    firstName: "",
    partnerFirstName: "",
    weddingDate: "",
    noDate: false,
    location: "",
    ourStory: "",
    eventDetails: "",
  });

  const handleSubmit = (values: {
    firstName: string;
    partnerFirstName: string;
    weddingDate: string;
    noDate: boolean;
    location: string;
    ourStory: string;
    eventDetails: string;
  }) => {
    const existingUserData = JSON.parse(localStorage.getItem("user") || "{}");

    const updatedUserData = {
      ...existingUserData,
      firstName: values.firstName,
      partnerFirstName: values.partnerFirstName,
      weddingDate: values.weddingDate,
      noDate: values.noDate,
      location: values.location,
      ourStory: values.ourStory,
      eventDetails: values.eventDetails,
    };

    localStorage.setItem("user", JSON.stringify(updatedUserData));

    navigate("/invitation");
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
          <div className="logo-layout">
            <img className="logo cursor-pointer" src={Logo} alt="logo" />
            <div className="logo-text">Tales to Share</div>
          </div>
          <p className="bold-text">Start building your wedding website</p>
          <p>We'll need a few details first</p>
          <p className="bold-text">Wedding Details</p>
          <Formik
            initialValues={initialValues}
            validationSchema={weddingSchema}
            onSubmit={(values: {
              firstName: string;
              partnerFirstName: string;
              weddingDate: string;
              noDate: boolean;
              location: string;
              ourStory: string;
              eventDetails: string;
            }) => {
              handleSubmit(values);
            }}
          >
            {() => {
              return (
                <Form className="mt-4">
                  <div className="form-group">
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control mb-0"
                      placeholder="Your First Name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="partnerFirstName"
                      id="partnerFirstName"
                      className="form-control mb-0"
                      placeholder="Partner's First Name"
                    />
                    <ErrorMessage
                      name="partnerFirstName"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      as="textarea"
                      name="ourStory"
                      id="ourStory"
                      className="form-control mb-0"
                      placeholder="Tell us love story..."
                    />
                    <ErrorMessage
                      name="ourStory"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      as="textarea"
                      name="eventDetails"
                      id="eventDetails"
                      className="form-control mb-0"
                      placeholder="Share your event details..."
                    />
                    <ErrorMessage
                      name="eventDetails"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="date"
                      name="weddingDate"
                      id="weddingDate"
                      className="form-control mb-0"
                    />
                    <ErrorMessage
                      name="weddingDate"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  {/* <div className="form-check" style={{ marginBottom: "10px" }}>
                    <Field
                      type="checkbox"
                      name="noDate"
                      id="noDate"
                      className="form-check-input"
                    />
                    <label htmlFor="noDate" className="form-check-label">
                      We haven't picked a date
                    </label>
                  </div> */}
                  <div className="form-group">
                    <Field
                      type="text"
                      name="location"
                      id="location"
                      className="form-control mb-0"
                      placeholder="Location"
                    />
                    <ErrorMessage
                      name="location"
                      component="span"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      ref={submitBtnRef}
                    >
                      <span className="indicator-label">Submit</span>
                    </button>
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

export default WeddingForm;
