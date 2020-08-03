/** @jsx jsx */
import { jsx } from "theme-ui";
import Image from "./image";
import Episode from "./episode";
import Platforms from "./platforms";
import Player from "./player";

const Hero = ({ episode, image }) => (
  <div sx={{ variant: "variants.hero" }}>
    <Image image={image} />
    <Episode episode={episode} />
    <Platforms />
    <Player src={episode.enclosure.url} />
  </div>
);

export default Hero;
