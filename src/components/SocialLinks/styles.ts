import styled from 'styled-components';
import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from 'react-icons/io';
import { Typography } from '@material-ui/core';

export const StyledDiv = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NewRowDiv = styled.div`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgb(35, 51, 132);
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-weight: 300;
  }

  &:hover {
    color: rgb(35, 51, 132);
  }
` as any;

export const Mail = styled(IoMdMail)`
  && {
    font-size: 1.5em;
    margin-right: 5px;
  }
`;

export const LinkedIn = styled(IoLogoLinkedin)`
  && {
    font-size: 2em;
  }
`;

export const Github = styled(IoLogoGithub)`
  && {
    font-size: 2em;
  }
`;
