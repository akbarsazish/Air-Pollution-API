import { Routes, Route } from 'react-router-dom';
import './assets/style.css';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Air-Pollution-API/" element={<Home />} />
        <Route path="Air-Pollution-API/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
