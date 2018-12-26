import * as React from "react";
import styled from "styled-components";
import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from "react-icons/io";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NewRowDiv = styled.div`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

const Mail = styled(IoMdMail)`
  && {
    font-size: 1.5em;
  }
`;

const LinkedIn = styled(IoLogoLinkedin)`
  && {
    font-size: 2em;
  }
`;

const Github = styled(IoLogoGithub)`
  && {
    font-size: 2em;
  }
`;

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
        <Typography>: sb14803@my.bristol.ac.uk</Typography>
      </NewRowDiv>
    </StyledDiv>
  );
};
