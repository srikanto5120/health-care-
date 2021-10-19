import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../images/Testimonial1.png";
import img2 from "../../images/Testimonial2.png";
import img3 from "../../images/Testimonial3.png";

const Doctors = () => {
  return (
    <div className="container py-5">
      <h1 className="heading text-center py-5">Our Doctors</h1>
      <Row>
        <Col>
          <Card className="p-3">
            <p>
              Dr. Jenis of DiagnoLab is one of the best Endocrinologist. He has
              been a successful Endocrinologist for the last 20 years and now
              working as a Hospital Head. He has been reviewed by 23 patients.
            </p>
            <div className="d-flex align-items-center justify-content-evenly">
              <img src={img1} alt="" />
              <div>
                <h5>Dr. Jenis Joseph</h5>

                <small>Hospital Head</small>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <p>
              Dr. Ethan is a renowned doctor and working as Neurologist in the
              diagnostic lab. He has 15+ years of experience in Neurologist. Dr.
              Ethan's educational qualification comprises an MBBS degree.
            </p>
            <div className="d-flex align-items-centerjustify-content-evenly">
              <img src={img2} alt="" />
              <div>
                <h5>Dr. Ethan Woka</h5>

                <small> Senior Doctor</small>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <p>
              Dr. Sarah believes in working collaboratively with patients, their
              families, and their fellow health care professionals to provide
              the most innovative and tailored healthcare. She is the best for
              general diagnosis
            </p>
            <div className="d-flex align-items-center  justify-content-evenly">
              <img src={img3} alt="" />
              <div>
                <h5>Dr. Sarah Peter </h5>

                <small>Junior Doctor</small>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <div class="input-group py-5  mx-auto  w-50 mb-3">
        <input
          type="text"
          className="form-control py-3"
          placeholder="Book Your Appointment"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <Link to="/book">
          <button
            className="btn btn-primary py-3  "
            type="button"
            id="button-addon2"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Doctors;
