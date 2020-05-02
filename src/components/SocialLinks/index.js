import React from 'react';

import Icons from './Icons';
import links from './content';

import * as Styles from './styles';

const SocialLinks = () => (
  <Styles.SocialLinksWrapper>
    <Styles.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label];
        return (
          <Styles.SocialLinksItem key={i}>
            <Styles.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Styles.IconWrapper>
                <Icon />
              </Styles.IconWrapper>
            </Styles.SocialLinksLink>
          </Styles.SocialLinksItem>
        );
      })}
    </Styles.SocialLinksList>
  </Styles.SocialLinksWrapper>
);

export default SocialLinks;
