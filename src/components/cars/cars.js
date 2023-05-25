import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navigation, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './cars.scss';

export const carData = [
  {
    id: 1,
    name: 'Cars 1',
    image: 'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Yellow Concrete Cars.',
  },
  {
    id: 2,
    name: 'Cars 2',
    image: 'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'White and Red Wooden Cars With Fence.',
  },
  {
    id: 3,
    name: 'Cars 3',
    image: 'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Beautiful Cars in Australia.',
  },
  {
    id: 4,
    name: 'Cars 4',
    image: 'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Beautiful Cars in Australia. One of the best places you can find here in Australia.',
  },
];

export const Cars = () => (
  <section>
    <h2>LATEST CARS</h2>
    <h3 className="email">Please select your Dream Car</h3>
    <div className="points">.........................</div>
    <Swiper
      className="Cars-list"
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
    >
      {
        carData.map((item) => (
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
  </section>
);
