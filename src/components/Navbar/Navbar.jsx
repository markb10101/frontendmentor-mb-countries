import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {

  const { theme, setTheme } = props;

  const themeJSX = theme === "light" ?
    <>
      <span className={styles.theme} onClick={() => setTheme("dark")}>
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </span>
    </>
    :
    <>
      <span className={styles.theme} onClick={() => setTheme("light")}>
        <FontAwesomeIcon icon={faSun} />
        <span>Light Mode</span>
      </span>
    </>

  const themeClass = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={`${styles.navContainer} ${themeClass}`}>
      <div><h1>Where in the world?</h1></div><div>{themeJSX}</div>

    </div>
  );
};

export default Navbar;
