import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="py-5">
      <Row>
        <Col md={5} className="contact-information   rounded shadow-lg me-4">
          <h4>
            Hello there <br /> got a your treatment information
          </h4>
          <div className=" pt-3">
            <div className="d-flex  align-items-center">
              <div>
                <i className="fas contact-icon fa-home"></i>
              </div>
              <div>
                <h6> Head Office :</h6>
                <p>3561 New Town Dhaka</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div>
                <i className="fas contact-icon fa-envelope-open-text"></i>
              </div>
              <div>
                <h6>Email Address:</h6>
                <p>example@email .com</p>
                <p>exmtwo@email .com</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <i className="fas contact-icon fa-phone"></i>
              </div>
              <div>
                <h6>Contact Us:</h6>
                <p>+2541578</p>
                <p>+8801737813575</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={5} className="shadow-lg">
          <h3>Send Us Message</h3>
          <div>
            <input className="contact-input " placeholder="Name" type="text" />
            <br />
            <input className="contact-input" placeholder="Eamil" type="text" />
          </div>

          <div>
            <input className="contact-input " placeholder="Phone" type="text" />
            <br />
            <input
              className="contact-input"
              placeholder="Website"
              type="text"
            />
          </div>
          <br />
          <textarea
            className="contact-area "
            name=""
            id=""
            cols="51"
            rows="40"
          ></textarea>
          <br />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit Now
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
