import React from 'react';
import styled from 'styled-components';

const Spot = styled.li`
  margin-bottom: 2rem;
`;

const SpotName = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const SpotDescription = styled.p`
  font-size: 1rem;
`;

export default function ScenicSpot({ spotRef, name, description }) {
  return (
    <Spot ref={spotRef}>
      <SpotName>{name}</SpotName>
      <SpotDescription>{description}</SpotDescription>
    </Spot>
  )
};
