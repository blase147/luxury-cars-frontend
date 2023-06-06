import {
  BrowserRouter as Router, Routes, Route, Outlet,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import NavigationBar from './components/navigation/navigation';
import CarsDetails from './components/cars details/carDetails';
import Cars from './components/cars/cars';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DeleteCar from './components/deleteCars/DeleteCar';
import AddCar from './components/addCars/addCar';
import ReservationList from './components/my reservations/MyReservations';
import Reservatio from './components/reservation/Reservation';

const NavigationbarLayout = () => (
  <>
    <NavigationBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register" element={<Reservation />} />
            <Route path="/register" element={<ReservationList />} />
            <Route element={<NavigationbarLayout />}>
              <Route path="/" element={<Cars />} />
              <Route path="/:id" element={<CarsDetails />} />
              <Route path="/delete_car" element={<DeleteCar />} />
              <Route path="/add_car" element={<AddCar />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
