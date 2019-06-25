module.exports = {
  siteMetadata: {
    title: `useReactNYC`,
    description: `useReact.NYC is about the React community right
      here in New York City. It's not about any one company or a core
      group of individuals. We were founded on the principle that
      everyone deserves to be treated with respect.`,
    image: '/src/assets/meetup_banner.png',
    url: 'https://usereact.nyc',
    twitterUsername: 'useReactNYC'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorJson`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-137044680-2',
        // Puts tracking script in the head instead of the body
        head: true
      }
    },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby website`,
        short_name: `Gatsby website`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`
      }
    }
  ]
};
