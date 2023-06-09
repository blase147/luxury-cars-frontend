import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IoCaretBackOutline } from 'react-icons/io5';
import { AiOutlineRightCircle, AiOutlineRight } from 'react-icons/ai';
import { fetchCarById } from '../../Redux/Reducers/carDetailsSlice';
import icon from '../../images/icon.png';
import './carDetails.scss';

const CarsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.carDetail.car);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <section className="details-sec">
      {car ? (
        <div className="detail-container">
          <div className="image">
            <img src={car.image} alt={car.name} />
          </div>
          <div className="details">
            <h5 className="name">{car.name}</h5>
            <div className="ulIcon">
              <ul>
                <li className="first">
                  <p>Brand: </p>
                  <p>{car.brand}</p>
                </li>
                <li className="first">
                  <p>Car ID: </p>
                  <p>{car.id}</p>
                </li>
                <li className="first">
                  <p>Lending Fee:</p>
                  <p>
                    $
                    {car.lending_fee}
                  </p>
                </li>
              </ul>
              <div className="iconColor">
                <h4>
                  DISCOVER MORE COLORS
                  <AiOutlineRight />
                </h4>
                <img src={icon} alt="icon" />
              </div>
              <Link to={`/reservation/${id}`}>
                <button type="button" aria-label="Go back" className="reserve-btn">
                  Book Your Car
                  <AiOutlineRightCircle />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div> // Display a loading message while waiting for API call to complete
      )}
      <Link to="/">
        <button type="button" aria-label="Go back" className="back-btn"><IoCaretBackOutline /></button>
      </Link>
    </section>
  );
};

CarsDetails.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;

export default CarsDetails;
