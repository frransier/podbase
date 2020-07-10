import React from "react"
import { Link, graphql } from "gatsby"
import dayjs from "dayjs"
import { FaClock, FaRegCalendarAlt } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import getSlug from "speakingurl"

const IndexPage = ({ data }) => {
  function createMarkup(text) {
    return { __html: text }
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          dangerouslySetInnerHTML={createMarkup(data.site.description)}
        ></div>
        <img
          style={{ width: "20%" }}
          src={data.site.image.url}
          alt={data.site.image.title}
        />
      </div>
      {data.episodes.edges.map(({ node }, i) => (
        <Link
          to={`/episodes/${getSlug(node.title, {
            truncate: 200,
            symbols: true,
          })}/`}
        >
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
            key={i}
          >
            <img
              style={{ width: "12%", height: "20%", marginRight: 50 }}
              src={node.itunes.image || data.site.image.url}
              alt={node.title}
            />

            <div>
              <h3>{node.title}</h3>

              <p>{node.itunes.subtitle}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    marginRight: 40,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaRegCalendarAlt style={{ marginRight: 10 }} />{" "}
                  {dayjs(node.isoDate).format("dddd MMMM D")}
                </p>
                <p
                  style={{
                    marginRight: 40,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaClock style={{ marginRight: 10 }} /> {node.itunes.duration}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

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
          isoDate
          contentSnippet
        }
      }
    }
  }
`
