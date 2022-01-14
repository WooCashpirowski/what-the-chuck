import React, {
  createContext,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';

function getJokesFromLocalStorage(type) {
  return localStorage.getItem(type)
    ? JSON.parse(localStorage.getItem(type))
    : [];
}

const JokesContext = createContext();

// eslint-disable-next-line react/prop-types
const JokesProvider = ({ children }) => {
  const [religionJokes, setReligionJokes] = useState(
    getJokesFromLocalStorage('religionJokes'),
  );
  const [explicitJokes, setExplicitJokes] = useState(
    getJokesFromLocalStorage('explicitJokes'),
  );
  const [politicalJokes, setPoliticalJokes] = useState(
    getJokesFromLocalStorage('politicalJokes'),
  );

  useEffect(() => {
    localStorage.setItem('religionJokes', JSON.stringify(religionJokes));
    localStorage.setItem('explicitJokes', JSON.stringify(explicitJokes));
    localStorage.setItem('politicalJokes', JSON.stringify(politicalJokes));
  }, [religionJokes, explicitJokes, politicalJokes]);

  const resetAll = () => {
    setReligionJokes([]);
    setPoliticalJokes([]);
    setExplicitJokes([]);
  };

  const useWindowWidth = () => {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
      const updateWidth = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return width;
  };

  return (
    <JokesContext.Provider
      value={{
        religionJokes,
        explicitJokes,
        politicalJokes,
        setReligionJokes,
        setExplicitJokes,
        setPoliticalJokes,
        useWindowWidth,
        resetAll,
      }}
    >
      {children}
    </JokesContext.Provider>
  );
};

export { JokesContext, JokesProvider };
