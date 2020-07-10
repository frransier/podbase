const getSlug = require("speakingurl")

async function createProjectPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    query EpisodesQuery {
      episodes: allFeedPodbase {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const episodes = (result.data.episodes || {}).edges || []

  episodes.forEach(edge => {
    const id = edge.node.id
    const slug = getSlug(edge.node.title, { truncate: 200, symbols: true })
    const path = `/episodes/${slug}/`

    createPage({
      path,
      component: require.resolve("./src/templates/episode.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions)
}
