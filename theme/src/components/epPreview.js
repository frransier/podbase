/** @jsx jsx */
import { jsx } from "theme-ui";
import getSlug from "speakingurl";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";
import { useStaticQuery, Link } from "gatsby";

const EpPreview = ({ episode }) => {
  const query = useStaticQuery(graphql`
    query MainImageQuery {
      feedPodbaseMeta {
        image {
          url
          title
        }
      }
    }
  `);
  const data = query.feedPodbaseMeta;
  return (
    <div sx={{ variant: "variants.EpPreview" }}>
      <img
        style={{ width: "12%", height: "20%", marginRight: 50 }}
        src={episode.itunes.image || data.image.url}
        alt={episode.title}
      />

      <div>
        <Link
          to={`/episodes/${getSlug(episode.title, {
            truncate: 200,
            symbols: true,
          })}/`}
        >
          <h3>{episode.title}</h3>
        </Link>
        <p>{episode.itunes.subtitle}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              marginRight: 40,
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            <FaRegCalendarAlt style={{ marginRight: 10 }} /> {episode.isoDate}
          </p>
          <p
            style={{
              marginRight: 40,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaClock style={{ marginRight: 10 }} /> {episode.itunes.duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EpPreview;
