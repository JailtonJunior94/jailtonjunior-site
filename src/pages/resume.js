import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Resume</h1>
    </div>
  </Layout>
);

export default ResumePage;
