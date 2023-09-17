import './App.scss';
import Navbar from '../src/components/Navbar/Navbar';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <>
      <div className={`main ${darkMode ? 'dark' : ''} relative overflow-hidden`}>
        <Navbar changeMode={changeMode} />
        <Home />
        <About />
        <Services />
        <Contact />
        <span onClick={() => window.scrollTo(0, 0)} className="max-lg:hidden lg:fixed bottom-7 cursor-pointer right-8 z-40 bg-black bg-opacity-50 text-white dark:bg-white dark:text-black dark:opacity-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </span>
      </div>
    </>
  );
}

AOS.init({
  once: false,
});
export default App;
