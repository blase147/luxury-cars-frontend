import './addCars.scss';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoCaretBackOutline } from 'react-icons/io5';
import { createCar } from '../../Redux/Reducers/addCarSlice';

const AddCar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCarAdded, setIsCarAdded] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    image: '',
    lending_fee: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCar(formData));
    setFormData({
      name: '',
      brand: '',
      image: '',
      lending_fee: '',
      description: '',
    });
    setIsCarAdded(true);
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
            <input type="text" placeholder="Car Name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="inputEle">
            <input type="text" placeholder="Car brand" value={formData.brand} onChange={handleChange} />
          </div>
          <div className="inputEle">
            <input type="text" placeholder="Car ImageUrl" value={formData.image} onChange={handleChange} />
          </div>
          <div className="inputEle">
            <input type="number" placeholder="Car lending_fee" value={formData.lending_fee} onChange={handleChange} />
          </div>
          <div className="inputEle">
            <textarea id="message" name="message" rows="4" placeholder="Car Description..." value={formData.description} onChange={handleChange} />
          </div>
          <div className="inputEle submit">
            <button type="button" className="btnsubmitf">
              Add Car
            </button>
          </div>
          <Link to="/">
            <button type="button" aria-label="Go back"><IoCaretBackOutline /></button>
          </Link>
        </form>

      </div>
    </>
  );
};
export default AddCar;
