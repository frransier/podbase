/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import About from "./about";
import Episode from "./episode";

const Display = ({ image, description, episode }) => (
  <div sx={{ variant: "variants.display" }}>
    <About image={image} description={description} />
    <Episode episode={episode} />
  </div>
);

export default Display;
