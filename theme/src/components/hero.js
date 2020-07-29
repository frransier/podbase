/** @jsx jsx */
import { jsx } from "theme-ui";
import Image from "./image";
import Episode from "./episode";
import Platforms from "./platforms";

const Hero = ({ episode, image }) => (
  <div sx={{ variant: "variants.hero" }}>
    <Image image={image} />
    <Episode episode={episode} />
    <Platforms />
  </div>
);

export default Hero;
