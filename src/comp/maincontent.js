import React from "react";
import Bodycontent from "../comp/bodycontent";
import "./css/main.css";
import styles from "./css/color.css";

const Maincontent = ({ pageName, designer }) => {
  return (
    <main>
      <h3 className={styles.mainColor}>{pageName} Page</h3>
      {designer != null && <h4>designed by {designer}</h4>}
      <hr />
      <Bodycontent />
    </main>
  );
};

export default Maincontent;
