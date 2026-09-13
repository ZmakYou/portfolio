import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import styles from "./project.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Matt Zmak Design` : "Matt Zmak Design" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <>
      <section
        className={styles.hero}
        style={{
          backgroundColor: project.heroColor,
          backgroundImage: `url(${project.heroImage})`,
        }}
      >
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.category}>{project.category}</p>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
          <div className={styles.heroRight}>
            {project.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p>{project.involvement}</p>
          </div>
        </div>
      </section>

      <section
        className={styles.gallery}
        style={
          project.extraGalleryGapVw
            ? { marginTop: `calc(3vw + ${project.extraGalleryGapVw}vw)` }
            : undefined
        }
      >
        {project.gallery.map((img, i) => (
          <div key={i} className={styles.galleryItem}>
            <Image
              src={img.src}
              alt={`${project.title} — image ${i + 1}`}
              width={img.width}
              height={img.height}
              sizes="100vw"
              className={styles.galleryImage}
            />
          </div>
        ))}
      </section>

      <section className={styles.pagination}>
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}`}
            className={`${styles.paginationLink} ${styles.paginationPrev}`}
          >
            <svg
              className={styles.paginationIcon}
              viewBox="0 0 9 16"
              fill="none"
            >
              <polyline points="7.3,14.7 2.5,8 7.3,1.2" />
            </svg>
            <h2 className={styles.paginationTitle}>{prevProject.title}</h2>
          </Link>
        ) : (
          <span />
        )}
        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className={`${styles.paginationLink} ${styles.paginationNext}`}
          >
            <h2 className={styles.paginationTitle}>{nextProject.title}</h2>
            <svg
              className={styles.paginationIcon}
              viewBox="0 0 9 16"
              fill="none"
            >
              <polyline points="1.6,1.2 6.5,7.9 1.6,14.7" />
            </svg>
          </Link>
        ) : (
          <span />
        )}
      </section>
    </>
  );
}
