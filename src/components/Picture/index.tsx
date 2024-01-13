import * as React from 'react';
import { StyledDiv, StyledAvatar } from './styles';

export const Picture = () => {
  return (
    <StyledDiv>
      <StyledAvatar alt="Scott Banyard" src="/resources/scott.jpg" />
    </StyledDiv>
  );
};
