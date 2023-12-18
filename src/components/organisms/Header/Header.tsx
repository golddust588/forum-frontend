import React from "react";
import styles from "./header.module.css";

import Logo from "../../atoms/Logo/Logo";
import {
  NavBar,
  NavBarMobile,
} from "../../molecules/NavBarHeader/NavBarHeader";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <div className={styles.rightNav}>
        <NavBar isLoggedIn={true} name={"Kazys"} />
      </div>
      <div className={styles.rightNavMobile}>
        <NavBarMobile />
      </div>
    </header>
  );
};

export default Header;
