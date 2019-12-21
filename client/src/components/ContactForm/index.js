import React from "react";
import "./style.css";

const ContactForm = props => {
  return (
    <div className="contactContainer pt-2 px-5 pb-3 mb-0">
      <div className="mx-5 px-5">
        <h2 className="contactHeading text-center my-4 pb-1">
          CONNECT WITH ME
        </h2>

        <form
          id="contactForm"
        >
          <div className="d-flex">
            <div className="form-group flex-grow-1">
              <input
                id="name"
                type="text"
                className="form-control bg-white w-100"
                placeholder="Name"
              ></input>
            </div>

            <div className="form-group flex-grow-1 ml-4">
              <input
                id="email"
                type="text"
                className="form-control bg-white w-100"
                placeholder="Email"
              ></input>
            </div>
          </div>

          <div className="form-group my-4">
            <input
              id="subject"
              type="text"
              className="form-control bg-white"
              placeholder="Subject"
            ></input>
          </div>

          <div className="form-group mb-4">
            <textarea
              id="message"
              className="contactTextarea form-control bg-white"
              rows="10"
              placeholder="Your message"
            ></textarea>
          </div>

          <button type="submit" className="btn my-2 px-4" onClick={event => props.submitForm(event)}>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
