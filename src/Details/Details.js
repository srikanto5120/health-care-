/* eslint-disable eqeqeq */

import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Details.css";

const Details = () => {
  const { id } = useParams();

  const { services } = useAuth();

  const selectedService = services.find((service) => service.id == id);
  const { name, img, discription } = selectedService;
  return (
    <div>
      <h2 className="heading text-center">Our{name}</h2>
      <hr className="w-25 hr mx-auto" />
      <Card className="mx-auto p-2 service-details" style={{ width: "28rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name} </Card.Title>
          <Card.Text>
            <p>{discription}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
