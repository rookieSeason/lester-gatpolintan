import './App.css'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import BottomNav from './components/BottomNav';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='font-google overflow-x-hidden'>
      <NavBar />
      <Sidebar/>
      <BottomNav />
      <Home />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
