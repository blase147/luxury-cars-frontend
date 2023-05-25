import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import NavigationBar from './components/navigation/navigation';
import { Cars } from './components/cars/cars';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route element={<Cars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
