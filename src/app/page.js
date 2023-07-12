import Canvas from '@/components/Canvas';
import styles from './styles/home.module.css';

export default function Home() {
  return (
    <article className={styles.article}>
      <video
        className={styles.videos}
        src={'/chantal.mp4'}
        muted
        autoPlay
        loop
        width={1200}
        height={800}
      ></video>
      <video
        className={styles.videos}
        src={'voyeur.mp4'}
        muted
        autoPlay
        loop
        width={1200}
        height={800}
      ></video>
      {/* <Canvas /> */}
    </article>
  );
}
