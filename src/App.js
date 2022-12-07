import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;