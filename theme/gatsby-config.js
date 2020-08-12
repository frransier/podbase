module.exports = ({ rssFeed, theme, platforms, social, sanityId, url }) => ({
  siteMetadata: {
    title: `Podbase POC`,
    description: `Bring your own RSS feed. Get full website`,
    author: `@podbase`,
    theme: theme,
    platforms: platforms,
    social: social,
    url: url,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@frransier/podbase-source`,
      options: {
        url: rssFeed,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: sanityId || "8jznxiqg",
        dataset: "production",
      },
    },
  ],
});
