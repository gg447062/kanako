import Canvas from '@/components/Canvas';
import styles from './styles/home.module.css';
import Image from 'next/image';

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
      <Image
        className={styles.imageOne}
        src="/topp.png"
        alt="abstract-shape"
        width={1200}
        height={600}
      ></Image>
      <Image
        className={styles.imageTwo}
        src="/_middle.png"
        alt="abstract-shape"
        width={1200}
        height={600}
      ></Image>
      <Image
        className={styles.imageThree}
        src="/_bottom.png"
        alt="abstract-shape"
        width={1200}
        height={600}
      ></Image>
    </article>
  );
}
