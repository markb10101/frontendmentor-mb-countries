import React from "react";
import styles from "./Country.module.scss";

const Country = (props) => {

  const { countryData } = props;

  return (
    <>
      <div className={styles.countryCard}>
        <div className={styles.flagContainer}>
          <img src={countryData.flag} />
        </div>
        <div className={styles.cardText}>
          <h2>{countryData.name}</h2>
          <div><span className={styles.statisticType}>Population: </span><span className={styles.statistic}>{countryData.population}</span></div>
          <div><span className={styles.statisticType}>Region: </span><span className={styles.statistic}>{countryData.region}</span></div>
          <div><span className={styles.statisticType}>Capital: </span><span className={styles.statistic}>{countryData.capital}</span></div>
        </div>
      </div>
    </>
  );
};

export default Country;
