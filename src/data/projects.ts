export type Project = {
  slug: string;
  title: string;
  category: string;
  heroColor: string;
  heroImage: string;
  homeImage: string;
  paragraphs: string[];
  involvement: string;
  /** Ordered gallery; a video item can sit anywhere and gets the same spacing as images. */
  gallery: GalleryItem[];
};

export type GalleryItem =
  | { src: string; width: number; height: number }
  | { video: { webm: string; poster?: string; autoplayLoop?: boolean } };

export const projects: Project[] = [
  {
    slug: "cvisualidentity",
    title: "C_visual identity",
    category: "branding + production",
    heroColor: "#939DBC",
    heroImage: "/images/work/cvisualidentity/hero.png",
    homeImage: "/images/home/cvisualidentity.png",
    paragraphs: [
      "In 2023, Colliers underwent a brand enhancement introducing a handful of new colours, assets, motion graphics, and styles that were created to uplift the brand and give it a slight refresh. Through experimentation and pushing the limits of the new visual identity, assets were created to be used company wide and help employees through the initial transition.",
    ],
    involvement:
      "involvement: art direction, layout, typography, photo editing, production, templating",
    gallery: [
      {
        video: {
          webm: "/videos/cvisualidentity.webm",
          poster: "/videos/cvisualidentity-poster.jpg",
        },
      },
      { src: "/images/work/cvisualidentity/gallery-01.png", width: 1600, height: 1200 },
      { src: "/images/work/cvisualidentity/gallery-02.png", width: 1600, height: 1200 },
      { src: "/images/work/cvisualidentity/gallery-03.png", width: 1600, height: 1200 },
      { src: "/images/work/cvisualidentity/gallery-04.png", width: 1600, height: 1200 },
      { src: "/images/work/cvisualidentity/gallery-05.png", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "thannualreport",
    title: "TH_annual report",
    category: "editorial",
    heroColor: "#665769",
    heroImage: "/images/work/thannualreport/hero.jpg",
    homeImage: "/images/home/thannualreport.jpg",
    paragraphs: [
      "Toronto Hydro’s 2021 annual report was designed leveraging the theme of “Utility of The Future”— powering transformation. The challenge was to distil the data and analysis regarding Toronto Hydro’s operations and financial performance in an easy and impactful manner.",
    ],
    involvement:
      "involvement: principal designer, layout, typography, photo editing, art direction, iconography",
    gallery: [
      { src: "/images/work/thannualreport/gallery-01.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thannualreport/gallery-02.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thannualreport/gallery-03.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thannualreport/gallery-04.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thannualreport/gallery-05.jpg", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "abmovetofeel",
    title: "AB_move to feel",
    category: "website + digital design",
    heroColor: "#BCB3B2",
    heroImage: "/images/work/abmovetofeel/hero.jpg",
    homeImage: "/images/home/abmovetofeel.jpg",
    paragraphs: [
      "Allison Bradley is a dancer, choreographer, and educator. She came to me to help build her online presence and help design a website for her with the goal of helping her pivot her career into a new direction.",
      "I used an editorial approach by layering imagery with textures and pops of Allison’s signature red to capture her new brand foundation and personal belief of “Move to Feel”— building off people's truths to unlock authentic human connection — creating genuine shared experiences that can be felt across different outlets.",
    ],
    involvement: "involvement: layout, digital design, typography, photo editing",
    gallery: [
      { src: "/images/work/abmovetofeel/gallery-01.png", width: 1600, height: 1200 },
      { src: "/images/work/abmovetofeel/gallery-02.png", width: 1600, height: 1200 },
      { src: "/images/work/abmovetofeel/gallery-03.png", width: 1600, height: 1200 },
      { src: "/images/work/abmovetofeel/gallery-04.png", width: 1600, height: 1200 },
      { src: "/images/work/abmovetofeel/gallery-05.png", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "rcontentcreation",
    title: "R_content creation",
    category: "digital design + art direction",
    heroColor: "#9A8EA2",
    heroImage: "/images/work/rcontentcreation/hero.jpg",
    homeImage: "/images/home/rcontentcreation.jpg",
    paragraphs: [
      "The main task of this on-going project was to unify and strengthen Riverse’s social platforms. Previously this popular Toronto-based Pop/R&B music group didn’t have a strong visual presence on their social channels, which provided me with the opportunity to develop a unique graphic language that properly represented the group and stood out amongst the noise on a variety of platforms.",
      "Different treatments were used depending on the content and channel but always played into the group’s bold and energetic personalities.",
    ],
    involvement:
      "involvement: principal designer, layout, typography, photo editing, art direction, motion graphics",
    gallery: [
      { src: "/images/work/rcontentcreation/gallery-01.jpg", width: 1600, height: 1200 },
      { src: "/images/work/rcontentcreation/gallery-02.jpg", width: 1600, height: 1200 },
      { src: "/images/work/rcontentcreation/gallery-03.jpg", width: 1600, height: 1200 },
      { src: "/images/work/rcontentcreation/gallery-04.jpg", width: 1600, height: 1200 },
      {
        video: {
          webm: "/videos/rcontentcreation.webm",
        },
      },
    ],
  },
  {
    slug: "thutilityofthefuture",
    title: "TH_utility of the future",
    category: "editorial",
    heroColor: "#514B52",
    heroImage: "/images/work/thutilityofthefuture/hero.jpg",
    homeImage: "/images/home/thutilityofthefuture.jpg",
    paragraphs: [
      "Developed for the Toronto Hydro B.o.D and Toronto’s City Council, the Utility of the Future Report was created to share the future ambitions and roadmap of the organization.",
      "Due to the subject matter of the report the goal was to create a bold and future forward design that not only captured the personality and theme of the report but pushed Toronto Hydro’s brand into a new era.",
    ],
    involvement:
      "involvement: principal designer, layout, typography, photo editing, art direction, accessible design",
    gallery: [
      { src: "/images/work/thutilityofthefuture/gallery-01.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thutilityofthefuture/gallery-02.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thutilityofthefuture/gallery-03.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thutilityofthefuture/gallery-04.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thutilityofthefuture/gallery-05.jpg", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "mzalbumartwork",
    title: "MZ_album artwork",
    category: "digital design",
    heroColor: "#787878",
    heroImage: "/images/work/mzalbumartwork/hero.jpg",
    homeImage: "/images/home/mzalbumartwork.jpg",
    paragraphs: [
      "Music is a powerful tool and it has the ability to move people both physically and emotionally. It is one of my favourite past times and I have a passion for bringing the sounds, tones, and words to life using visual elements to create designs that speak to the music.",
    ],
    involvement:
      "involvement: principal designer, layout, typography, photo editing, art direction, ideation",
    gallery: [
      { src: "/images/work/mzalbumartwork/gallery-01.jpg", width: 1600, height: 1200 },
      { src: "/images/work/mzalbumartwork/gallery-02.jpg", width: 1600, height: 1200 },
      { src: "/images/work/mzalbumartwork/gallery-03.jpg", width: 1600, height: 1200 },
      { src: "/images/work/mzalbumartwork/gallery-04.jpg", width: 1600, height: 1200 },
      { src: "/images/work/mzalbumartwork/gallery-05.jpg", width: 1600, height: 1200 },
      { src: "/images/work/mzalbumartwork/gallery-06.jpg", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "auallynewsletter",
    title: "AU_ally newsletter",
    category: "layout + typography",
    heroColor: "#315E61",
    heroImage: "/images/work/auallynewsletter/hero.jpg",
    homeImage: "/images/home/auallynewsletter.jpg",
    paragraphs: [
      "Alectra challenged me to re-design their “ally” newsletter — a quarterly document targeted towards Alectra Utilities’ stakeholders.",
      "The result was a collection of tailored documents that targeted each service-territory appropriately. Through the use of colour, photography and visual treatments, the “ally” newsletter was able to deliver dense information in a clear and simple manner.",
    ],
    involvement:
      "involvement: principal designer, layout, digital design, typography, photo editing, art direction",
    gallery: [
      { src: "/images/work/auallynewsletter/gallery-01.jpg", width: 1600, height: 1200 },
      { src: "/images/work/auallynewsletter/gallery-02.jpg", width: 1600, height: 1200 },
      { src: "/images/work/auallynewsletter/gallery-03.jpg", width: 1600, height: 1200 },
      { src: "/images/work/auallynewsletter/gallery-04.jpg", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "mzfilmtitlesequence",
    title: "MZ_film title sequence",
    category: "illustration + motion graphics",
    heroColor: "#CDB07F",
    heroImage: "/images/work/mzfilmtitlesequence/hero.jpg",
    homeImage: "/images/home/mzfilmtitlesequence.png",
    paragraphs: [
      "Not all movies have an opening sequence ‐ the challenge was to design an intro credit reel for the DC film Wonder Woman.",
      "The project was built using hand crafted assets and drawing inspiration from the movie itself. Golds, deep reds, rhythmic music and fiery embers help build the dynamic sequence to highlight the powerful essence of Diana, princess of the Thimescira.",
    ],
    involvement:
      "involvement: illustrator, motion designer, video editor, typography, art direction",
    gallery: [
      { src: "/images/work/mzfilmtitlesequence/gallery-01.png", width: 1600, height: 1200 },
      { src: "/images/work/mzfilmtitlesequence/gallery-02.jpg", width: 1600, height: 1200 },
      { src: "/images/work/mzfilmtitlesequence/gallery-03.jpg", width: 1600, height: 1200 },
      { src: "/images/work/mzfilmtitlesequence/gallery-04.jpg", width: 1600, height: 1200 },
      {
        video: {
          webm: "/videos/mzfilmtitlesequence.webm",
        },
      },
    ],
  },
  {
    slug: "thsocialmedia",
    title: "TH_social media",
    category: "digital design",
    heroColor: "#80A6A0",
    heroImage: "/images/work/thsocialmedia/hero.jpg",
    homeImage: "/images/home/thsocialmedia.jpg",
    paragraphs: [
      "One of my objectives at Toronto Hydro was to create a visual system for the organization’s social media channels that captured our brand’s personality and unified our platforms.",
      "Photography, iconography and typography have all been carefully selected and crafted to maintain a consistent brand tone across all platforms.",
    ],
    involvement:
      "involvement: principal designer, layout, typography, photo editing, art direction, iconography, motion graphics, campaign development",
    gallery: [
      { src: "/images/work/thsocialmedia/gallery-01.jpg", width: 1600, height: 1200 },
      { src: "/images/work/thsocialmedia/gallery-02.jpg", width: 1600, height: 1200 },
      {
        video: {
          webm: "/videos/thsocialmedia-1.webm",
          autoplayLoop: true,
        },
      },
      { src: "/images/work/thsocialmedia/gallery-03.jpg", width: 1600, height: 1200 },
      {
        video: {
          webm: "/videos/thsocialmedia-2.webm",
          autoplayLoop: true,
        },
      },
      { src: "/images/work/thsocialmedia/gallery-04.jpg", width: 1600, height: 1200 },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
