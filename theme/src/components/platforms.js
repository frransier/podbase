/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { FaSpotify, FaPodcast, FaGooglePlay } from "react-icons/fa";

const Platforms = () => {
  const query = useStaticQuery(graphql`
    query PlatformsQuery {
      site {
        siteMetadata {
          platforms
        }
      }
    }
  `);
  const data = query.site.siteMetadata;

  return (
    <div sx={{ variant: "variants.platforms" }}>
      {data.platforms.map((platform, i) => {
        if (platform.includes("itunes")) return <FaPodcast key={i} />;
        if (platform.includes("google")) return <FaGooglePlay key={i} />;
        if (platform.includes("spotify")) return <FaSpotify key={i} />;
        return null;
      })}
    </div>
  );
};

export default Platforms;
