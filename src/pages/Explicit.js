import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { JokesContext } from '../context';
import SliderWrapper from '../components/SliderWrapper';
import Loader from '../components/Loader';
import CardWrapper from '../components/SliderCard';

SwiperCore.use([Mousewheel, Pagination]);

const Explicit = ({ fetchJokes, category, loading }) => {
  const { explicitJokes, setExplicitJokes } = useContext(JokesContext);

  useEffect(() => {
    const newJokes = [];
    const callbackFn = (data) => {
      newJokes.push(data);
      setExplicitJokes([...newJokes, ...explicitJokes]);
    };
    fetchJokes(category, callbackFn);
  }, []);

  return (
    <SliderWrapper>
      {loading ? (
        <Loader />
      ) : (
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{ clickable: true }}
        >
          {explicitJokes.map((joke) => {
            return (
              <SwiperSlide key={joke.id}>
                <CardWrapper>
                  <p>{joke.value}</p>
                </CardWrapper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </SliderWrapper>
  );
};

export default Explicit;

Explicit.propTypes = {
  fetchJokes: PropTypes.func,
  category: PropTypes.string,
  loading: PropTypes.bool,
};
