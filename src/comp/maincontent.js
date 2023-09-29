import React from "react";
import Bodycontent from "../comp/bodycontent";
import "./css/main.css";

const Maincontent = ({ pageName, designer }) => {
  return (
    <main>
      <h3>{pageName} Page</h3>
      {designer != null && <h4>designed by {designer}</h4>}
      <hr />
      <Bodycontent />
    </main>
  );
};

export default Maincontent;
