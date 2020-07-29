/** @jsx jsx */
import { jsx } from "theme-ui";
import { FaVolumeUp } from "react-icons/fa";

const Volume = () => (
  <div sx={{ display: "flex", alignItems: "center", p: 2 }}>
    <FaVolumeUp />
  </div>
);

export default Volume;
