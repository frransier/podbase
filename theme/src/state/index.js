import React from "react";
import { ThemeProvider } from "theme-ui";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

function Provider(props) {
  const data = useStaticQuery(graphql`
    query ThemeQuery {
      site {
        siteMetadata {
          theme
        }
      }
    }
  `);
  console.log(data.site.siteMetadata.theme);
  //   const theme = data.site.siteMetadata.theme === "sketchy" ? funk : dark;
  const theme = {
    variants: {
      layout: {},
      header: {
        background: "red",
        color: "white",
        mb: 4,
        p: 4,
      },
      main: {},
      footer: {},
      social: {},
      platforms: {},
      hero: {},
      epPreview: {},
      episode: {},
      about: {},
    },
  };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export { Provider };
