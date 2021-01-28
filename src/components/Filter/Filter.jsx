import React from "react";
import styles from "./Filter.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Filter = (props) => {

  const { theme, regionFilter, setRegionFilter } = props;

  const [filterVisible, setFilterVisible] = useState(false);
  const regionsArr = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const themeClass = theme === "light" ? styles.light : styles.dark;


  const handleFilter = (regionSelected) => {
    regionSelected !== regionFilter ? setRegionFilter(regionSelected) : setRegionFilter(null);
  }

  const showFilterOptions = () => {
    setFilterVisible(!filterVisible);
  }

  const filterOptionsJSX = (region) => (
    region !== regionFilter ? <li onClick={() => handleFilter(region)}>{region}</li> : 
      <li onClick={() => handleFilter(region)} className={styles.selected} >{region}</li>
  );



  return (
    <>
      <div className={`${styles.filter} ${themeClass}`}>
        <div>Filter by Region <span className={styles.arrow} onClick={() => showFilterOptions()}><FontAwesomeIcon icon={faChevronDown} /></span></div>
      </div>
      <div>
        <div className={filterVisible ? `${styles.filterOptions} ${themeClass}` : `${styles.filterOptions} ${styles.hidden} ${themeClass}`}>
          <ul>
            {regionsArr.map(filterOptionsJSX)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
