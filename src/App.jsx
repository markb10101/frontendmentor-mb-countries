import Navbar from './components/Navbar';
import Search from './components/Search';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Detail from './components/Detail';
import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';

function App() {

  const [theme, setTheme] = useState("light");
  const [countriesArr, setCountriesArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [viewingDetails, setViewingDetails] = useState(false);
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    console.log("getting all countries on page mount");
    getCountries();
  }, [])

  useEffect(() => {
  }, [theme]);

  useEffect(() => {
    getCountries(searchTerm);
  }, [searchTerm, regionFilter]);

  const themeClass = theme === "light" ? styles.light : styles.dark;

  const getCountries = (searchTerm) => {
    const searchString = searchTerm !== "" ? `https://restcountries.eu/rest/v2/name/${searchTerm}` : `https://restcountries.eu/rest/v2/all`;
    fetch(searchString)
      .then((res) => res.json())
      .then((res) => {
        if (regionFilter) {
          const resFilteredByRegion = [...res].filter(country => country.region === regionFilter);
          setCountriesArr(resFilteredByRegion);
        } else {
          setCountriesArr(res);
        }

      })
      .catch((err) => {
        console.log(err);
      });
  }

  const renderDetailView = (numericCode) => {
    setViewingDetails(true);
    const filteredCountryArr = countriesArr.filter((country)=>country.numericCode===numericCode);
    setCountryDetails(filteredCountryArr[0]); 
  }

  const searchFilterRowJSX = viewingDetails ? null : (
    <div className={styles.searchFilterRow}>
      <div className={styles.searchContainer}>
        <Search theme={theme} getCountries={getCountries} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </div>
      <div className={styles.filterContainer}>
        <Filter theme={theme} setRegionFilter={setRegionFilter} regionFilter={regionFilter} />
      </div>
    </div>
  )

  const mainPageContentJSX = viewingDetails ? (
    <div className={styles.detailsContainer}>
      <Detail theme={theme} countryDetails={countryDetails} setViewingDetails={setViewingDetails} />
    </div>
  )
  : (
    <div className={styles.countriesContainer}>
      <Countries theme={theme} countriesArr={countriesArr} renderDetailView={renderDetailView} setViewingDetails={setViewingDetails} viewingDetails={viewingDetails} />
    </div>
  )

  return (

    <div className={`${styles.pageContainer} ${themeClass}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      {searchFilterRowJSX}
      {mainPageContentJSX}

    </div>

  );
}

export default App;
