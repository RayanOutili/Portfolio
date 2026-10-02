import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import './styles/tailwind.css';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact'
import { useEffect } from 'react';


const App = () => {

  const isDarkModeEnabled = () => {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  };

  // choix mémorisé s'il existe, sinon thème du système
  const savedTheme = () => {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  };

  const userPrefersDarkMode = savedTheme() ? savedTheme() === 'dark' : isDarkModeEnabled();
  const [isDarkMode, setIsDarkMode] = useState(userPrefersDarkMode);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) { }
  };

  // le fond de la page (body) suit aussi le thème
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const onMove = e => {
      cursor.style.top = (e.pageY - 20) + "px";
      cursor.style.left = (e.pageX - 20) + "px";
    };

    // délégation : marche aussi pour les liens ajoutés après le premier rendu
    const onOver = e => {
      if (e.target.closest("a, .link")) cursor.classList.add("red");
    };
    const onOut = e => {
      if (e.target.closest("a, .link")) cursor.classList.remove("red");
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);


  return (
    <>
      <BrowserRouter>
        <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
          <Menu toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<><Home /><Experiences /><Projects /><Contact /><Footer /></>} />
            <Route path="/Home" element={<><Home /><Experiences /><Projects /><Contact /><Footer /></>} />
            <Route path="/About" element={<About />} />
            <Route path="/Experiences" element={<Experiences />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Footer" element={<><Contact /> <Footer /></>} />
          </Routes>
        </div>
      </BrowserRouter>
      <div className='cursor'></div>
    </>
  );
};

export default App;
