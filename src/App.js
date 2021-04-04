import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { CityProvider } from './CityContext';
import ScenicSpots from './ScenicSpots';
import Navbar from './components/Navbar';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  padding: 3rem 1.5rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export default function App() {
  return (
    <CityProvider>
      <Wrapper>
        <Router>
          <Title>台灣觀光景點</Title>
          <Navbar />
          <Switch>
            <Redirect exact from='/' to='/scenicSpot' />
            <Route exact path='/scenicSpot' component={ScenicSpots} />
            <Route path='/scenicSpot/:city' component={ScenicSpots} />
          </Switch>
        </Router>
      </Wrapper>
    </CityProvider>
  );
}
