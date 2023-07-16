import styles from '../app/styles/detail.module.css';
import Image from 'next/image';

export default function FilmDetail({ film }) {
  return (
    <div className={styles.container}>
      {film.Image && (
        <Image
          className={styles.image}
          src={film.Image}
          alt="thumbnail"
          width={1920}
          height={1080}
        />
      )}
      <div className={styles.info}>
        <h4 className={styles.title}>{film.Title}</h4>
        {film.Year && film.Time && (
          <p>
            {film.Year} {film.Time}
          </p>
        )}
        {film.Place && <p>{film.Place}</p>}
        {film.Description && <p>{film.Description}</p>}
      </div>
    </div>
  );
}
