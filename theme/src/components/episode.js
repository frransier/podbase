/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Episode = ({ episode }) => (
  <div sx={{ variant: "variants.episode" }}>
    <Styled.h3>Senaste Avsnittet</Styled.h3>
    <Styled.h3>{episode.title}</Styled.h3>
    <Styled.p dangerouslySetInnerHTML={{ __html: episode.itunes.subtitle }} />
    <audio src={episode.enclosure.url} controls />
  </div>
);

export default Episode;
