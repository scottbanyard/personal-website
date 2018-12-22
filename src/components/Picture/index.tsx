import * as React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledTypography = styled(Typography)`
  && {
    margin-bottom: 20px;
  }
` as any;

const StyledAvatar = styled(Avatar)`
  && {
    width: 300px;
    height: 300px;
    margin: auto;
  }
` as any;

export const Picture = () => {
  return (
    <StyledDiv>
      <StyledTypography variant="headline">
        Scott Banyard's Portfolio
      </StyledTypography>
      <StyledAvatar alt="Scott Banyard" src="/resources/scott.jpg" />
    </StyledDiv>
  );
};
