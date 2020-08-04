import React from "react";
import { ThemeProvider } from "theme-ui";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

function Provider(props) {
  const data = useStaticQuery(graphql`
    query ThemeQuery {
      site {
        siteMetadata {
          fonts
          colors
        }
      }
    }
  `);

  const fonts = fontsPicker(data.site.siteMetadata.fonts);
  const colors = colorsPicker(data.site.siteMetadata.colors);
  //  const variants = variantsPicker(data.site.siteMetadata.variants);

  const theme = {
    fonts: fonts,
    colors: colors,
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

function fontsPicker(font) {
  switch (font) {
    case "Poppins":
      const poppins = {
        body: "Poppins, sans-serif",
        heading: "Poppins, sans-serif",
      };
      return poppins;
    case "Roboto":
      const roboto = {
        body: "Roboto",
        heading: "Roboto Slab",
      };
      return roboto;
    case "Rosario":
      const rosario = {
        body: "Crimson Text",
        heading: "Rosario",
      };
      return rosario;
    default:
      break;
  }
}

function colorsPicker(colors) {
  switch (colors) {
    case "Summer":
      const summer = {
        text: "#4A4737",
        background: "#FBF9F0",
        primary: "#00F3EC",
        muted: "#AFAC99",
      };
      return summer;
    case "Autumn":
      const autumn = {
        text: "#54433A",
        background: "#FFF5E9",
        primary: "#F67F31",
        muted: "#BCA79C",
      };
      return autumn;
    case "Winter":
      const winter = {
        text: "#3E4756",
        background: "#F0FAFF",
        primary: "#319CF6",
        muted: "#A2ACBD",
      };
      return winter;
    case "Spring":
      const spring = {
        text: "#394B41",
        background: "#EEFDF4",
        primary: "#31F6A6",
        muted: "#9CB0A4",
      };
      return spring;
    default:
      break;
  }
}
