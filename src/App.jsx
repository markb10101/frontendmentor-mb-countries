import Navbar from './components/Navbar';
import Search from './components/Search';
import Filter from './components/Filter';
import Countries from './components/Countries';
import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
  }, [theme]);
  
  const themeClass = theme == "light" ? styles.light : styles.dark;

  return (

    <div className={`${styles.pageContainer} ${themeClass}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Search />
      <Filter />
      <Countries />
    </div>

  );
}

export default App;
