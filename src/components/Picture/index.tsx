import * as React from 'react';
import { StyledDiv, StyledTypography, StyledAvatar } from './styles';

export const Picture = () => {
  return (
    <StyledDiv>
      <StyledTypography variant="headline">Scott Banyard</StyledTypography>
      <StyledAvatar alt="Scott Banyard" src="/resources/scott.jpg" />
    </StyledDiv>
  );
};
