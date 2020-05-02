import React from 'react';

import links from './content';
import * as Styles from './styles';

const MenuLinks = () => (
  <Styles.MenuLinksWrapper>
    <Styles.MenuLinksList>
      {links.map((link, i) => (
        <Styles.MenuLinksItem key={i}>
          <Styles.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </Styles.MenuLinksLink>
        </Styles.MenuLinksItem>
      ))}
    </Styles.MenuLinksList>
  </Styles.MenuLinksWrapper>
);

export default MenuLinks;
