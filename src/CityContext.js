import React, { useState, useContext, createContext } from 'react';
// import { useParams } from 'react-router-dom';

const CityContext = createContext();

export const useCity = () => useContext(CityContext);

export function CityProvider({ children }) {
  const [currentCity, setCurrentCity] = useState();

  return (
    <CityContext.Provider value={{ currentCity, setCurrentCity }}>
      {children}
    </CityContext.Provider>
  );
}
