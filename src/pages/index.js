import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Home</h1>
    </div>
  </Layout>
);

export default IndexPage;
