import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';
import * as Styles from './styles';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Styles.ProfileWrapper>
      <Styles.ProfileAuthor>
        <h1>{title}</h1>
      </Styles.ProfileAuthor>
      <Styles.ProfileLink>
        <Avatar />
      </Styles.ProfileLink>
      <Styles.ProfileDescription>{description}</Styles.ProfileDescription>
    </Styles.ProfileWrapper>
  );
};

export default Profile;
