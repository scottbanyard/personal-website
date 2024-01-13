import styled from 'styled-components';

export const Grid = styled.div`
  padding-left: 18vw;
  padding-right: 18vw;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;

  @media (max-width: 1300px) {
    && {
      display: unset;
    }
  }
`;

export const LeftSide = styled.div`
  margin-top: 25px;

  @media (max-width: 1300px) {
    && {
      width: 100%;
    }
  }
`;

export const RightSide = styled.div``;

export const ProjectContainer = styled.div`
  padding-left: 18vw;
  padding-right: 18vw;
  padding-bottom: 20px;
  display: flex;
  background-color: #f5f5f5;
`;
