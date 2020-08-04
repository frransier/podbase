/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import apple from "../images/apple.svg";
import google from "../images/google.svg";
import spotify from "../images/spotify.svg";

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
        Lyssna i appen
      </Styled.h3>
      <div sx={{ variant: "variants.platforms" }}>
        {data.platforms.map((platform, i) => {
          if (platform.includes("itunes"))
            return (
              <img
                src={apple}
                sx={{ mx: 3, height: 30, width: 30 }}
                key={i}
                alt="Apple Podcasts"
              />
            );
          if (platform.includes("google"))
            return (
              <img
                src={spotify}
                sx={{ mx: 3, height: 30, width: 30 }}
                key={i}
                alt="Spotify"
              />
            );
          if (platform.includes("spotify"))
            return (
              <img
                src={google}
                sx={{ mx: 3, height: 30, width: 30 }}
                key={i}
                alt="Google Play"
              />
            );
          return null;
        })}
      </div>
    </div>
  );
};

export default Platforms;
