/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Episode from "../components/episode";
import { Heading } from "theme-ui";

export const query = graphql`
  query sponsorQuery($id: String!) {
    sponsor: sanitySponsor(id: { eq: $id }) {
      name
      description
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

const SponsorTemplate = ({ data }) => {
  const sponsor = data.sponsor;
  return (
    <Layout>
      <SEO title={sponsor.name} />
      <Heading as="h1">{sponsor.name}</Heading>
      {data.allEpisodes.edges.map((episode, i) => (
        <Episode episode={episode.node} key={i} />
      ))}
    </Layout>
  );
};

export default SponsorTemplate;
