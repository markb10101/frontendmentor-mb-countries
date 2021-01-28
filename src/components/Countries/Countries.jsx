import React from "react";
import styles from "./Countries.module.scss";
import Country from "../Country/Country";

const Countries = (props) => {

  const { theme, countriesArr } = props;

  const themeClass = theme === "light" ? styles.light : styles.dark;

  const countriesJSX = countriesArr.length ? countriesArr.map(countryData => <Country countryData={countryData}/>) : <p>Nothing returned</p>;

  return (
    <>
      <div className={`${styles.countryContainer} ${themeClass}`}>

      {countriesJSX}

      </div>
    </>
  );
};

export default Countries;
