import React from "react";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Search = () => {
  return (
    <>
      <p>Search works</p>
      {searchIcon}
    </>
  );
};

export default Search;
