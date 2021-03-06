// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "futureCSS",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "ArticlePost",
        path: "./articles/**/*.md",
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
  templates: {
    ArticlePost: "/articles/:title",
  },
}
