import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, discription, id } = service;
  return (
    <div className="service">
      <Col>
        <Card className="p-2  ">
          <Card.Img variant="top" className="service-img" src={img} />

          <Card.Title>{name}</Card.Title>
          <Card.Text>{discription}</Card.Text>
          <Link to={`/service/${id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
