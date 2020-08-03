/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Platforms from "./platforms";
import Social from "./social";

const About = () => {
  const query = useStaticQuery(graphql`
    query AboutQuery {
      feedPodbaseMeta {
        description
      }
    }
  `);
  const data = query.feedPodbaseMeta;
  return (
    <div sx={{ variant: "variants.about" }}>
      <div sx={{ display: "grid", gridTemplateColumns: ["100%", "50% 50%"] }}>
        <Platforms />
        <Social />
      </div>
      <Styled.p dangerouslySetInnerHTML={{ __html: data.description }} />
    </div>
  );
};

export default About;
