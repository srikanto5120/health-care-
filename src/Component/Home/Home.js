import React from "react";

import Doctors from "../Doctors/Doctors";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";

import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>

      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
