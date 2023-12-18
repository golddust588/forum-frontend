import styles from "./navBar.module.css";
import React from "react";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <a href="#">Tops</a>
        </li>
        <li>
          <a className={styles.borders} href="#">
            Bottoms
          </a>
        </li>
        <li>
          <a href="#">Sale</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
