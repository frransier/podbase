import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactAudioPlayer from "react-audio-player";

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
      isoDate
      content
    }
  }
`;

const EpisodeTemplate = ({ data }) => {
  const episode = data.episode;

  function createMarkup(text) {
    return { __html: text };
  }

  return (
    <Layout>
      <SEO title={episode.title} />
      <h1>{episode.title}</h1>
      <ReactAudioPlayer
        src={episode.enclosure.url}
        title={episode.title}
        controls
      />
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={createMarkup(episode.content)}
      ></div>
    </Layout>
  );
};

export default EpisodeTemplate;
