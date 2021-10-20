import { useEffect } from "react";
import { useState } from "react";

const LoadData = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return services;
};

export default LoadData;
