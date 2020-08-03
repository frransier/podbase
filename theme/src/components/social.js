/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
            return <FaFacebook sx={{ mx: 3 }} key={i} />;
          if (socialMedia.includes("instagram"))
            return <FaInstagram sx={{ mx: 3 }} key={i} />;
          if (socialMedia.includes("twitter"))
            return <FaTwitter sx={{ mx: 3 }} key={i} />;
          return null;
        })}
      </div>
    </div>
  );
};

export default Social;
