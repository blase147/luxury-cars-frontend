import React from 'react';
import './deleteCars.scss';
import { carData } from '../../mockData';

const DeleteCar = () => (
  <div className="container">
    <div className="cardContent">
      {
        carData.map((carElement) => (
          <div className="card" key={carElement.id}>
            <a href="./">
              <img src={carElement.image} alt="" />
            </a>
            <div className="cardtextcontent">
              <a href="./" className="descrip">
                <h5>{carElement.name}</h5>
              </a>
              <p className="descrip">
                {carElement.description}
              </p>
              <a href="./" className="btnDel">
                <button type="button" className="btndelete">
                  Delete
                </button>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);
export default DeleteCar;
