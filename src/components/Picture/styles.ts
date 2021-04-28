import styled from 'styled-components';
import { Typography, Avatar } from '@material-ui/core';

export const StyledDiv = styled.div`
  text-align: center;
`;

export const StyledTypography = styled(Typography)`
  && {
    margin-bottom: 20px;
    font-weight: 300;
  }
` as any;

export const StyledAvatar = styled(Avatar)`
  && {
    width: 240px;
    height: 240px;
    margin: auto;
  }
` as any;
