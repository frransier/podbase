/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const Image = ({ image }) => {
  const query = useStaticQuery(graphql`
    query ImageQuery {
      feedPodbaseMeta {
        description
        image {
          url
          title
        }
      }
    }
  `);
  const data = query.feedPodbaseMeta;
  return (
    <img
      sx={{ variant: "variants.image" }}
      src={image || data.image.url}
      alt={data.image.title}
    />
  );
};

export default Image;
