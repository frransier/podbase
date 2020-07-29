/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { FaVolumeOff } from "react-icons/fa";

const Mute = () => (
  <div sx={{ display: "flex", alignItems: "center", p: 2 }}>
    <FaVolumeOff />
  </div>
);

export default Mute;
