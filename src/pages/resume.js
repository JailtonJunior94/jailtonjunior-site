import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  position: relative;
  color: '#434e5e';
`;

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <Container>
      <Title>Resume</Title>
    </Container>
  </Layout>
);

export default ResumePage;
