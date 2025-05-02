import { useState } from "react";
import Image from "next/image";
import styles from "../../index.module.css";
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.frameParent}>
        <div className={styles.logo1Parent}>
          <Image
            className={styles.logo1Icon}
            width={127}
            height={50}
            alt="Al Noor HMS"
            src="/Images/Finlogo.png"
          />
          <nav
            className={`${styles.navMenu} ${
              mobileMenuOpen ? styles.navMenuOpen : ""
            }`}
          >
            <ul>
              <li>
                <a href="#home" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#rooms">Rooms</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className={styles.mobileOnly}>
                <a href="#logout">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.frameGroup}>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com/alnoorhotels" aria-label="Twitter">
              <Image
                className={styles.socialIcon}
                width={19}
                height={19}
                alt="Twitter"
                src="/Icons/Twitter 1.svg"
              />
            </a>
            <a href="https://facebook.com/alnoorhotels" aria-label="Facebook">
              <Image
                className={styles.socialIcon}
                width={19}
                height={19}
                alt="Facebook"
                src="/Icons/Facebook 1.svg"
              />
            </a>
            <a href="https://instagram.com/alnoorhotels" aria-label="Instagram">
              <Image
                className={styles.socialIcon}
                width={19}
                height={19}
                alt="Instagram"
                src="/Icons/Instagram 1.svg"
              />
            </a>
          </div>
          <div className={styles.logoutWrapper}>
            <a href="#contact" className={styles.logoutBtn}>
              Contact Us
            </a>
          </div>
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`${styles.menuBar} ${
                mobileMenuOpen ? styles.open : ""
              }`}
            ></span>
            <span
              className={`${styles.menuBar} ${
                mobileMenuOpen ? styles.open : ""
              }`}
            ></span>
            <span
              className={`${styles.menuBar} ${
                mobileMenuOpen ? styles.open : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
