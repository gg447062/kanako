import styles from '../styles/films.module.css';
import Link from 'next/link';
import FilmList from '@/components/FilmList';
export default function Films() {
  return (
    <article className={styles.article}>
      <h1 className="pageTitle">Films</h1>
      <nav className={styles.nav}>
        <Link href={'#feature'}>Feature</Link>
        <Link href={'#16mm'}>16mm</Link>
        <Link href={'#shorts'}>Shorts</Link>
        <Link href={'#musicvideos'}>Music Videos</Link>
      </nav>
      <FilmList></FilmList>
    </article>
  );
}
