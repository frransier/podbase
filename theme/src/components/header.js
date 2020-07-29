/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "variants.header" }}>
    <Styled.h1 style={{ margin: 0 }}>{siteTitle}</Styled.h1>
  </header>
);

export default Header;
