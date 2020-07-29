/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { FaPause } from "react-icons/fa";

const Pause = () => (
  <div sx={{ display: "flex", alignItems: "center", p: 2 }}>
    <FaPause />
  </div>
);

export default Pause;
