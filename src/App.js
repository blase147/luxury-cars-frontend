import {
  BrowserRouter as Router, Routes, Route, Outlet,
} from 'react-router-dom';
import NavigationBar from './components/navigation/navigation';
import './App.css';


const NavigationBarLayout = () => (
  <>
    <NavigationBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route element={<NavigationBarLayout />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;



const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route element={<NavigationBarLayout />} />
      </Routes>
    </Router>
  </div>
);