'use client';
import styles from './styles/home.module.css';
import FilmList from '@/components/FilmList';
import { FilmLinks } from '@/components/FilmList';

export default function Home() {
  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <h1>Kanako Pooknyw</h1>
        <h3>Director</h3>
      </section>
      <section className={styles.links}>
        <FilmLinks />
      </section>
      <section id="work">
        <FilmList></FilmList>
      </section>
      {/* <video
        className={styles.videos}
        src={
          'https://res.cloudinary.com/dletnd7ha/video/upload/v1689270479/kanako-site/chantal_fihnbe.mp4'
        }
        muted
        autoPlay
        loop
        width={1200}
        height={800}
      ></video> */}
      {/* <video
        className={styles.videos}
        src={
          'https://res.cloudinary.com/dletnd7ha/video/upload/v1689270498/kanako-site/voyeur_aa5wgm.mp4'
        }
        muted
        autoPlay
        loop
        width={1200}
        height={800}
      ></video> */}
    </article>
  );
}
