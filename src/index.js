import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* cutomise the component here */}
    <App company="Apple" color="white" />
    <App company="Samsung" color="skyblue" />
    <App company="MI" color="orange" />
    <App company="Oneplus" color="red" />
    <App company="Moto" color="grey" />
  </StrictMode>,
  rootElement
);
