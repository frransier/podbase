/** @jsx jsx */
import { jsx } from "theme-ui";
import { FaPause } from "react-icons/fa";

const Pause = () => (
  <div sx={{ display: "flex", alignItems: "center", p: 2, color: "primary" }}>
    <FaPause />
  </div>
);

export default Pause;
