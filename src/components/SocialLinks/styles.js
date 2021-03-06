import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.8s;
  &:hover {
    color: #d3d3d3;
  }
`;

export const IconWrapper = styled.div`
  fill: #fff;
  width: 30px;
  height: 30px;
`;
