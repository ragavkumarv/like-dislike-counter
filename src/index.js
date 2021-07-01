import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* cutomise the component here */}
    <App />
  </StrictMode>,
  rootElement
);
