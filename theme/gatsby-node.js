const getSlug = require("speakingurl");

async function createProjectPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    query MainQuery {
      episodes: allEpisodes {
        edges {
          node {
            id
            title
          }
        }
      }
      posts: allSanityPost {
        edges {
          node {
            id
            title
          }
        }
      }
      people: allSanityPerson {
        edges {
          node {
            id
            name
          }
        }
      }
      sponsors: allSanitySponsor {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const episodes = (result.data.episodes || {}).edges || [];
  const posts = (result.data.posts || {}).edges || [];
  const people = (result.data.people || {}).edges || [];
  const sponsors = (result.data.sponsors || {}).edges || [];

  episodes.forEach((edge) => {
    const id = edge.node.id;
    const slug = getSlug(edge.node.title, { truncate: 200, symbols: true });
    const path = `/episodes/${slug}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/episode.js"),
      context: { id },
    });
  });
  episodes.forEach((edge) => {
    const id = edge.node.id;
    const slug = getSlug(edge.node.title, { truncate: 200, symbols: true });
    const path = `/episodes/${slug}/player/`;

    createPage({
      path,
      component: require.resolve("./src/templates/player.js"),
      context: { id },
    });
  });
  episodes.forEach((edge) => {
    const id = edge.node.id;
    const slug = getSlug(edge.node.title, { truncate: 200, symbols: true });
    const path = `/episodes/${slug}/embed/`;

    createPage({
      path,
      component: require.resolve("./src/templates/embed.js"),
      context: { id },
    });
  });

  if (posts.length > 0) {
    posts.forEach((edge) => {
      const id = edge.node.id;
      const slug = getSlug(edge.node.title, { truncate: 200, symbols: true });
      const path = `/posts/${slug}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/post.js"),
        context: { id },
      });
    });
  }
  if (people.length > 0) {
    people.forEach((edge) => {
      const id = edge.node.id;
      const slug = getSlug(edge.node.name, { truncate: 200, symbols: true });
      const path = `/people/${slug}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/person.js"),
        context: { id },
      });
    });
  }
  if (sponsors.length > 0) {
    sponsors.forEach((edge) => {
      const id = edge.node.id;
      const slug = getSlug(edge.node.name, { truncate: 200, symbols: true });
      const path = `/sponsors/${slug}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/sponsor.js"),
        context: { id },
      });
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions);
};
