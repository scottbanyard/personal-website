import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  margin: 30px 100px 10px 100px;
  padding: 25px;
  background-clip: padding-box;

  @media (max-width: 1500px) {
    && {
      margin: 30px 0 0 0;
      padding: 0;
    }
  }
`;

export const CustomGrid = styled.div`
  && {
    width: 33.33333%;
  }

  @media (max-width: 1200px) {
    && {
      width: 50%;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-weight: 300;
    text-align: center;
    margin-bottom: 20px;
  }
` as any;
