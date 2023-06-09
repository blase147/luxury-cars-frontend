import React from 'react';
import './navigation.css';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/Reducers/authSlice';

const NavigationBar = () => {
  // const [style, setStyle] = useState('menu');
  // const [menuStatus, setMenuStatus] = useState('open');

  // const handleClick = () => {
  //   if (menuStatus === 'open') {
  //     setMenuStatus('close');
  //     setStyle('menu active');
  //   } else if (menuStatus === 'close') {
  //     setMenuStatus('open');
  //     setStyle('menu');
  //   }
  // };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const handleLogout = async () => {
    if (token) {
      await dispatch(logoutUser());
      setTimeout(() => {
        navigate('/');
      }, 100);
    }
  };

  const navLinks = [
    { url: '/', name: 'Cars' },
    token && { url: '/my_reservations', name: 'My Reservations' },
    { url: '/add_car', name: 'Add Car' },
    { url: '/delete_car', name: 'Delete Car' },
  ].filter(Boolean);

  return (
    <div>
      {/* <button type="button" onClick={handleClick}>
        Menu
      </button> */}
      <div className="menu">
        <div className="logo">Luxury Car Lending</div>
        <ul>
          {navLinks.map(({ url, name }) => (
            <li key={name}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
          {token ? (
            <li>
              <button type="button" onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Log In</Link>
            </li>
          )}
        </ul>
        <div className="footer">
          <div className="social">
            <FaTwitter />
            <FaFacebookF />
            <TiSocialGooglePlus />
            <FaVine />
            <FaPinterestP />
          </div>
          <small>&copy; 2023 ENJOY YOUR RIDE</small>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
