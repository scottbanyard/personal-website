import * as React from 'react';
import { StyledDiv, StyledTypography } from './styles';

export const Biography = () => {
  return (
    <StyledDiv>
      <StyledTypography variant="subheading">
        Software Engineer based in London
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
