import React from "react";
import { Link } from "react-router-dom";

const Bodycontent = () => {
  return (
    <div>
      <h5>
        <Link to="/">Home</Link>
      </h5>
      <h5>
        <Link to="/html">HTML</Link>
      </h5>
      <h5>
        <Link to="/css">CSS</Link>
      </h5>
      <h5>
        <Link to="/javaScript">JavaScript</Link>
      </h5>
    </div>
  );
};

export default Bodycontent;
