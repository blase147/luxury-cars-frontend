import React from 'react';
import './navigation.css';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { Link } from 'react-router-dom';

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

  // const navigate = useNavigate();

  const navLinks = [
    { url: '/', name: 'cars' },
    { url: '/my_reservations', name: 'My Reservations' },
    { url: '/add_car', name: 'Add Car' },
    { url: '/delete_house', name: 'Delete Car' },
  ];

  return (
    <div>
      <div className="menu">
        <div className="logo">Luxury Cars Lending</div>
        <ul>
          {navLinks.map(({ url, name }) => (
            <li key={name}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
          <li>
            <Link to="/login">Log In</Link>
          </li>

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
