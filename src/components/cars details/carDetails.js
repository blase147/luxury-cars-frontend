import React from 'react';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { cardetail } from '../../mockData';
import icon from '../../images/icon.png';
import './carDetails.scss';

const CarsDetails = () => (
  <section className="details-sec">
    <div className="detail-container">
      <div className="image">
        <img src={cardetail.image} alt={cardetail.name} />
      </div>
      <div className="details">
        <h5 className="name">{cardetail.name}</h5>
        <div className="ulIcon">
          <ul>
            <li className="first">
              <p>City: </p>
              <p>{cardetail.city}</p>
            </li>
            <li className="first">
              <p>State: </p>
              <p>{cardetail.state}</p>
            </li>
            <li className="first">
              <p>Price:</p>
              <p>{cardetail.country}</p>
            </li>
          </ul>
          <div className="iconColor">
            <img src={icon} alt="icon" />
          </div>
          <Link to="/reserve">
            <button type="button" aria-label="Go back" className="reserve-btn">
              Book Car
              <AiOutlineRightCircle />
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Link to="/">
      <button type="button" aria-label="Go back" className="back-btn"><IoCaretBackOutline /></button>
    </Link>
  </section>
);

export default CarsDetails;
