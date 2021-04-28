import * as React from 'react';
import styled from 'styled-components';
import { CardActions, Button, Typography } from '@material-ui/core';
import { IProject } from '../types';
import {
  StyledCard,
  StyledCardContent,
  StyledTypography,
  StyledTitleTypography,
  StyledLink
} from './styles';

export interface IProjectProps {
  project: IProject;
}

export const ProjectCard = (props: IProjectProps) => {
  const { title, date, description, tech, url } = props.project;
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledLink target="_blank" href={url}>
          <StyledTitleTypography gutterBottom>{title}</StyledTitleTypography>
        </StyledLink>
        <StyledTypography>{date}</StyledTypography>
        <br />
        <StyledTypography color="textSecondary">{description}</StyledTypography>
        <br />
        <StyledTypography color="textSecondary">Tech: {tech}</StyledTypography>
      </StyledCardContent>
    </StyledCard>
  );
};
