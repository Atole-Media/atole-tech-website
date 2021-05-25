require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Atole Tech`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://atolemedia.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `atole-tech`,
        short_name: `atole`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/services/ball.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
   
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "render-blocking",

        /* Enable font loading listener to handle FOUT */
        // enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://use.typekit.net"],
        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "futura-pt",
            /* URL to the font CSS file with @font-face definition */
            file: `https://use.typekit.net/${process.env.TYPEKIT_ID}.css`,
          },
          {
            name: `itc-benguiat`,
            file: `https://use.typekit.net/${process.env.TYPEKIT_ID}.css`,
          },
        ],
      },
    },
  ],
}
