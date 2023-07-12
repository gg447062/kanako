import Canvas from '@/components/Canvas';
import styles from './styles/home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <article className={styles.article}>
      <Image
        className={styles.images}
        src={'/image20.png'}
        alt="logo"
        width={1200}
        height={800}
      ></Image>
      <Image
        className={styles.images}
        src={'/image5.png'}
        alt="logo"
        width={1200}
        height={800}
      ></Image>
      <Canvas />
    </article>
  );
}
