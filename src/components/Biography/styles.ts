import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledDiv = styled.div`
  text-align: center;
  margin-top: 5vh;
`;

export const StyledTypography = styled(Typography)`
  && {
    margin-top: 24px;
  }
` as any;
