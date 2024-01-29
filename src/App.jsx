import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import BottomNav from './components/BottomNav';

function App() {

  return (
    <div className='font-google overflow-x-hidden'>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App
