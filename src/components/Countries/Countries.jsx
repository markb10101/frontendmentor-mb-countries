import React from "react";
import styles from "./Countries.module.scss";
import Country from "../Country/Country";

const Countries = (props) => {

  const { theme, countriesArr, renderDetailView, viewingDetails, setViewingDetails } = props;


  const countriesJSX = countriesArr.length ?  (countriesArr.map(countryData => <Country theme={theme} countryData={countryData} key={countryData.numericCode} renderDetailView={renderDetailView} viewingDetails={viewingDetails} setViewingDetails={setViewingDetails}/>))
                                              :
                                              (<p>No country matches your Search and Filter settings.</p>);

  return (
    <>
      <div className={styles.countryContainer}>

      {countriesJSX}

      </div>
    </>
  );
};

export default Countries;
