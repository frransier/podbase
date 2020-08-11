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

function SEO({ description, meta, title, episode }) {
  const { podcast } = useStaticQuery(
    graphql`
      query {
        podcast {
          language
          image {
            title
            url
          }
        }
      }
    `
  );

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
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: episode ? `player` : `summary`,
        },
        {
          name: `twitter:player`,
          content: `https://podbase.netlify.app/src/`,
        },
        {
          name: `twitter:player:stream`,
          content: `https://sphinx.acast.com/isabella-soker-sheila/host/media.mp3`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: siteMetadata.author,
        // },
        {
          name: `twitter:title`,
          content: title,
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
