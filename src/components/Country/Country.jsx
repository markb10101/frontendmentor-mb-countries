import React from "react";
import { Link } from "@reach/router";
import styles from "./Country.module.scss";

const Country = (props) => {

  const { theme, countryData, renderDetailView, viewingDetails, setViewingDetails } = props;

  const themeClass = theme === "light" ? styles.light : styles.dark;
  // todo
  // add commas to population number

  return (
    <>
      <div className={styles.linkContainer} onClick={() => renderDetailView(countryData.numericCode)} >
        <div className={`${styles.countryCard} ${themeClass}`}>
          <div className={styles.flagContainer}>
            <img src={countryData.flag} alt={`Flag of ${countryData.name}`} />
          </div>
          <div className={styles.cardText}>
            <h2>{countryData.name}</h2>
            <div><span className={styles.statisticType}>Population: </span><span className={styles.statistic}>{countryData.population}</span></div>
            <div><span className={styles.statisticType}>Region: </span><span className={styles.statistic}>{countryData.region}</span></div>
            <div><span className={styles.statisticType}>Capital: </span><span className={styles.statistic}>{countryData.capital}</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
