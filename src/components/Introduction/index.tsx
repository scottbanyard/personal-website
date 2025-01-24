import * as React from 'react';
import { StyledDiv, StyledTitle, StyledParagraph } from './styles';

export const Introduction = () => {
  return (
    <StyledDiv>
      <StyledTitle variant="h2">Hi, I'm Scott.</StyledTitle>
      <StyledParagraph variant="h6">
        As you may see below on the fancy, interactive 3D globe, I am currently
        based in <strong>London</strong>.
      </StyledParagraph>
      <StyledParagraph variant="h6">
        Below you will find a list of personal projects that have not had much
        love recently. Reach out to me if you'd like to talk about{' '}
        <strong>team and people leadership</strong>,{' '}
        <strong>software engineering</strong>, and <strong>running</strong>.
      </StyledParagraph>
    </StyledDiv>
  );
};
