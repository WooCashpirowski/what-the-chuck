import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCoverflow, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { JokesContext } from '../context';
import SwiperCard from '../components/SwiperCard';
import SwiperWrapper from '../components/SwiperWrapper';
import Loader from '../components/Loader';

SwiperCore.use([Navigation, EffectCoverflow, Keyboard]);

const Political = ({ fetchJokes, category, loading }) => {
  const { politicalJokes, setPoliticalJokes, useWindowWidth } =
    useContext(JokesContext);
  const width = useWindowWidth();

  useEffect(() => {
    const newJokes = [];
    const callbackFn = (data) => {
      newJokes.push(data);
      if (newJokes.length === 5) {
        setPoliticalJokes([...newJokes, ...politicalJokes]);
      }
    };
    fetchJokes(category, callbackFn);
  }, []);

  const isMobile = width < 560;

  return (
    <SwiperWrapper className={isMobile ? 'p1' : ''}>
      {loading ? (
        <Loader />
      ) : (
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : 2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={!isMobile}
          className="mySwiper"
        >
          {politicalJokes.map((joke) => {
            return (
              <SwiperSlide key={joke.id}>
                <SwiperCard joke={joke} />;
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </SwiperWrapper>
  );
};

export default Political;

Political.propTypes = {
  fetchJokes: PropTypes.func,
  category: PropTypes.string,
  loading: PropTypes.bool,
};
