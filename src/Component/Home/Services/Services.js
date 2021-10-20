import React from "react";

import { Row } from "react-bootstrap";
import LoadData from "../../../Hooks/LoadData";
import Service from "./Service/Service";

const Services = () => {
  const services = LoadData();
  return (
    <div className="container">
      <h2 className="heading text-center py-5">Our Services</h2>
      <Row xs={1} md={3} className="g-4 ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
