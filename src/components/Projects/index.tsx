import * as React from 'react';
import { ProjectCard } from './ProjectCard';
import { StyledDiv, CustomGrid, Container, StyledTypography } from './styles';
import { projects } from './projects';

export const Projects = () => {
  return (
    <Container>
      <StyledTypography variant={'h4'}>Projects</StyledTypography>
      <StyledDiv>
        {projects.map((p, i) => {
          return (
            <CustomGrid key={i}>
              <ProjectCard project={p} />
            </CustomGrid>
          );
        })}
      </StyledDiv>
    </Container>
  );
};
