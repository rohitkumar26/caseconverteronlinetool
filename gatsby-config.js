/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `case converter online tool -convert lower case to upper case,upper case to lower case`,
    siteUrl: `https://caseconverteronlinetool.com`,
    author: "rohit kumar",
    keywords: "upper case, lower case, case converter,convert case, title case, param case, camel case, upper case to lower case, lower case to upper case",
    socialImage: 'static/media/logo.png',
    description: `A very handy online tool for converting text between diffrent letter cases: upper case , lower case,capitalized case,param case,camel case,snake case ,path case and more tools online.`,
  },
  plugins: [`gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `case converter online tool`,
        short_name: `case converter`,
        start_url: `/`,
        background_color: `#FFF`,

        display: `standalone`,
        icon: 'static/logo.png'
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-174543358-4`,
        // Puts tracking script in the head instead of the body
        head: true,

      },
    }
  ],
}
