/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import Play from "./play";
import Pause from "./pause";
import Volume from "./volume";
import Mute from "./mute";
// import "react-h5-audio-player/lib/styles.css";

const Player = ({ src }) => (
  <AudioPlayer
    sx={{
      ".rhap_container": {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        lineHeight: 1,
        width: "100%",
        padding: "10px 15px",
        bg: "blue",
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
        flex: "1 0 auto",
        alignSelf: "center",
        margin: "0 calc(10px + 1%)",
        cursor: "pointer",
        userSelect: "none",
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
        height: "5px",
        bg: "blue",
        borderRadius: "2px",
      },
      ".rhap_progress-filled": {
        height: "100%",
        position: "absolute",
        zIndex: 2,
        bg: "red",
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
        width: "20px",
        height: "20px",
        ml: "-10px",
        top: "-8px",
        bg: "gray",
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
        bg: "tomato",
      },
      ".rhap_volume-button": {
        // flex: "0 0 26px",
        appearance: "none",
        border: "none",
        outline: "none",
        display: "grid",
        alignItems: "center",
        bg: "tomato",
        mr: "8px",
      },
      ".rhap_volume-container": {
        display: "flex",
        alignItems: "center",
        flex: "0 1 100px",
        userSelect: "none",
      },
      ".rhap_volume-bar-area": {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "14px",
        cursor: "pointer",
      },
      ".rhap_volume-bar": {
        boxSizing: "border-box",
        position: "relative",
        width: "100%",
        height: "4px",
        bg: "red",
        borderRadius: "2px",
      },
      ".rhap_volume-indicator": {
        boxSizing: "border-box",
        position: "absolute",
        width: "12px",
        height: "12px",
        ml: "-6px",
        left: 0,
        top: "-4px",
        bg: "blue",
        opacity: 0.9,
        borderRadius: "50px",
        cursor: "pointer",
      },
    }}
    showJumpControls={false}
    customAdditionalControls={[]}
    customProgressBarSection={[RHAP_UI.PROGRESS_BAR, RHAP_UI.VOLUME]}
    customVolumeControls={[]}
    autoPlay
    src={src}
    customIcons={{
      play: <Play />,
      pause: <Pause />,
      volume: <Volume />,
      volumeMute: <Mute />,
    }}
  />
);

export default Player;
