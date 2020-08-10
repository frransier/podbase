/** @jsx jsx */
import { jsx } from "theme-ui";
import { Text, Box, Container } from "theme-ui";
import Player from "../components/player";

const Layout = ({ children }) => {
  return (
    <Box>
      <Container>{children}</Container>
      <Text as="footer">© Podbase</Text>
      <Player />
    </Box>
  );
};

export default Layout;
