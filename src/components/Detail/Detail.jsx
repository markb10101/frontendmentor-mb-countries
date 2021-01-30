import React from "react";
import styles from "./Detail.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Detail = (props) => {

  const { theme, countryDetails, setViewingDetails } = props;

  const themeClass = theme === "light" ? styles.light : styles.dark;

  const backButtonJSX = <div className={`${styles.backButton} ${themeClass}`} onClick={() => setViewingDetails(false)}>
    <FontAwesomeIcon icon={faArrowLeft} /><span className={styles.backText}>Back</span></div>;


  console.log(countryDetails);

  return (
    <>
      {backButtonJSX}

      <div className={styles.detailPanelContainer}>

        <div className={styles.countryFlag}>
        <img src={countryDetails.flag} alt={`Flag of ${countryDetails.name}`} />
        </div>
        <div className={styles.countryData}>

          <div className={styles.dataLeftCol}>
            <h2>{countryDetails.name}</h2>
            <p>Native Name: {countryDetails.nativeName}</p>
            <p>Population: {countryDetails.population}</p>
            <p>Region: {countryDetails.region}</p>
            <p>Sub-region: {countryDetails.subregion}</p>
            <p>Capital: {countryDetails.capital}</p>
          </div>
          <div className={styles.dataRightCol}>
          <p>Top Level Domain: xxxxx</p>
            <p>Currencies: xxxxx</p>
            <p>Languages: xxxxx</p>
            {/* <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
            <p>Currencies: {countryDetails.currencies}</p>
            <p>Languages: {countryDetails.languages}</p> */}
          </div>
        </div>
        {/* <div className={styles.dataLinks}>Border Countries: {countryDetails.borders}</div> */}


      </div>


    </>
  );
};

export default Detail;



