import styles from '../styles/work.module.css';
import FilmList from '@/components/FilmList';
export default function Films() {
  return (
    <article className={styles.article}>
      <FilmList></FilmList>
    </article>
  );
}
