import React from 'react';
import './deleteCars.scss';
import { AiTwotoneDelete } from 'react-icons/fa';
// import Swiper from 'swiper';

const DeleteCar = () => (
  <div className="container">
    <div className="cardContent">
      <div className="card">
        <a href="./">
          <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </a>
        <div className="cardtextcontent">
          <a href="./">
            <h5>Noteworthy technology acquisitions 2021</h5>
          </a>
          <p>
            Here are the biggest enterprise technology acquisitions.
          </p>
          <a href="./">
            <button type="button" className="btndelete">
              Delete
              <AiTwotoneDelete />
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default DeleteCar;
