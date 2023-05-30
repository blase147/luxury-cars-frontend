import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navigation, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import styles from './cars.scss';
import { fetchCars } from '../../Redux/Reducers/carSlice';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const status = useSelector((state) => state.cars.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCars());
    }
  }, [dispatch, status]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="house-sec">
      <h2>LATEST CARS</h2>
      <h3 className="email">Please select your Dream Car</h3>
      <div className="points">.........................</div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
        <Swiper
          className="car-list"
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={isMobile ? 1 : 3}
          navigation
        >
          {
            cars.map((item) => (
              <SwiperSlide className="list-items" key={item.id}>
                <div className="cars-imgs">
                  <img src={item.image} style={{ width: '70', height: '70' }} alt={item.name} />
                </div>
                <h5 className={styles.name}><Link to={`${item.id}`}>{item.name}</Link></h5>
                <div className="points">....................</div>
                <p className="email">{item.description}</p>
              </SwiperSlide>
            ))
          }
        </Swiper>
      )}
    </section>
  );
};

export default Cars;
