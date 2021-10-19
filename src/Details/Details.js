import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [singleService, setSingleService] = useState([]);

  useEffect(() => {
    fetch("/singleServiceDetails.json")
      .then((res) => res.json())
      .then((data) => setSingleService(data.serviceDetails));
  }, []);
  useEffect(() => {
    singleService.find((service) => console.log(service.service.id));
  }, [singleService]);

  return (
    <div>
      <h1>this is a details {id}</h1>
    </div>
  );
};

export default Details;
