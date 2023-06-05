/* eslint-disable no-console */
import './addCars.scss';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import axios from 'axios';

const AddCar = () => {
  const navigate = useNavigate();
  const [isCarAdded, setIsCarAdded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    image: '',
    lending_fee: '',
    description: '',
    car: '', // Added car property to formData
  });
  const apiEndPoint = 'http://localhost:4000/api/v1/cars';
  const addCar = async (carData) => {
    try {
      const response = await axios.post(apiEndPoint, { car: carData });
      return response.data;
    } catch (error) {
      console.error('Error adding car:', error);
      throw error;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCar(formData); // Use the addCar function
      setFormData({
        name: '',
        brand: '',
        image: '',
        lending_fee: '',
        description: '',
        car: '', // Reset car property
      });
      setIsCarAdded(true);
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };
  useEffect(() => {
    if (isCarAdded) {
      setTimeout(() => {
        navigate('/');
        setIsCarAdded(false);
      }, 100);
    }
  }, [isCarAdded, navigate]);
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>ADD LUXURY CARS</h2>
          <div className="inputEle first">
            <input type="text" placeholder="Car Name" onChange={handleChange} name="name" />
          </div>
          <div className="inputEle">
            <input type="text" placeholder="Car brand" onChange={handleChange} name="brand" />
          </div>
          <div className="inputEle">
            <input type="text" placeholder="Car ImageUrl" onChange={handleChange} name="image" />
          </div>
          <div className="inputEle">
            <input type="number" placeholder="Car lending_fee" onChange={handleChange} name="lending_fee" />
          </div>
          <div className="inputEle">
            <textarea id="message" name="description" rows="4" placeholder="Car Description..." onChange={handleChange} />
          </div>
          <div className="inputEle">
            <input type="text" placeholder="Car" onChange={handleChange} name="car" />
          </div>
          <div className="inputEle submit">
            <button type="button" className="btnsubmitf" onClick={handleSubmit}>
              Add Car
            </button>
          </div>
          <Link to="/">
            <button type="button" className="returnBtn" aria-label="Go back"><IoCaretBackOutline /></button>
          </Link>
        </form>
      </div>
    </>
  );
};
export default AddCar;
