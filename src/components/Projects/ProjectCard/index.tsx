import * as React from 'react';
import { IProject } from '../types';
import { CardMedia } from '@material-ui/core';
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
  const {
    title,
    date,
    description,
    tech,
    url,
    image,
    imageLabel
  } = props.project;
  return (
    <StyledCard>
      <CardMedia component="img" height="150" image={image} alt={imageLabel} />
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
