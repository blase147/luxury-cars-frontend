import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { createReservation } from '../../Redux/Reducers/reservationsSlice';
import { fetchCurrentUser } from '../../Redux/Reducers/authSlice';
import './Reservation.scss';

const Reservation = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const {
    id,
  } = useSelector((state) => state.auth);

  const car = useSelector((state) => state.carDetail.car);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleCreateReservation = () => {
    const reservationData = {
      userId: id,
      carId: car.id,
      reservationDate: selectedDate,
    };
    dispatch(createReservation(reservationData))
      .then((response) => {
        console.log(response);
        navigate('/my_reservations');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section
      className="reservation_sec"
      style={{ backgroundImage: `linear-gradient(rgb(133 209 25 / 60%), rgb(140 255 0 / 62%)), url(${car.image})` }}
    >
      {car ? (
        <div className="reservation">
          <div>
            <h2 className="title">
              Book your choice car
              {' '}
              {car.name}
            </h2>
            <hr />
          </div>
          <div>
            <p>
              If you wish to book the car,
              please select the selector below to choose a date.
            </p>
            <div className="confirm-input">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                utcOffset
              />
              <button type="button" className="book-btn" onClick={handleCreateReservation}>
                Confirm Booking
              </button>
            </div>
          </div>
          <Link to={`/${car.id}`}>
            <button type="button" aria-label="Go back" className="back-btn">
              <IoCaretBackOutline />
            </button>
          </Link>
        </div>
      ) : (
        <p>Please go to the main page to select your desired car.</p>
      )}
    </section>
  );
};

export default Reservation;
