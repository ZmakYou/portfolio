import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "about — Matt Zmak Design",
};

export default function AboutPage() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />

      <div className={styles.content}>
        <div className={styles.headshot}>
          <Image
            src="/images/global/headshot.jpg"
            alt="Matt Zmak"
            fill
            sizes="270px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.text}>
          <h1 className={styles.title}>MZ_design</h1>
          <p>
            Hello. I am Matt Zmak—a passionate and creative designer who will
            never say no to a chocolate chip cookie. Over the past five years
            I’ve been fortunate enough to work with a variety of companies
            ranging from large scale organizations to boutique brands. But
            with each project that I am a part of, I bring confidence,
            strategic thinking, a high level of craft, and a collaborative
            spirit, with a special emphasis on consistency,
            deadline-orientation and clear communication.
          </p>

          <h2 className={styles.contactHeading}>contact</h2>
          <a href="mailto:matt.zmak@gmail.com" className={styles.email}>
            matt.zmak@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
