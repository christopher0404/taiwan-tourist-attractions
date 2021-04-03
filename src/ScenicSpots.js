import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getScenicSpots } from './webAPI';
import { useCity } from './CityContext';
import ScenicSpot from './components/ScenicSpot';

const Spots = styled.ul``;

function ScenicSpots() {
  const { city } = useParams();
  const { currentCity, setCurrentCity } = useCity();

  const [scenicSpots, setScenicSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreSpots, setHasMoreSpots] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [skip, setSkip] = useState(0);

  const observer = useRef();
  const lastSpotRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMoreSpots) {
        setSkip(prevSkip => prevSkip + 30);
      }
    });

    if (node) observer.current.observe(node);
  }, [hasMoreSpots, isLoading]);

  useEffect(() => {
    setCurrentCity(city);
    setScenicSpots([]);
    setSkip(0);
  }, [city, setCurrentCity]);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    getScenicSpots(currentCity, skip).then(res => {
      setScenicSpots(prevSpots => [...new Set([...prevSpots, ...res])]);
      setHasMoreSpots(res.length > 0);
      setIsLoading(false);
    }).catch(() => {
      setHasError(true);
    });
  }, [currentCity, skip]);

  return (
    <>
      <Spots>
        {scenicSpots.map((spot, index) => {
          if (scenicSpots.length === index + 1) {
            return (
              <ScenicSpot
                spotRef={lastSpotRef}
                key={index}
                name={spot.Name}
                description={spot.Description ? spot.Description : spot.DescriptionDetail}
              />
            )
          } else {
            return (
              <ScenicSpot
                key={index}
                name={spot.Name}
                description={spot.Description ? spot.Description : spot.DescriptionDetail}
              />
            )
          }
        })}
      </Spots>
      <div>{isLoading && 'Loading...'}</div>
      <div>{hasError && 'Error'}</div>
    </>
  );
}

export default ScenicSpots;
