import * as React from 'react';
import { StyledDiv, StyledTitle, StyledParagraph } from './styles';

export const Introduction = () => {
  return (
    <StyledDiv>
      <StyledTitle variant="h2">
        Hi, I'm Scott. Welcome to my slightly bland page.
      </StyledTitle>
      <StyledParagraph variant="h6">
        As you may see below on the fancy, interactive 3D globe that I
        definitely did not create, I am currently based in{' '}
        <strong>London</strong>.
      </StyledParagraph>
      <StyledParagraph variant="h6">
        You will see a list of personal projects below that have probably been
        abandoned by now. Feel free to contact me about{' '}
        <strong>team and people leadership</strong>,{' '}
        <strong>software development</strong>, and <strong>running</strong>.
      </StyledParagraph>
    </StyledDiv>
  );
};
