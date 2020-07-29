import React from "react";
import { ThemeProvider } from "theme-ui";
import { funk, sketchy, dark } from "@theme-ui/presets";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

function Provider(props) {
  //   const data = useStaticQuery(graphql`
  //     query ThemeQuery {
  //       site {
  //         siteMetadata {
  //           theme
  //         }
  //       }
  //     }
  //   `);
  //   console.log(data.site.siteMetadata.theme);
  //   const theme = data.site.siteMetadata.theme === "sketchy" ? funk : dark;
  const theme = {
    variants: {
      header: {
        background: "red",
        color: "white",
        mb: 4,
        p: 4,
      },
      display: {
        display: "grid",
        // gridTemplateColumns: ["1fr", "1fr 1fr"],
        // gridGap: 3,
      },
    },
  };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export { Provider };
