import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: #fff;
    font-weight: bold;
  }
`;

export const MenuLinksLink = styled(Link)`
  color: #d3d3d3;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
