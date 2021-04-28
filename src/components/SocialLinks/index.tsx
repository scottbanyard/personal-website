import * as React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import {
  StyledDiv,
  NewRowDiv,
  Mail,
  LinkedIn,
  Github,
  StyledLink,
  StyledTypography
} from './styles';

export const SocialLinks = () => {
  return (
    <StyledDiv>
      <IconButton
        aria-label="LinkedIn"
        target="_blank"
        href="https://www.linkedin.com/in/scottbanyard/"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        aria-label="Github"
        target="_blank"
        href="https://github.com/scottbanyard"
      >
        <Github />
      </IconButton>
      <NewRowDiv>
        <Mail />
        <StyledLink href="mailto:me@scottbanyard.com">
          <StyledTypography>me@scottbanyard.com</StyledTypography>
        </StyledLink>
      </NewRowDiv>
    </StyledDiv>
  );
};
