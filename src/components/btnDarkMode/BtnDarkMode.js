import React, { useEffect } from 'react';

import sunIcon from './sun.svg';
import moonIcon from './moon.svg';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { detectDarkMode } from '../../utils/detectDarkMode';
const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());
  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  };

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light';
      setDarkMode(newColorScheme);
    });
  }, [setDarkMode]);

  const btnNorm = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';
  return (
    <button className={darkMode === 'dark' ? btnActive : btnNorm} onClick={toggleDarkMode}>
      <img src={sunIcon} alt="Light mode" className="dark-mode-btn__icon" />

      <img src={moonIcon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
