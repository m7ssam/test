import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";

const Home = () => {
  return (
    <>
      <Header />
      <Maincontent pageName="Home" designer="Hossam" />
      <Footer />
    </>
  );
};

export default Home;
