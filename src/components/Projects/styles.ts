import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  margin: 30px 100px 10px 100px;
  padding: 25px;
  border: 1px solid rgb(127, 0, 0);
  border: 1px solid rgba(214, 205, 205, 0.5);
  background-clip: padding-box;
`;

export const CustomGrid = styled.div`
  && {
    width: 33.33333%;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-weight: 300;
    text-align: center;
    margin-bottom: 10px;
  }
` as any;
