import React from "react";
import styles from "./Filter.module.scss";
import { useState } from 'react';

const Filter = (props) => {

  const { theme, regionFilter, setRegionFilter } = props;

  const [filterVisible, setFilterVisible] = useState(false); 

  const themeClass = theme === "light" ? styles.light : styles.dark;


  const handleFilter = () => {
    // ???? as search, ned to do as func passed as prop from app
  }

  const showFilterOptions = () => {
    // ???
  }

  return (
    <>
      <div className={`${styles.filter} ${themeClass}`}>
        <div>Filter by Region <span className={styles.arrow} onClick={() => showFilterOptions()}>^</span></div>

        <div className={filterVisible ? `${styles.filterOptions}` : `${styles.filterOptions} ${styles.hidden}`}>
          <div className={styles.region}>Africa</div>
          <div className={styles.region}>America</div>
          <div className={styles.region}>Asia</div>
          <div className={styles.region}>Europe</div>
          <div className={styles.region}>Oceania</div>
        </div>
      </div>
    </>
  );
};

export default Filter;
