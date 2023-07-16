'use client';
import styles from './styles/home.module.css';

export default function Home() {
  return (
    <article className={styles.article}>
      <video
        className={styles.videos}
        src={
          'https://res.cloudinary.com/dletnd7ha/video/upload/v1689270479/kanako-site/chantal_fihnbe.mp4'
        }
        muted
        autoPlay
        loop
        width={1200}
        height={800}
      ></video>
      <video
        className={styles.videos}
        src={
          'https://res.cloudinary.com/dletnd7ha/video/upload/v1689270498/kanako-site/voyeur_aa5wgm.mp4'
        }
        muted
        autoPlay
        loop
        width={1200}
        height={800}
      ></video>
    </article>
  );
}
