import { notFound } from "next/navigation";
import Image from "next/image";
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
            <p className={styles.involvement}>{project.involvement}</p>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
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
    </>
  );
}
