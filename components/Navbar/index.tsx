/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

import styles from "./Navbar.module.scss";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps): JSX.Element => {
  const [open, setIsOpen] = useState(true);

  return (
    <nav className={styles.container}>
      <div className={styles.navContainer}>
        <Link href="/" passHref>
          <img
            style={{ cursor: "pointer" }}
            src="/Logo.png"
            alt="Aarohan Logo"
            className={styles.logo}
            height={48}
          />
        </Link>

        <div className={open ? styles.navigation : styles.open}>
          <div className={styles.navLinks}>
            <div className={styles.navItem}>
              <Link href="#Home" passHref>
                <p className={styles.text}>Home</p>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="#WhyReva" passHref>
                <p className={styles.text}>Why</p>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="#Product" passHref>
                <p className={styles.text}>Product</p>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="#Efficacy" passHref>
                <p className={styles.text}>Efficacy</p>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="#Gallery" passHref>
                <p className={styles.text}>Gallery</p>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="#AboutUs" passHref>
                <p className={styles.text}>About us</p>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="#ContactUs" passHref>
                <p className={styles.text}>Contact</p>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.navColapse} onClick={() => setIsOpen(!open)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
