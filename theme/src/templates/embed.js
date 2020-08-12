/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { graphql } from "gatsby";

const EmbedTemplate = ({ data }) => {
  return (
    <div>
      <Heading as="h2">{data.activeEpisode.title}</Heading>
      <audio src={data.activeEpisode.url} controls autoPlay={false} />
    </div>
  );
};

export default EmbedTemplate;

export const query = graphql`
  query embedQuery($id: String!) {
    activeEpisode: episodes(id: { eq: $id }) {
      url
      title
    }
  }
`;
