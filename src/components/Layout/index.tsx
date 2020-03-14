import * as React from "react";
import { Picture } from "../Picture";
import { SocialLinks } from "../SocialLinks";
import { Projects } from "../Projects";
import { Biography } from "../Biography";
import { Container, LeftSide, RightSide } from "./styles";

export const Layout = () => (
  <div>
    <Container>
      <LeftSide>
        <Picture />
        <Biography />
        <SocialLinks />
      </LeftSide>
      <RightSide>
        <Projects />
      </RightSide>
    </Container>
  </div>
);
