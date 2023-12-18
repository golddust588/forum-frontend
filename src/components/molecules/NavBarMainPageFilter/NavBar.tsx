import styles from "./navBar.module.css";
import React from "react";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <a href="#">All questions</a>
        </li>
        <li>
          <a className={styles.borders} href="#">
            Answered
          </a>
        </li>
        <li>
          <a href="#">Most popular</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
