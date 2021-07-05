const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = `${createFilePath({ node, getNode })}`;

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors);
  }

  result.data.allMdx.nodes.forEach((page) => {
    createPage({
      path: page.frontmatter.path,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        pathSlug: page.frontmatter.path,
      },
    });
  });
}