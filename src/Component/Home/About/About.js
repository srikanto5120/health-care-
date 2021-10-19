import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Team from "./Team/Team";
import "./About.css";

const About = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("about.json").then((res) =>
      res.json().then((data) => setDoctors(data))
    );
  }, []);
  return (
    <div className="container py-5 ">
      <h1 className="text-center heading">Management Team</h1>

      <Row xs={1} md={3} className="g-5 ">
        {doctors.map((team) => (
          <Team key={team.id} team={team}></Team>
        ))}
      </Row>
    </div>
  );
};

export default About;
