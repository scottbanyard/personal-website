import * as React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledTypography = styled(Typography)`
  && {
    margin-top: 20px;
    font-style: italic;
  }
` as any;

export const Biography = () => {
  return (
    <StyledDiv>
      <StyledTypography variant="subheading">
        Software Engineer based in London and Cardiff
      </StyledTypography>
    </StyledDiv>
  );
};
