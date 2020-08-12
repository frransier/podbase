/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, meta, title, episode, image, stream }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
        }
      }
      podcast {
        title
        description
        language
        image {
          title
          url
        }
      }
    }
  `);
  const podcast = data.podcast;
  const site = data.site.siteMetadata;

  const metaDescription = description || podcast.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: podcast.language,
      }}
      title={title}
      titleTemplate={`%s | ${podcast.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription.replace(/(<([^>]+)>)/gi, ""),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription.replace(/(<([^>]+)>)/gi, ""),
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.url,
        },
        {
          property: `og:image`,
          content: image || podcast.image.url,
        },
        {
          name: `twitter:card`,
          content: episode ? `player` : `summary`,
        },
        {
          name: `twitter:player`,
          content: episode,
        },
        {
          name: `twitter:player:stream`,
          content: stream,
        },
        {
          name: `twitter:player:width`,
          content: `262px`,
        },
        {
          name: `twitter:player:height`,
          content: `262px`,
        },
        {
          name: `twitter:image`,
          content: podcast.image.url,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:site`,
          content: "@podbase",
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
