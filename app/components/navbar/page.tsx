import React from "react";
import styles from "./NavBar.module.css";
const NavBar = () => {
  // Your Navbar component implementation here
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.navitem}>Home</div>
      <div className={styles.navitem}>About</div>
      <div className={styles.navitem}>Blog</div>
    </div>
  );
};

export default NavBar;
