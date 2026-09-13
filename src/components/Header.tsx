"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
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
          width={60}
          height={60}
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
          <InstagramIcon size={20} cropped />
        </a>
        <a
          href="https://www.linkedin.com/in/mattzmak/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={20} cropped />
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
