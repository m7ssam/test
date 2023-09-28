import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Bodycontent from "../comp/bodycontent";
const Html = () => {
  return (
    <>
      <Header />
      <main>
        <h3>HTML</h3>
        <Bodycontent />
      </main>
      <Footer />
    </>
  );
};

export default Html;
