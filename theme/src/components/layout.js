/** @jsx jsx */
import { jsx } from "theme-ui";

import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      feedPodbaseMeta {
        title
      }
    }
  `);

  return (
    <div sx={{ bg: "background" }}>
      <Header siteTitle={data.feedPodbaseMeta.title} />
      <div sx={{ variant: "variants.layout" }}>
        <main sx={{ variant: "variants.main" }}>{children}</main>
        <footer sx={{ variant: "variants.footer" }}>© Podbase</footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
