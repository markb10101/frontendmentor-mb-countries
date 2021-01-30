import React from "react";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Search = (props) => {

  const { theme, searchTerm, setSearchTerm, getCountries } = props;

  const themeClass = theme === "light" ? styles.light : styles.dark;

  const searchIconJSX = <span className={styles.searchIcon} onClick={()=>getCountries(searchTerm)}><FontAwesomeIcon icon={faSearch} /></span>;

  const placeholderJSX = searchTerm ? `${searchTerm}` : `Search for a country`;

  return (
    <>
      <form className={`${styles.search} ${themeClass}`}>
        {searchIconJSX}<input type='text' onInput={e => setSearchTerm(e.target.value)} placeholder={placeholderJSX}/>
        </form>
    </>
  );
};

export default Search;
