import React from 'react';
import Layout from 'src/components/layout';
import { useStaticQuery, graphql } from 'gatsby'

import 'stylesheets/style.scss';


const Archive = ({ data }) => {
  console.log('archive', data);

  const query = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Older Posts">
      <h1>Older Posts</h1>
      <ul>
        {query.allFile.nodes.map(item => (<li key={item.name}>{item.name}</li>))}
      </ul>
    </Layout>
  );

};


export default Archive;