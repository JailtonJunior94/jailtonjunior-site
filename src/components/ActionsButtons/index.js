import React from 'react';
import { Highlight } from '@styled-icons/material/Highlight';

import * as Styles from './styles';

const ActionsButtons = () => (
  <Styles.ActionsButtonsWrapper>
    <Styles.ActionsButtonsList>
      <Styles.ActionsButtonsItem>
        <Styles.ActionsButtonsLink>
          <Styles.IconWrapper>
            <Highlight />
          </Styles.IconWrapper>
        </Styles.ActionsButtonsLink>
      </Styles.ActionsButtonsItem>
    </Styles.ActionsButtonsList>
  </Styles.ActionsButtonsWrapper>
);

export default ActionsButtons;
