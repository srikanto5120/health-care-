import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../../images/book.jpg";

const Apoinment = () => {
  return (
    <div>
      <Row>
        <Col className="bg-success">
          <h1 className="text-white text-center mt-5">Book Your Appointment</h1>
          <hr />

          <form action="" className="w-75 mx-auto   mt-5">
            <input type="text" className="form-control" placeholder="Name" />
            <br />
            <input type="Email" className="form-control" placeholder="Email" />
            <br />

            <input
              type="text"
              className="form-control"
              placeholder="Contact Number"
            />
            <br />
            <input
              type="date"
              className="form-control"
              name="Select Date"
              id=""
            />
            <h2>fkdsjfkdjf</h2>
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Service Price"
            />
            <br />

            <button className="btn btn-secondary w-100">Submit</button>
          </form>
        </Col>
        <Col>
          <img src={img} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Apoinment;
