import styles from "./navBarHeader.module.css";
import React from "react";
import Link from "next/link";

type NavBarType = {
  isUserLoggedIn: boolean;
  onLogout: () => void;
  greeting: string;
};

const NavBar: React.FC<NavBarType> = ({
  isUserLoggedIn,
  onLogout,
  greeting,
}) => {
  return (
    <div className={styles.wrapper}>
      {isUserLoggedIn ? (
        <>
          <ul>
            <li>
              <Link href="/login">My questions</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/postQuestion">Post a new question</Link>
            </li>
          </ul>
          <ul>
            <li className={styles.name}>{greeting}</li>
          </ul>
          <ul>
            <li>
              <Link href="/login" onClick={onLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

const NavBarMobile = () => {
  return (
    <div className={styles.mobileWrapper}>
      <ul>
        <li>
          <a href="#">
            <img src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { NavBar, NavBarMobile };
