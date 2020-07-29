/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

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
      <Styled.p dangerouslySetInnerHTML={{ __html: data.description }} />
    </div>
  );
};

export default About;
