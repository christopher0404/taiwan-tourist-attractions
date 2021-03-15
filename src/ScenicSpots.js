import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getScenicSpots } from './webAPI';
import { CurrentCityContext } from './contexts';
import ScenicSpot from './components/ScenicSpot';
import CitySelectList from './components/CitySelectList';

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Nav = styled.nav`
  margin-bottom: 2rem;
`;

const Spots = styled.ul``;

function ScenicSpots() {
  const history = useHistory();
  const { city } = useParams();
  const { currentCity, setCurrentCity } = useContext(CurrentCityContext);
  const [scenicSpots, setScenicSpots] = useState([]);

  useEffect(() => {
    setCurrentCity(city ? city : 'All');
    getScenicSpots(city).then(spots => setScenicSpots(spots));
  }, [city, setCurrentCity]);

  const handleCityChange = event => {
    const value = event.target.value;
    history.push(`/scenicSpot/${value}`);
  }

  console.log('cityParam', city);
  console.log('currentCity', currentCity);
  console.log('scenicSpots', scenicSpots);

  return (
    <>
      <Title>台灣觀光景點</Title>
      <Nav>
        <CitySelectList value={city ? city : 'All'} onChange={handleCityChange} />
      </Nav>
      <Spots>
        {scenicSpots.map(spot => (
          <ScenicSpot
            key={spot.ID}
            name={spot.Name}
            description={spot.Description ? spot.Description : spot.DescriptionDetail}
          />
        ))}
      </Spots>
    </>
  );
}

export default ScenicSpots;
