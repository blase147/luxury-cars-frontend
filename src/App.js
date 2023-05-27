import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigation/navigation';
import CarsDetails from './components/cars details/carDetails';
import Cars from './components/cars/cars';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/:id" element={<CarsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
