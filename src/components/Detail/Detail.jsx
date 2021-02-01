import React from "react";
import styles from "./Detail.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Detail = (props) => {

  const { theme, countryDetails, setViewingDetails, renderDetailView } = props;

  const themeClass = theme === "light" ? styles.light : styles.dark;

  const backButtonJSX = <div className={`${styles.backButton} ${themeClass}`} onClick={() => setViewingDetails(false)}>
    <FontAwesomeIcon icon={faArrowLeft} /><span className={styles.backText}>Back</span></div>;

  const currenciesJSX = countryDetails.currencies.map((curr, i) => curr.name).join(", ");
  const languagesJSX = countryDetails.languages.map((lang) => lang.name).join(", ");

  const [borderNamesArr, setBorderNamesArr] = useState([]);
  const [borderNumericCodeArr, setBorderNumericCodeArr] = useState([]);

  const numberWithSeparator = (num, sep) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }

  useEffect(()=>{   

    setBorderNamesArr([]);
    setBorderNumericCodeArr([]);

    countryDetails.borders.forEach((alpha3Code) => {
      fetch(`https://restcountries.eu/rest/v2/alpha?codes=${alpha3Code}`)
      .then((res) => res.json())
      .then((res) => {
        setBorderNamesArr(borderNamesArr => borderNamesArr.concat(res[0].name));
        setBorderNumericCodeArr(borderNumericCodeArr => borderNumericCodeArr.concat(res[0].numericCode))
      })
      .catch((err) => {
        console.log(err);
      });
    });
  },[countryDetails])

  const borderCountriesJSX = borderNamesArr.map((countryName,index) => <button onClick={() => renderDetailView(borderNumericCodeArr[index])} className={`${themeClass}`}>{countryName}</button>);

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
          <div className={styles.borderTitle}>Border Countries:</div><div className={styles.dataBorders}>{borderCountriesJSX}</div>

        </div>

      </div>
    </>
  );
};

export default Detail;



