import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import styles from "./header.module.css";

import Logo from "../../atoms/Logo/Logo";
import {
  NavBar,
  NavBarMobile,
} from "../../molecules/NavBarHeader/NavBarHeader";

const Header = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const savedCookie = cookie.get("jwt_token");

    if (savedCookie) {
      setUserLoggedIn(true);
    }
  }, []);

  const router = useRouter();

  const onLogout = () => {
    cookie.remove("jwt_token");
    // router.push("/login");
  };

  return (
    <header className={styles.wrapper}>
      <Logo />
      <div className={styles.rightNav}>
        <NavBar
          isUserLoggedIn={isUserLoggedIn}
          onLogout={onLogout}
          name={"Kazys"}
        />
      </div>
      <div className={styles.rightNavMobile}>
        <NavBarMobile />
      </div>
    </header>
  );
};

export default Header;
