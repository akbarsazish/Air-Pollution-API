import { Routes, Route } from 'react-router-dom';
import './assets/style.css';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Details />} />
        </Routes>
    </div>
  );
}

export default App;
