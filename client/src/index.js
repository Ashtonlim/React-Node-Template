import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./scss/main.scss";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
