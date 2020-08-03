import React from "react";
import { Provider } from "./src/state/";
// require("typeface-poppins");

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
