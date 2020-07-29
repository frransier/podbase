/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Player from "./player.js";

const Episode = ({ episode, image }) => (
  <div sx={{ variant: "variants.episode" }}>
    <div sx={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
      <img sx={{ width: "100%" }} src={image} alt={episode.title} />
      <div>
        <Styled.h3>Senaste Avsnittet</Styled.h3>
        <Styled.h3>{episode.title}</Styled.h3>
        <Styled.p
          dangerouslySetInnerHTML={{ __html: episode.itunes.subtitle }}
        />
        <Player src={episode.enclosure.url} />
      </div>
    </div>
  </div>
);

export default Episode;
