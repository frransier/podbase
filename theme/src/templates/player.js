/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import getSlug from "speakingurl";

const PlayerTemplate = ({ data }) => {
  const slug = getSlug(data.activeEpisode.title, {
    truncate: 200,
    symbols: true,
  });
  const src = `${data.site.siteMetadata.url}/${slug}/embed/`;
  console.log(src);
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
