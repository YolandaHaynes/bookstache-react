import './App.css';
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
