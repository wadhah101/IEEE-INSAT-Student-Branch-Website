require('dotenv').config();
const { env } = require('process');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.ieee-insat.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'placeholders',
        path: `${__dirname}/assets/placeholders/`,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-typegen',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-gatsby-cloud',
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
