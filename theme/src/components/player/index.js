/** @jsx jsx */
import { jsx } from "theme-ui";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import Play from "./play";
import Pause from "./pause";
import Volume from "./volume";
import Mute from "./mute";

const Player = ({ src }) => (
  <div sx={{ variant: "variants.player" }}>
    <AudioPlayer
      sx={{
        ".rhap_container": {
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          lineHeight: 1,
          width: "100%",
          padding: "10px 15px",
        },
        ".rhap_progress-section": {
          display: "flex",
          flex: "3 1 auto",
          alignItems: "center",
        },

        ".rhap_progress-container": {
          display: "flex",
          alignItems: "center",
          height: "20px",
          width: "70%",
          alignSelf: "center",
          margin: "0 calc(10px + 1%)",
          cursor: "pointer",
          userSelect: "none",
          outline: "none",
        },
        ".rhap_time": {
          color: "black",
          fontSize: "16px",
          userSelect: "none",
        },
        ".rhap_progress-bar": {
          boxSizing: "border-box",
          position: "relative",
          zIndex: 0,
          width: "100%",
          height: "8px",
          bg: "muted",
          borderRadius: "2px",
        },
        ".rhap_progress-filled": {
          height: "100%",
          position: "absolute",
          zIndex: 2,
          bg: "primary",
          borderRadius: "2px",
        },
        ".rhap_main": {
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
        },
        ".rhap_progress-indicator": {
          boxSizing: "border-box",
          position: "absolute",
          zIndex: 3,
          width: "25px",
          height: "25px",
          ml: "-10px",
          top: "-9px",
          bg: "text",
          borderRadius: "50px",
        },
        ".rhap_controls-section": {
          display: "grid",
          flex: "1 1 auto",
          justifyContent: "space-around",
          alignItems: "center",
        },
        ".rhap_volume-controls": {
          display: "flex",
          flex: "1 0 auto",
          justifyContent: "flex-end",
          alignItems: "center",
        },
        ".rhap_play-pause-button": {
          appearance: "none",
          border: "none",
          outline: "none",
          bg: "background",
          fontSize: 5,
          color: "text",
        },
        ".rhap_volume-button": {
          // flex: "0 0 26px",
          appearance: "none",
          border: "none",
          outline: "none",
          display: "grid",
          alignItems: "center",
          bg: "background",
          fontSize: 4,
          mr: "8px",
          color: "text",
        },
        ".rhap_volume-container": {
          display: "flex",
          alignItems: "center",
          flex: "0 1 100px",
          userSelect: "none",
          outline: "none",
        },
        ".rhap_volume-bar-area": {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "14px",
          cursor: "pointer",
          outline: "none",
        },
        ".rhap_volume-bar": {
          boxSizing: "border-box",
          position: "relative",
          width: "100%",
          height: "8px",
          bg: "muted",
          borderRadius: "2px",
        },
        ".rhap_volume-indicator": {
          boxSizing: "border-box",
          position: "absolute",
          width: "15px",
          height: "15px",
          ml: "-10px",
          top: "-4px",
          bg: "text",
          borderRadius: "50px",
          opacity: 0.9,
          cursor: "pointer",
        },
      }}
      showJumpControls={false}
      customAdditionalControls={[]}
      customProgressBarSection={[RHAP_UI.PROGRESS_BAR, RHAP_UI.VOLUME]}
      customVolumeControls={[]}
      autoPlay={false}
      src={src}
      customIcons={{
        play: <Play />,
        pause: <Pause />,
        volume: <Volume />,
        volumeMute: <Mute />,
      }}
    />
  </div>
);

export default Player;
