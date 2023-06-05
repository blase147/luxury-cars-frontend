import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MyReservations.scss';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { fetchCarById } from '../../Redux/Reducers/carDetailsSlice';
import { fetchReservations } from '../../Redux/Reducers/reservationsSlice';

const ReservationList = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id);
  const reservations = useSelector((state) => state.reservations.reservations);
  const loading = useSelector((state) => state.reservations.loading);
  const error = useSelector((state) => state.reservations.error);
  const cars = useSelector((state) => state.cars.cars);

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    reservations.forEach((reservation) => {
      dispatch(fetchCarById(reservation.car_id));
    });
  }, [dispatch, reservations]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  const getCarName = (carId) => {
    const house = cars.find((c) => c.id === carId);
    return car ? car.name : 'Loading...';
  };

  return (
    <section className="my_reservations_sec">
      <div className="my_reservations">
        <h2>Your Reservations</h2>
        <div className="headings">
          <p>Booked Date</p>
          <p>Car Name</p>
        </div>
        {reservations.map((reservation) => (
          <div key={reservation.id} className="reservation-details">
            <p>
              {reservation.reservation_date}
            </p>
            <p>
              {getCarName(reservation.car_id)}
            </p>
          </div>
        ))}
        <Link to="/">
          <button type="button" aria-label="Go back" className="back-btn"><IoCaretBackOutline /></button>
        </Link>
      </div>
    </section>
  );
};

export default ReservationList;
