import styled from 'styled-components';
import { lighten } from 'polished';

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid ${lighten(0.5, '#434e5e')};
  background: #434e5e;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
`;
