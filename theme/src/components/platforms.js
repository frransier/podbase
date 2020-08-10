/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import apple from "../images/apple.svg";
import google from "../images/google.svg";
import spotify from "../images/spotify.svg";
import { Grid, Box } from "theme-ui";

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
    <Box sx={{ textAlign: "center" }}>
      <Styled.h3>Lyssna i appen</Styled.h3>
      <Grid columns={"repeat(3, 40px)"} sx={{ justifyContent: "center" }}>
        {data.platforms.includes("itunes") && (
          <img sx={{ width: "40px" }} src={apple} alt="Apple Podcasts" />
        )}
        {data.platforms.includes("google") && (
          <img sx={{ width: "40px" }} src={google} alt="Google" />
        )}
        {data.platforms.includes("spotify") && (
          <img sx={{ width: "40px" }} src={spotify} alt="Spotify" />
        )}
      </Grid>
    </Box>
  );
};

export default Platforms;
