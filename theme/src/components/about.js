/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const About = ({ image, description }) => (
  <div sx={{ variant: "variants.about" }}>
    <img sx={{ width: "100%" }} src={image} />
    <Styled.p dangerouslySetInnerHTML={{ __html: description }} />
  </div>
);

export default About;
