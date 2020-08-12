module.exports = {
  plugins: [
    {
      resolve: `@podsite/base-theme`,
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
        url: "https://podbase.netlify.app",
      },
    },
  ],
};
//asdf
