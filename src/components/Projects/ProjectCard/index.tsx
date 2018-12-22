import * as React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IProject } from "../index";

export interface IProjectProps {
  project: IProject;
}

const StyledCard = styled(Card)`
  && {
    margin: 10px;
  }
` as any;

const StyledCardContent = styled(CardContent)`
  && {
    min-height: 200px;
  }
` as any;

export const ProjectCard = (props: IProjectProps) => {
  const { title, date, description, tech, url } = props.project;
  return (
    <StyledCard>
      <StyledCardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary" component="h2">
          {date}
        </Typography>
        <br />
        <Typography color="textSecondary">{description}</Typography>
        <br />
        <Typography color="textSecondary">Tech: {tech}</Typography>
      </StyledCardContent>
      <CardActions>
        <Button target="_blank" href={url}>
          Explore
        </Button>
      </CardActions>
    </StyledCard>
  );
};
