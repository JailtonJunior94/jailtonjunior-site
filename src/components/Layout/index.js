import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '../../styles/global';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import * as Styles from './styles';

const Layout = ({ children }) => {
  return (
    <Styles.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <Styles.LayoutMain>{children}</Styles.LayoutMain>
      <MenuBar />
    </Styles.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
