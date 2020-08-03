/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "variants.header" }}>
    <Styled.h1 sx={{ margin: 0, fontFamily: "heading" }}>{siteTitle}</Styled.h1>
  </header>
);

export default Header;
