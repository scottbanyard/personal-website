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
        You will then see a list of personal, software projects that have
        probably been ditched by now. Who knows what the point of this website
        is? Feel free to contact me about{' '}
        <strong>team and people leadership</strong>, <strong>software</strong>{' '}
        or non-techy things such as <strong>running</strong>.
      </StyledParagraph>
    </StyledDiv>
  );
};
