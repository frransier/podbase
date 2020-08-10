/** @jsx jsx */
import { jsx } from "theme-ui";
import { useGlobalState } from "../state/globalState";
import { Box, Heading } from "theme-ui";
import { useEffect, createRef } from "react";

const Player = () => {
  const [activeEpisode] = useGlobalState("activeEpisode");
  const audioPlayer = createRef();

  const resetPlayer = () => {
    audioPlayer.current.load();
  };

  useEffect(() => {
    resetPlayer();
  }, [activeEpisode.src]);

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        p: 3,
        backgroundColor: "highlight",
      }}
    >
      <Heading as="h3" sx={{ color: "white" }}>
        {activeEpisode.title}
      </Heading>
      <audio
        ref={audioPlayer}
        controls
        src={activeEpisode.src}
        sx={{ width: "100%" }}
      >
        no good
        <track />
      </audio>
    </Box>
  );
};

export default Player;
