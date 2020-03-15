import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const StyledDiv = styled.div`
  text-align: center;
`;

export const StyledTypography = styled(Typography)`
  && {
    margin-top: 24px;
    font-weight: 300;
    font-size: 14px;
  }
` as any;
