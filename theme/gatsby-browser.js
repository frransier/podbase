import React from "react";
import { Provider } from "./src/state/";
require("typeface-poppins");
require("typeface-roboto-slab");
require("typeface-roboto");
require("typeface-rosario");
require("typeface-crimson-text");

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
