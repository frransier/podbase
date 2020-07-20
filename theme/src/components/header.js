/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "variants.header" }}>
    {/* <Link
      to="/"
      sx={{
        textDecoration: `none`,
      }}
    > */}
    <Styled.h1 style={{ margin: 0 }}>{siteTitle}</Styled.h1>
    {/* </Link> */}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
