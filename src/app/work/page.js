import styles from '../styles/work.module.css';
import FilmList from '@/components/FilmList';
export default function Films() {
  return (
    <article className={styles.article}>
      <h1 className="pageTitle">Work</h1>
      <FilmList></FilmList>
    </article>
  );
}
