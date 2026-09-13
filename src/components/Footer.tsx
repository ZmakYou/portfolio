import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.social}>
        <a
          href="http://instagram.com/zmakyou"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={styles.iconInstagram}
        >
          <InstagramIcon size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/mattzmak/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.iconLinkedin}
        >
          <LinkedinIcon size={28} />
        </a>
      </nav>
    </footer>
  );
}
