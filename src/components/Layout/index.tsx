import * as React from 'react';
import { Picture } from '../Picture';
import { SocialLinks } from '../SocialLinks';
import { Projects } from '../Projects';
import { Biography } from '../Biography';
import { Globe } from '../Globe';
import { Introduction } from '../Introduction';
import { Grid, LeftSide, ProjectContainer, RightSide } from './styles';

export const Layout = () => (
  <div>
    <Grid>
      <LeftSide>
        <Picture />
        <Biography />
        <SocialLinks />
      </LeftSide>
      <RightSide>
        <Introduction />
        <Globe />
      </RightSide>
    </Grid>
    <ProjectContainer>
      <Projects />
    </ProjectContainer>
  </div>
);
