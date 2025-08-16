import React from "react";
import { Header } from "../components/Header";
import { TopDoctors } from "../components/TopDoctors.jsx";
import { Speciality } from "../components/Speciality.jsx";
import { Banner } from "../components/Banner.jsx";
const Home = () => {
  return (
    <div>
      <Header />
      <Speciality />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
