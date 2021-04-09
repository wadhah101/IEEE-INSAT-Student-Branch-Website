/* eslint-disable @typescript-eslint/no-var-requires */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()]
        }
    })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createBlogPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allContentfulBlog {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
        createPage({
            path: `blogs/${node.slug}`,
            component: path.resolve('./src/templates/blog-post.tsx'),
            context: {
                slug: node.id
            }
        })
    })
}
