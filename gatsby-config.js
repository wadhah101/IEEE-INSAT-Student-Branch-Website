require('dotenv').config();
const { env } = require('process');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.ieee-insat.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-typegen',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    // cms
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: env.CONTENTFUL_SPACE_ID,
        environment: env.CONTENTFUL_ENV || 'master',
        accessToken: env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },

    // fonts
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },

    // manifest.json
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'assets/logos/sb/sb-white.png',
        name: 'IEEE INSAT Student Branch',
        short_name: 'IEEE INSAT',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
      },
    },
  ],
};
