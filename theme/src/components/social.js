/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";

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
    <div>
      <Styled.h3 sx={{ textAlign: "center", mt: 2, mb: 3 }}>Följ oss</Styled.h3>
      <div sx={{ variant: "variants.social" }}>
        {data.social.map((socialMedia, i) => {
          if (socialMedia.includes("facebook"))
            return (
              <img
                src={facebook}
                sx={{ mx: 3, height: 30, width: 30 }}
                key={i}
                alt="Facebook"
              />
            );
          if (socialMedia.includes("instagram"))
            return (
              <img
                src={instagram}
                sx={{ mx: 3, height: 30, width: 30 }}
                key={i}
                alt="Instagram"
              />
            );
          if (socialMedia.includes("twitter"))
            return (
              <img
                src={twitter}
                sx={{ mx: 3, height: 30, width: 30 }}
                key={i}
                alt="Twitter"
              />
            );
          return null;
        })}
      </div>
    </div>
  );
};

export default Social;
