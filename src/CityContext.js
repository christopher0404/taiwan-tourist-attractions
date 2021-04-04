import React, { useContext, createContext } from 'react';
import useLocalStorage from'./hooks/useLocalStorage';

const CityContext = createContext();

export const useCity = () => useContext(CityContext);

export function CityProvider({ children }) {
  const [currentCity, setCurrentCity] = useLocalStorage('currentCity');

  return (
    <CityContext.Provider value={{ currentCity, setCurrentCity }}>
      {children}
    </CityContext.Provider>
  );
}
