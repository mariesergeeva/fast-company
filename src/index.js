import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app/App";

const Application = () => {
    return <App />;
};

reactDom.render(<Application />, document.getElementById("root"));
