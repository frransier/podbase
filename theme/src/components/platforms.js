/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
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
    <div>
      <Styled.h3 sx={{ textAlign: "center", mt: 2, mb: 3 }}>
        Lyssna i din app
      </Styled.h3>
      <div sx={{ variant: "variants.platforms" }}>
        {data.platforms.map((platform, i) => {
          if (platform.includes("itunes"))
            return <FaPodcast sx={{ mx: 3 }} key={i} />;
          if (platform.includes("google"))
            return <FaGooglePlay sx={{ mx: 3 }} key={i} />;
          if (platform.includes("spotify"))
            return <FaSpotify sx={{ mx: 3 }} key={i} />;
          return null;
        })}
      </div>
    </div>
  );
};

export default Platforms;
