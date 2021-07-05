import React from 'react';
import { graphql, Link } from 'gatsby'
import Layout from 'src/components/layout';


import 'stylesheets/style.scss';

const Home = ({ data, location }) => {
  const posts = data.allMdx.edges.filter(item => item.node.fileAbsolutePath.includes('posts'));
  const articles = data.allMdx.edges.filter(item => item.node.fileAbsolutePath.includes('articles'));
  return (
    <Layout pageTitle="Home">
      <h2>Posts</h2>
      {posts.map(({ node }) => (
        <div key={node.id}>
          <Link>
            <h3>{`${node.frontmatter.title} — ${node.frontmatter.date}`}</h3>
            {/* <p>{node.excerpt}</p> */}
          </Link>
        </div>
      ))}
      <h2>Articles</h2>
      {articles.map(({ node }) => (
        <div key={node.id}>
          <Link>
            <h3>{`${node.frontmatter.title} — ${node.frontmatter.date}`}</h3>
            {/* <p>{node.excerpt}</p> */}
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;