/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Player from "./player";

const Episode = ({ episode }) => (
  <div sx={{ variant: "variants.episode" }}>
    <Styled.p sx={{ textTransform: "uppercase" }}>{episode.isoDate}</Styled.p>
    <Styled.h3>{episode.title}</Styled.h3>
    <Styled.p dangerouslySetInnerHTML={{ __html: episode.itunes.subtitle }} />
    <Player src={episode.enclosure.url} />
  </div>
);

export default Episode;
