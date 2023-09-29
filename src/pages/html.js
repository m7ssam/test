import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
const Html = () => {
  return (
    <>
      <Header />
      <Maincontent pageName="HTML" designer="Hossam" />
      <Footer />
    </>
  );
};

export default Html;
