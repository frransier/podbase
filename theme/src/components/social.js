/** @jsx jsx */
import { jsx } from "theme-ui";
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
    <div sx={{ variant: "variants.social" }}>
      {data.social.map((socialMedia, i) => {
        if (socialMedia.includes("facebook")) return <FaFacebook key={i} />;
        if (socialMedia.includes("instagram")) return <FaInstagram key={i} />;
        if (socialMedia.includes("twitter")) return <FaTwitter key={i} />;
        return null;
      })}
    </div>
  );
};

export default Social;
