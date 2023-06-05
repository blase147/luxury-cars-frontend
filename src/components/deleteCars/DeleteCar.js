/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './deleteCars.scss';

const DeleteCar = () => {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/cars')
      .then((response) => setCarData(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/v1/cars/${id}`)
      .then(() => {
        const updatedData = carData.filter((car) => car.id !== id);
        setCarData(updatedData);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="cardContent">
        {
          carData.map((carElement) => (
            <div className="card" key={carElement.id}>
              {/* <a href="./">
                <img src={carElement.image} alt="" />
              </a> */}
              <div className="cardtextcontent">
                <a href="./" className="descrip">
                  <h5>{carElement.name}</h5>
                </a>
                <p className="descrip">
                  {carElement.description}
                </p>
                <button type="button" className="btndelete" onClick={() => handleDelete(carElement.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default DeleteCar;
