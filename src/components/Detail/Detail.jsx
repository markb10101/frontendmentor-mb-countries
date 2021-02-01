import React from "react";
import styles from "./Detail.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Detail = (props) => {

  const { theme, countryDetails, setViewingDetails } = props;

  const themeClass = theme === "light" ? styles.light : styles.dark;

  const backButtonJSX = <div className={`${styles.backButton} ${themeClass}`} onClick={() => setViewingDetails(false)}>
    <FontAwesomeIcon icon={faArrowLeft} /><span className={styles.backText}>Back</span></div>;

  const currenciesJSX = countryDetails.currencies.map((curr, i) => curr.name).join(", ");

  const languagesJSX = countryDetails.languages.map((lang) => lang.name).join(", ");

  const borderButtonsJSX = countryDetails.borders.map((country) => <button className={`${themeClass}`}>{country}</button>);

  const numberWithSeparator = (num, sep) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }




  return (
    <>
      {backButtonJSX}

      <div className={styles.detailPanelContainer}>
        <div className={styles.countryFlag}>
          <img src={countryDetails.flag} alt={`Flag of ${countryDetails.name}`} />
        </div>
        <div className={`${styles.countryData} ${themeClass}`}><h2>{countryDetails.name}</h2>
          <div className={styles.countryDataUpperSection}>


            <div className={styles.dataLeftCol}>

              <p><span>Native Name: </span>{countryDetails.nativeName}</p>
              <p><span>Population: </span>{numberWithSeparator(countryDetails.population, ',')}</p>
              <p><span>Region: </span>{countryDetails.region}</p>
              <p><span>Sub-region: </span>{countryDetails.subregion}</p>
              <p><span>Capital: </span>{countryDetails.capital}</p>
            </div>
            <div className={styles.dataRightCol}>
              <p><span>Top Level Domain: </span>{countryDetails.topLevelDomain[0]}</p>
              <p><span>Currencies: </span>{currenciesJSX}</p>
              <p><span>Languages: </span>{languagesJSX}</p>
            </div>
          </div>
          <div className={styles.dataBorders}><span>Border Countries: </span>{borderButtonsJSX}</div>

        </div>

      </div>
    </>
  );
};

export default Detail;



