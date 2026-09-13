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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/mattzmak/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.iconLinkedin}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
            <line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="7" cy="6.7" r="1.1" fill="currentColor" />
            <path
              d="M11 17v-4.2c0-1.6 1-2.6 2.4-2.6 1.3 0 2.1 0.9 2.1 2.6V17"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </nav>
    </footer>
  );
}
