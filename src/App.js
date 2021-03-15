import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { CurrentCityContext } from './contexts';
import ScenicSpots from './ScenicSpots';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  padding: 3rem 1.5rem;
`;

function App() {
  const [currentCity, setCurrentCity] = useState('All');

  return (
    <CurrentCityContext.Provider value={{ currentCity, setCurrentCity }}>
      <Wrapper>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/scenicSpot" />
            <Redirect exact from="/scenicSpot/All" to="/scenicSpot" />
            <Route exact path="/scenicSpot" component={ScenicSpots} />
            <Route path="/scenicSpot/:city" component={ScenicSpots} />
          </Switch>
        </Router>
      </Wrapper>
    </CurrentCityContext.Provider>
  );
}

export default App;
