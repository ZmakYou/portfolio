"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isWorkActive = pathname === "/" || pathname.startsWith("/work/");

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const closeOnDesktop = () => {
      if (window.innerWidth >= 800) setOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${open ? styles.headerOpen : ""}`}>
      <Link
        href="/"
        className={styles.logo}
        aria-label="Matt Zmak Design"
        onClick={() => setOpen(false)}
      >
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
          className={isWorkActive ? styles.active : undefined}
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
        className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav}>
          <Link
            href="/"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            work
          </Link>
          <Link
            href="/about"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            about
          </Link>
        </nav>
        <div className={styles.mobileSocial}>
          <a
            href="http://instagram.com/zmakyou"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            tabIndex={open ? 0 : -1}
          >
            <InstagramIcon size={25} cropped />
          </a>
          <a
            href="https://www.linkedin.com/in/mattzmak/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            tabIndex={open ? 0 : -1}
          >
            <LinkedinIcon size={25} cropped />
          </a>
        </div>
      </div>
    </header>
  );
}
