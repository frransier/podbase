/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import getSlug from "speakingurl";
import { Box, Link } from "theme-ui";

const Episode = ({ episode, showPlayer }) => {
  return (
    <Box>
      <Link
        href={`/episodes/${getSlug(episode.title, {
          truncate: 200,
          symbols: true,
        })}/`}
      >
        <Styled.h3>{episode.title}</Styled.h3>
      </Link>
      <Styled.p>{episode.date}</Styled.p>
      {showPlayer && (
        <audio controls src={episode.url} sx={{ width: "100%" }}>
          no good
          <track />
        </audio>
      )}
    </Box>
  );
};

export default Episode;
