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
        <div className={`${styles.countryData} ${themeClass}`}>
          <div className={styles.countryDataUpperSection}>


            <div className={styles.dataLeftCol}>
              <h2>{countryDetails.name}</h2>
              <p><span>Native Name: </span>{countryDetails.nativeName}</p>
              <p><span>Population: </span>{countryDetails.population}</p>
              <p><span>Region: </span>{countryDetails.region}</p>
              <p><span>Sub-region: </span>{countryDetails.subregion}</p>
              <p><span>Capital: </span>{countryDetails.capital}</p>
            </div>
            <div className={styles.dataRightCol}>
              <p><span>Top Level Domain: </span>xxxxx</p>
              <p><span>Currencies: </span>xxxxx</p>
              <p><span>Languages: </span>xxxxx</p>
              {/* <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
            <p>Currencies: {countryDetails.currencies}</p>
            <p>Languages: {countryDetails.languages}</p> */}
            </div>
          </div>

          {/* <div className={styles.dataLinks}>Border Countries: {countryDetails.borders}</div> */}
          <div className={styles.dataBorders}><span>Border Countries: </span>xxxxxx</div>

        </div>

      </div>
    </>
  );
};

export default Detail;



