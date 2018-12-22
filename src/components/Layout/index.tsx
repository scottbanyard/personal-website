import * as React from "react";
import { Picture } from "../Picture";
import { SocialLinks } from "../SocialLinks";
import { Projects } from "../Projects";
import { Biography } from "../Biography";

import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

export const Layout = () => (
  <div>
    <Container>
      <Picture />
      <Biography />
      <SocialLinks />
      <Projects />
    </Container>
  </div>
);
