/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import About from "../components/about";
import EpPreview from "../components/epPreview";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <Hero episode={data.episodes.edges[0].node} image={data.site.image.url} />
      <About />

      {data.episodes.edges.map(({ node }, i) => {
        if (i > 0) return <EpPreview episode={node} key={i} />;
        return null;
      })}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site: feedPodbaseMeta {
      description
      image {
        url
        title
      }
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
