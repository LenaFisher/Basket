import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

// кладем reactDom.render(что, куда)
reactDom.render(<App />, document.getElementById("root"));
