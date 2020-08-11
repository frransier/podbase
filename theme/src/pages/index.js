/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Episode from "../components/episode";
import Platforms from "../components/platforms";
import Social from "../components/social";
import { Box, Text, Image, Card, Grid, Embed } from "theme-ui";
import { useGlobalState } from "../state/globalState";
import { useEffect } from "react";

const IndexPage = ({ data }) => {
  const [, setActiveEpisode] = useGlobalState("activeEpisode");
  const lastestEpisode = data.episodes.edges[0].node;

  useEffect(() => {
    setActiveEpisode({
      src: lastestEpisode.url,
      title: lastestEpisode.title,
      slug: "",
    });
  }, [lastestEpisode.url, lastestEpisode.title, setActiveEpisode]);

  return (
    <Layout>
      <SEO title="Home" />
      <Embed src={lastestEpisode.url} />
      <Grid columns={[1, 2]} sx={{ mt: 5, mb: 3 }}>
        <Image
          src={data.meta.image.url}
          sx={{ pr: [0, 4], flex: ["0 0 100%", "0 0 50%"] }}
        />
        <Text dangerouslySetInnerHTML={{ __html: data.meta.description }} />
      </Grid>
      <Grid columns={[1, 2]} sx={{ mb: 5 }}>
        <Platforms />
        <Social />
      </Grid>
      <Box>
        {data.episodes.edges.map((episode, i) => (
          <Card key={i}>
            <Episode episode={episode.node} key={i} />
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    meta: podcast {
      description
      image {
        url
        title
      }
    }
    episodes: allEpisodes(sort: { fields: date, order: DESC }, limit: 10) {
      edges {
        node {
          title
          snippet
          url
          date(formatString: "dddd Do MMMM", locale: "sv")
          description
        }
      }
    }
  }
`;
