/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import About from "./about";
import Episode from "./episode";

const Display = ({ image, description, episode }) => (
  <div sx={{ variant: "variants.display" }}>
    <Episode image={image} episode={episode} />
  </div>
);

export default Display;
