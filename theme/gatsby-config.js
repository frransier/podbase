module.exports = ({ rssFeed, theme }) => ({
  siteMetadata: {
    title: `Podbase POC`,
    description: `Bring your own RSS feed. Get full website`,
    author: `@podbase`,
    theme: theme,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: rssFeed,
        name: `Podbase`,
        parserOption: {
          customFields: {
            item: [["content", "bajs:content"]],
          },
        },
      },
    },
  ],
});