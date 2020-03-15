import styled from "styled-components";
import { Card, CardContent, Typography } from "@material-ui/core";

export const StyledCard = styled(Card)`
  && {
    margin: 10px;
  }
` as any;

export const StyledCardContent = styled(CardContent)`
  && {
    min-height: 200px;
  }
` as any;

export const StyledTypography = styled(Typography)`
  && {
    font-size: 12px;
    font-weight: 300;
  }
` as any;

export const StyledTitleTypography = styled(Typography)`
  && {
    font-size: 13px;
    font-weight: 400;
  }

  &:hover {
    color: rgb(35, 51, 132);
  }
` as any;

export const StyledLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgb(35, 51, 132);
  }
`;
