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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '85osrxzk46uw',
        accessToken: env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
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
