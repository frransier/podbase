/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Episode from "../components/episode";
import Platforms from "../components/platforms";
import Social from "../components/social";
import { Box, Text, Image, Card, Grid } from "theme-ui";
import { useGlobalState } from "../state/globalState";
import { useEffect } from "react";
import getSlug from "speakingurl";

const EpisodeTemplate = ({ data }) => {
  const activeEpisode = data.activeEpisode;
  const [, setActiveEpisode] = useGlobalState("activeEpisode");
  const slug = getSlug(activeEpisode.title, {
    truncate: 200,
    symbols: true,
  });
  const episode = `${data.site.siteMetadata.url}/${slug}/player/`;
  useEffect(() => {
    setActiveEpisode({
      src: activeEpisode.url,
      title: activeEpisode.title,
      slug: "",
    });
  }, [activeEpisode.url, activeEpisode.title, setActiveEpisode]);

  return (
    <Layout>
      <SEO
        title={activeEpisode.title}
        description={activeEpisode.snippet}
        image={activeEpisode.image || data.meta.image.url}
        episode={episode}
        stream={activeEpisode.url}
      />
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

export default EpisodeTemplate;

export const query = graphql`
  query episodeQuery($id: String!) {
    site {
      siteMetadata {
        url
      }
    }
    meta: podcast {
      description
      image {
        url
        title
      }
    }
    activeEpisode: episodes(id: { eq: $id }) {
      title
      url
      snippet
      description
      image
      duration
      date(formatString: "dddd Do MMMM", locale: "sv")
    }
    episodes: allEpisodes(sort: { fields: date, order: DESC }, limit: 10) {
      edges {
        node {
          title
          url
          snippet
          description
          image
          duration
          date(formatString: "dddd Do MMMM", locale: "sv")
        }
      }
    }
  }
`;
