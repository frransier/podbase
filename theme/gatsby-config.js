module.exports = ({ rssFeed, fonts, colors, platforms, social }) => ({
  siteMetadata: {
    title: `Podbase POC`,
    description: `Bring your own RSS feed. Get full website`,
    author: `@podbase`,
    fonts: fonts,
    colors: colors,
    platforms: platforms,
    social: social,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: rssFeed,
        name: `Podbase`,
        // parserOption: {
        //   customFields: {
        //     item: [["content", "bajs:content"]],
        //   },
        // },
      },
    },
  ],
});
