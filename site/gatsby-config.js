module.exports = {
  plugins: [
    {
      resolve: `@frransier/gatsby-theme-123`,
      options: {
        rssFeed: "https://rss.acast.com/isabella-soker-sheila",
        theme: JSON.stringify({
          colors: {
            text: "#000",
            background: "#F0FAFF",
            primary: "#07c",
            secondary: "#30c",
            muted: "#f6f6f6",
          },
          styles: {
            h3: {
              color: "text",
            },
          },
        }),
        platforms: ["itunes", "spotify", "google"],
        social: ["facebook", "instagram", "twitter"],
        // sanityId: "9dhni4ie",
      },
    },
  ],
};
