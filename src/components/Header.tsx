"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Matt Zmak Design">
        <Image
          src="/images/global/logo.png"
          alt="Matt Zmak Design"
          width={48}
          height={48}
          priority
        />
      </Link>

      <nav className={styles.nav}>
        <Link
          href="/"
          className={pathname === "/" ? styles.active : undefined}
        >
          work
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : undefined}
        >
          about
        </Link>
      </nav>

      <div className={styles.social}>
        <a
          href="http://instagram.com/zmakyou"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
      </div>

      <button
        type="button"
        className={styles.menuButton}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "+"}
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setOpen(false)}>
            work
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            about
          </Link>
          <div className={styles.mobileSocial}>
            <a
              href="http://instagram.com/zmakyou"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/mattzmak/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
