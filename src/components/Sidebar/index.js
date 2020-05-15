import React from 'react';

import * as Styles from './styles';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

const Sidebar = () => (
  <Styles.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </Styles.SidebarWrapper>
);

export default Sidebar;
