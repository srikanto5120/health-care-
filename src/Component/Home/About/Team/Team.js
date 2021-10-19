import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Team.css";

const Team = ({ team }) => {
  const { name, img, discription } = team;
  return (
    <div>
      <Col>
        <Card className="p-2 member ">
          <Card.Img className="members-img" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{discription}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Team;
