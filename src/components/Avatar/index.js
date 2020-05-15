import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as Styles from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-jailtonjunior.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );
  return <Styles.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;
