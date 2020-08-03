/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Episode = ({ episode }) => (
  <div sx={{ variant: "variants.episode" }}>
    <div sx={{ display: ["auto", "flex"], alignItems: "center" }}>
      <Styled.h3>{episode.title}</Styled.h3>
      <div sx={{ mx: "auto" }} />
      <Styled.p sx={{ textTransform: "uppercase", fontSize: 1 }}>
        {episode.isoDate}
      </Styled.p>
    </div>
    <Styled.p dangerouslySetInnerHTML={{ __html: episode.itunes.subtitle }} />
  </div>
);

export default Episode;
