/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
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
    <div sx={{ variant: "variants.epPreview" }}>
      <img
        sx={{ display: ["none", "flex"], width: "100%" }}
        src={episode.itunes.image || data.image.url}
        alt={episode.title}
      />

      <div sx={{ mx: 3 }}>
        <div sx={{ display: ["auto", "flex"], alignItems: "center", mt: 3 }}>
          <Link
            to={`/episodes/${getSlug(episode.title, {
              truncate: 200,
              symbols: true,
            })}/`}
            sx={{ color: "text" }}
          >
            <Styled.h3 sx={{ m: 0 }}>{episode.title}</Styled.h3>
          </Link>
          <div sx={{ mx: "auto" }} />
          <Styled.p sx={{ textTransform: "uppercase", fontSize: 1, m: 0 }}>
            {episode.isoDate}
          </Styled.p>
        </div>
        <Styled.p
          dangerouslySetInnerHTML={{ __html: episode.itunes.subtitle }}
        />

        <div sx={{ display: "flex", alignItems: "center" }}>
          <Styled.p
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaClock sx={{ mr: 2 }} /> {episode.itunes.duration}
          </Styled.p>
        </div>
      </div>
    </div>
  );
};

export default EpPreview;
