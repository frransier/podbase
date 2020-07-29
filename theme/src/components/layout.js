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
    <div sx={{ variant: "variants.layout" }}>
      <Header siteTitle={data.feedPodbaseMeta.title} />
      <main sx={{ variant: "variants.main" }}>{children}</main>
      <footer sx={{ variant: "variants.footer" }}>© Podbase</footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
