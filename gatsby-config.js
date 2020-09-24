const website = require('./src/config/website');
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports ={
  pathPrefix: '/aishwaryaSah.github.io',
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    author: website.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aishwarya Sah`,
        short_name: `aishwaryaSah`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profileimage.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path : `${__dirname}/src/pages`,
        name : 'pages',
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    'gatsby-transformer-remark'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/aishwaryaSah.github.io",
}
