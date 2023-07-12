import styles from '../app/styles/films.module.css';
import films from '../lib/films.json';
import Image from 'next/image';

function FilmItem(film) {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{film.Title}</h4>
      {/* {film.Video && (
        <div dangerouslySetInnerHTML={{ __html: film.Video }}></div>
      )} */}
      {film.Image && (
        <Image
          className={styles.image}
          src={film.Image}
          alt="thumbnail"
          width={1920}
          height={1080}
        />
      )}
      {film.Description && <p>{film.Description}</p>}
      {film.Time && <p>{film.Time}</p>}
      {film.Place && <p>{film.Place}</p>}
      {film.Year && <p>{film.Year}</p>}
    </div>
  );
}

export default function FilmList() {
  const feature = films.filter((film) => film.Category == 'Feature');
  const sixteen = films.filter((film) => film.Category == '16mm');
  const shorts = films.filter((film) => film.Category == 'Shorts');
  const musicVideos = films.filter((film) => film.Category == 'music video');

  return (
    <>
      <section id="feature" className={styles.section}>
        <h3>Feature</h3>
        <div className={styles.list}>{feature.map((el) => FilmItem(el))}</div>
      </section>
      <section id="16mm" className={styles.section}>
        <h3>16mm</h3>
        <div className={styles.list}>{sixteen.map((el) => FilmItem(el))}</div>
      </section>
      <section id="shorts" className={styles.section}>
        <h3>Shorts</h3>
        <div className={styles.list}>{shorts.map((el) => FilmItem(el))}</div>
      </section>
      <section id="musicvideos" className={styles.section}>
        <h3>Music Videos</h3>
        <div className={styles.list}>
          {musicVideos.map((el) => FilmItem(el))}
        </div>
      </section>
    </>
  );
}
