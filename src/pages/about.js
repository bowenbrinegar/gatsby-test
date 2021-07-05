import React from 'react';
import Layout from 'src/components/layout';

import 'stylesheets/style.scss';

const About = ({ data, location }) => {
  console.log('about', data);
  console.log('about', location);
  
  return (
    <Layout pageTitle="About">
      <h1>About</h1>
    </Layout>
  );  
};

export default About;
