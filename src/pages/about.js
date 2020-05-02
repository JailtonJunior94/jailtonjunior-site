import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>About</h1>
    </div>
  </Layout>
);

export default AboutPage;
