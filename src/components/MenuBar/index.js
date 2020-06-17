import React from 'react';

import { Home } from '@styled-icons/boxicons-solid/Home';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import { ArrowToTop } from '@styled-icons/boxicons-solid/ArrowToTop';
import { LightBulb } from '@styled-icons/entypo/LightBulb';
import { GridAlt } from '@styled-icons/boxicons-solid/GridAlt';

import * as Styles from './styles';

const MenuBar = () => (
  <Styles.MenuBarWrapper>
    <Styles.MenuBarGroup>
      <Styles.MenuBarLink to="/" title="Voltar para Home">
        <Styles.MenuBarItem>
          <Home />
        </Styles.MenuBarItem>
      </Styles.MenuBarLink>
      <Styles.MenuBarLink to="/search/" title="Pesquisar">
        <Styles.MenuBarItem>
          <SearchAlt2 />
        </Styles.MenuBarItem>
      </Styles.MenuBarLink>
    </Styles.MenuBarGroup>
    <Styles.MenuBarGroup>
      <Styles.MenuBarItem title="Mudar o tema">
        <LightBulb />
      </Styles.MenuBarItem>
      <Styles.MenuBarItem title="Mudar visualização">
        <GridAlt />
      </Styles.MenuBarItem>
      <Styles.MenuBarItem title="Ir para o Topo">
        <ArrowToTop />
      </Styles.MenuBarItem>
    </Styles.MenuBarGroup>
  </Styles.MenuBarWrapper>
);

export default MenuBar;
