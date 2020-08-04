import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import Hero from "../components/hero";
import EpPreview from "../components/epPreview";

export const query = graphql`
  query episodeQuery($id: String!) {
    episode: feedPodbase(id: { eq: $id }) {
      title
      itunes {
        subtitle
        duration
      }
      enclosure {
        url
      }
      isoDate(formatString: "dddd Do MMMM", locale: "sv")
      content
    }
    episodes: allFeedPodbase(
      sort: { fields: isoDate, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          title
          itunes {
            subtitle
            duration
          }
          enclosure {
            url
          }
          isoDate(formatString: "dddd Do MMMM", locale: "sv")
          contentSnippet
        }
      }
    }
  }
`;

const EpisodeTemplate = ({ data }) => {
  const episode = data.episode;

  return (
    <Layout>
      <SEO title={episode.title} />
      <Hero episode={episode} />
      <About />
      {data.episodes.edges.map(({ node }, i) => {
        if (node.title !== episode.title)
          return <EpPreview episode={node} key={i} />;
        return null;
      })}
    </Layout>
  );
};

export default EpisodeTemplate;
