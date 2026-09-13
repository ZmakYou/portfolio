"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./Home.module.css";

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className={styles.hero}>
      <div
        className={styles.bgLayer}
        style={{
          backgroundImage: "url(/images/global/background-with-logo.jpg)",
          backgroundPosition: "18.5% 66.4%",
          opacity: hovered ? 0 : 1,
        }}
      />
      {projects.map((p) => (
        <div
          key={p.slug}
          className={styles.bgLayer}
          style={{
            backgroundImage: `url(${p.homeImage})`,
            opacity: hovered === p.slug ? 0.25 : 0,
          }}
        />
      ))}

      <ul className={styles.list}>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              onMouseEnter={() => setHovered(p.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
