import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* cutomise the component here */}
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
