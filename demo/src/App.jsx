import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/signUp'; 
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import notFound from './pages/404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/s' element={<SignUp />} />
        <Route path='/l' element={<Login />} />
        <Route path='/c' element={<Contact/>} />
        <Route path='/a' element={<About />} />
        <Route path='/e' element={<notFound />} />
      </Routes>
    </Router>
  );
}

export default App;
