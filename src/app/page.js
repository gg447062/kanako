'use client';
import styles from './styles/home.module.css';
import Link from 'next/link';
import Image from 'next/image';

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
      <Link href={'/work'}>
        <Image
          src={
            'https://res.cloudinary.com/dletnd7ha/image/upload/v1689270475/kanako-site/logo_vvzzmw.png'
          }
          alt="logo"
          width={200}
          height={200}
          className={styles.image}
        ></Image>
      </Link>
    </article>
  );
}
