/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import { Grid, Box } from "theme-ui";

const Social = () => {
  const query = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social
        }
      }
    }
  `);
  const data = query.site.siteMetadata;

  return (
    <Box sx={{ textAlign: "center" }}>
      <Styled.h3>Följ oss</Styled.h3>
      <Grid columns={"repeat(3, 40px)"} sx={{ justifyContent: "center" }}>
        {data.social.includes("facebook") && (
          <img sx={{ width: "40px" }} src={facebook} alt="Facebook" />
        )}
        {data.social.includes("twitter") && (
          <img sx={{ width: "40px" }} src={twitter} alt="Twitter" />
        )}
        {data.social.includes("instagram") && (
          <img sx={{ width: "40px" }} src={instagram} alt="Instagram" />
        )}
      </Grid>
    </Box>
  );
};

export default Social;
