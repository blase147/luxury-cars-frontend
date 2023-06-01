import React from 'react';
import './addCars.scss';

const AddCar = () => (
  <div className="container">
    <form>
      <h2>ADD LUXURY CARS</h2>
      <div className="inputEle first">
        <input type="text" placeholder="Car Name" />
      </div>
      <div className="inputEle">
        <input type="text" placeholder="Car Subtitle" />
      </div>
      <div className="inputEle">
        <input type="text" placeholder="Car ImageUrl" />
      </div>
      <div className="inputEle">
        <input type="number" placeholder="Car Price" />
      </div>
      <div className="inputEle">
        <textarea id="message" name="message" rows="4" placeholder="Car Description..." />
      </div>
      <div className="inputEle submit">
        <input type="submit" />
      </div>
    </form>
  </div>
);
export default AddCar;
