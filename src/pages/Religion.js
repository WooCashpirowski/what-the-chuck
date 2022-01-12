import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { JokesContext } from '../context';
import GridCard from '../components/GridCard';
import Grid from '../components/Grid';
import Loader from '../components/Loader';

const Religion = ({ fetchJokes, category, loading }) => {
  const { religionJokes, setReligionJokes } = useContext(JokesContext);

  useEffect(() => {
    const newJokes = [];
    const callbackFn = (data) => {
      newJokes.push(data);
      if (newJokes.length === 5) {
        setReligionJokes([...newJokes, ...religionJokes]);
      }
    };
    fetchJokes(category, callbackFn);
  }, []);

  return (
    <Grid>
      {loading ? (
        <Loader />
      ) : (
        <>
          {religionJokes.map((joke) => {
            return <GridCard joke={joke} key={joke.id} />;
          })}
        </>
      )}
    </Grid>
  );
};

export default Religion;

Religion.propTypes = {
  fetchJokes: PropTypes.func,
  category: PropTypes.string,
  loading: PropTypes.bool,
};
