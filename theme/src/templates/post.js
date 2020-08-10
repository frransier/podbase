/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Episode from "../components/episode";
import { Heading } from "theme-ui";

export const query = graphql`
  query postQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      title
      intro
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        name
      }
    }
    allEpisodes: allEpisodes(sort: { fields: date, order: DESC }, limit: 10) {
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

const PostTemplate = ({ data }) => {
  const post = data.post;

  return (
    <Layout>
      <SEO title={post.title} />
      <Heading as="h1">{post.title}</Heading>
      {data.allEpisodes.edges.map((episode, i) => (
        <Episode episode={episode.node} key={i} />
      ))}
    </Layout>
  );
};

export default PostTemplate;
