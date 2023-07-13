'use client';
import styles from './styles/home.module.css';
import Canvas from '@/components/Canvas';
import Overlay from '@/components/Overlay';
import { useState } from 'react';

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  function toggleOverlay() {
    setShowOverlay(!showOverlay);
  }
  return (
    <article className={styles.article}>
      <button className={styles.button} onClick={toggleOverlay}>
        {showOverlay ? 'hide' : 'show'}
      </button>
      {!showOverlay && (
        <div className={styles.article}>
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
        </div>
      )}
      {showOverlay && (
        <div>
          <video
            className={styles.videosAbsolute}
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
            className={styles.videosAbsolute}
            src={
              'https://res.cloudinary.com/dletnd7ha/video/upload/v1689270498/kanako-site/voyeur_aa5wgm.mp4'
            }
            muted
            autoPlay
            loop
            width={1200}
            height={800}
          ></video>
          <Overlay />
          <Canvas />
        </div>
      )}
    </article>
  );
}
