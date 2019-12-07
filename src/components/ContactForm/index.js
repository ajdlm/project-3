import React from "react";
import "./style.css";

const ContactForm = () => {
  return (
    <div className="contactContainer mx-5 pt-2 px-5 pb-3">
      <div className="mx-5 px-5">
        <h2 className="contactHeading text-center my-4 pb-1">CONNECT WITH US</h2>

        <form>
          <div className="form-group form-inline d-flex">
            <input
              type="text"
              className="form-control bg-white flex-grow-1"
              placeholder="Name"
            ></input>

            <input
              type="text"
              className="form-control bg-white flex-grow-1 ml-2"
              placeholder="Email"
            ></input>
          </div>

          <div className="form-group my-4">
            <input
              type="text"
              className="form-control bg-white"
              placeholder="Subject"
            ></input>
          </div>

          <div className="form-group mb-4">
            <textarea className="contactTextarea form-control bg-white" rows="10" placeholder="Your message"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
