require('dotenv').config();
const { env } = require('process');

module.exports = {
  plugins: [
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
  ],
};
