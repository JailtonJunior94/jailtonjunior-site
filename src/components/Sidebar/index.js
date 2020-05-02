import React from 'react';

import * as Styles from './styles';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import ActionsButtons from '../ActionsButtons';

const Sidebar = () => (
  <Styles.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
    <ActionsButtons />
  </Styles.SidebarWrapper>
);

export default Sidebar;
