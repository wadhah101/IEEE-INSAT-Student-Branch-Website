const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

const createBlogPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            id
          }
        }
      }
    }
  `);
  result.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: `blogs/${node.id}`,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        slug: node.id,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages({ graphql, actions });
};
