import * as React from "react";
// import { render, createRoot } from "react-dom";
import { render } from "react-dom";

import { App } from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
