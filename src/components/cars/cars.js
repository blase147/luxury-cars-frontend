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
    description: 'Black Covertible Coupe',
  },
  {
    id: 2,
    name: 'Cars 2',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Blue Alpine Car.',
  },
  {
    id: 3,
    name: 'Cars 3',
    image: 'https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Gray Lamborghini.',
  },
  {
    id: 4,
    name: 'Cars 4',
    image: 'https://images.pexels.com/photos/164654/pexels-photo-164654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Orange Mercedes Benz G63.',
  },
];

export const Cars = () => (
  <section>
    <h2>LATEST CARS</h2>
    <h3 className="email">Please select your Dream Car</h3>
    <div className="points">.........................</div>
    <Swiper
      className="car-list"
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
