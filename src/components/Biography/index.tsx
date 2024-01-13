import * as React from 'react';
import { StyledDiv, StyledTypography } from './styles';

export const Biography = () => {
  return (
    <StyledDiv>
      <StyledTypography variant="subheading">
        People Leader, Software Engineer & Mediocre Runner based in London
      </StyledTypography>
      <StyledTypography variant="subheading">
        MEng Computer Science
      </StyledTypography>
      <StyledTypography variant="subheading">
        University of Bristol
      </StyledTypography>
    </StyledDiv>
  );
};
