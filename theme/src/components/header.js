/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "variants.header" }}>
    <Link to="/" sx={{ textDecoration: "none", color: "none" }}>
      <Styled.h1 sx={{ margin: 0, fontFamily: "heading" }}>
        {siteTitle}
      </Styled.h1>
    </Link>
  </header>
);

export default Header;
