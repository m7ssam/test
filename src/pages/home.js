import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Bodycontent from "../comp/bodycontent";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h3>Home</h3>
        <hr />
        <Bodycontent />
      </main>
      <Footer />
    </>
  );
};

export default Home;
