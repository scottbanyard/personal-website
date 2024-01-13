import * as React from 'react';
import { StyledDiv } from './styles';
import ReactGlobe from 'react-globe.gl';

const London = [
  {
    lat: 51.5074,
    lng: 0.1278,
    size: 0.2,
    radius: 0.6,
    color: 'red',
    label: 'London'
  }
];

export const Globe = () => {
  return (
    <StyledDiv>
      <ReactGlobe
        width={700}
        height={400}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        pointsData={London}
        pointAltitude="size"
        pointRadius="radius"
        pointColor="color"
        pointLabel="label"
        pointResolution={5}
      />
    </StyledDiv>
  );
};
