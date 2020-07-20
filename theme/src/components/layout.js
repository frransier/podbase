/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

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
    <div sx={{ background: "white" }}>
      <Header siteTitle={data.feedPodbaseMeta.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ marginTop: 40 }}>© Podbase</footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
