import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppintments from './Pages/Dashboard/MyAppintments';
import Review from './Pages/Dashboard/Review';

function App() {
  return (
    <div className="mx-auto px-9 md:px-12 max-w-6xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route index element={<MyAppintments />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
