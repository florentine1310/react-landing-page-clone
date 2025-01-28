import logo from '../../images/hagrid.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.logo}>
            <a href="/">
              <img src={logo} alt="Hagrid" />
            </a>
          </li>
          <li className={styles.navItems}>
            <button className={styles.greyButton} href="/">
              Integrations
            </button>
          </li>
          <li className={styles.navItems}>
            <button className={styles.greyButton} href="/">
              Pricing
            </button>
          </li>
          <li className={styles.navItems}>
            <button className={styles.greyButton} href="/">
              Login
            </button>
          </li>
          <li className={styles.navItems}>
            <button className={styles.blackButton} href="/">
              Try for Free
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
