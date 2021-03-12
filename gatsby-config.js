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

    // manifest.json
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'assets/logos/sb/sb.webp',
        name: 'IEEE INSAT Student Branch',
        short_name: 'IEEE INSAT',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#4891bb',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
};
