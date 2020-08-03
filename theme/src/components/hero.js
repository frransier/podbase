/** @jsx jsx */
import { jsx } from "theme-ui";
import Image from "./image";
import Episode from "./episode";
import Player from "./player";

const Hero = ({ episode, image }) => (
  <div>
    <div sx={{ variant: "variants.hero" }}>
      <Image image={image} />
      <Episode episode={episode} />
    </div>
    <Player src={episode.enclosure.url} />
  </div>
);

export default Hero;
