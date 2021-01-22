import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {

  const { theme, setTheme } = props;

  const themeJSX = theme == "light" ?
    <>
      <span className={styles.themeIcon}>
        <FontAwesomeIcon icon={faMoon} onClick={() => setTheme("dark")} />
      </span>
      <span className={styles.themeText}>Dark Mode</span>
    </>
    :
    <>
      <span className={styles.themeIcon}>
        <FontAwesomeIcon icon={faSun} onClick={() => setTheme("light")} />
      </span>
      <span className={styles.themeText}>Light Mode</span>
    </>

const themeClass = theme == "light" ? styles.light : styles.dark;

  return (
    <div className={`${styles.navContainer} ${themeClass}`}>
      <div><h1>Where in the world?</h1></div><div>{themeJSX}</div>

    </div>
  );
};

export default Navbar;
