import React from "react";
import { ThemeProvider } from "theme-ui";
// import { useStaticQuery } from "gatsby";
// import { graphql } from "gatsby";

function Provider(props) {
  // const data = useStaticQuery(graphql`
  //   query ThemeQuery {
  //     site {
  //       siteMetadata {
  //         theme
  //       }
  //     }
  //   }
  // `);
  // console.log(data.site.siteMetadata.theme);
  //   const theme = data.site.siteMetadata.theme === "sketchy" ? funk : dark;
  const theme = {
    colors: {
      text: "hsl(10, 20%, 20%)",
      background: "hsl(10, 10%, 98%)",
      primary: "hsl(10, 80%, 50%)",
      secondary: "hsl(10, 60%, 50%)",
      highlight: "hsl(10, 40%, 90%)",
      purple: "hsl(250, 60%, 30%)",
      muted: "hsl(10, 20%, 94%)",
      gray: "hsl(10, 20%, 50%)",
    },
    fonts: {
      body: "Poppins, sans-serif",
      heading: "Poppins, sans-serif",
      monospace: "Menlo, monospace",
    },
    variants: {
      layout: {
        bg: "background",
      },
      header: {
        bg: "background",
        color: "text",
        mb: [2, 4],
        p: [2, 4],
      },
      main: { maxWidth: 768, m: "0 auto", bg: "background" },
      footer: {},
      social: {
        fontSize: 5,
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        mb: 4,
      },
      platforms: {
        fontSize: 5,
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        mb: 4,
      },
      hero: {
        display: "grid",
        gridTemplateColumns: ["100%", "35% 65%"],
      },
      epPreview: {
        display: "grid",
        gridTemplateColumns: ["100%", "18% 82%"],
        alignItems: "center",
        my: 4,
      },
      episode: { display: "grid", px: 3 },
      about: { p: 3 },
      image: { maxWidth: "90%", mx: "auto" },
      player: { mx: 4 },
    },
    fontWeights: {
      body: 400,
      heading: 900,
      bold: 700,
    },
    lineHeights: {
      body: 1.625,
      heading: 1.25,
    },
    styles: {
      root: {
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "body",
      },
      h1: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 5,
      },
      h2: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 4,
      },
      h3: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 3,
      },
      p: {
        color: "text",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
      },
    },
  };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export { Provider };
