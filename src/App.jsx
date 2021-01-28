import Navbar from './components/Navbar';
import Search from './components/Search';
import Filter from './components/Filter';
import Countries from './components/Countries';
import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';

function App() {

  const [theme, setTheme] = useState("light");
  const [countriesArr, setCountriesArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("all");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then((res) => res.json())
    .then((res) => {
      setCountriesArr(res);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  useEffect(() => {
  }, [theme]);

  useEffect(() => {
    getCountries(searchTerm);
  }, [searchTerm]);

  const themeClass = theme === "light" ? styles.light : styles.dark;

  const getCountries = (searchTerm) => {
    fetch(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
    .then((res) => res.json())
    .then((res) => {
      setCountriesArr(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (

    <div className={`${styles.pageContainer} ${themeClass}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className={styles.searchFilterRow}>
        <div className={styles.searchContainer}>
          <Search theme={theme} getCountries={getCountries} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </div>
        <div className={styles.filterContainer}>
          <Filter theme={theme} setRegionFilter={setRegionFilter} regionFilter={regionFilter} />
        </div>
      </div>
      <div className={styles.countriesContainer}>
        <Countries theme={theme} countriesArr={countriesArr} />
      </div>

    </div>

  );
}

export default App;
