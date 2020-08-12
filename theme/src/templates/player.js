/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import getSlug from "speakingurl";

const PlayerTemplate = ({ data }) => {
  const slug = getSlug(data.activeEpisode.title, {
    truncate: 200,
    symbols: true,
  });
  const src = `${data.site.siteMetadata.url}/episodes/${slug}/embed/`;
  // const src = `http://localhost:8000/episodes/${slug}/embed/`;

  return <iframe src={src} />;
};

export default PlayerTemplate;

export const query = graphql`
  query playerQuery($id: String!) {
    site {
      siteMetadata {
        url
      }
    }
    activeEpisode: episodes(id: { eq: $id }) {
      title
    }
  }
`;
