import * as React from 'react';
import { StyledDiv, StyledTypography } from './styles';

export const Biography = () => {
  return (
    <StyledDiv>
      <StyledTypography variant="subtitle1">
        People Leader, Software Engineer & Mediocre Runner based in London
      </StyledTypography>
      <StyledTypography variant="subtitle1">
        MEng Computer Science
      </StyledTypography>
      <StyledTypography variant="subtitle1">
        University of Bristol
      </StyledTypography>
    </StyledDiv>
  );
};
