'use client';
import styles from '../app/styles/work.module.css';
import films from '../lib/films.json';
import Image from 'next/image';
import { useState } from 'react';

function FilmItem({ film }) {
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
  const [current, setCurrent] = useState('feature');
  const feature = films.filter((film) => film.Category == 'Feature');
  const sixteen = films.filter((film) => film.Category == '16mm');
  const shorts = films.filter((film) => film.Category == 'Shorts');
  const musicVideos = films.filter((film) => film.Category == 'music video');
  const acting = films.filter((film) => film.Category == 'acting');

  function handleClick(id) {
    setCurrent(id);
  }

  return (
    <>
      <nav className={styles.nav}>
        <p
          className={current == 'feature' ? styles.navSelect : styles.navItem}
          onClick={() => handleClick('feature')}
        >
          Feature
        </p>
        <p
          className={current == '16mm' ? styles.navSelect : styles.navItem}
          onClick={() => handleClick('16mm')}
        >
          16mm
        </p>
        <p
          className={current == 'shorts' ? styles.navSelect : styles.navItem}
          onClick={() => handleClick('shorts')}
        >
          Shorts
        </p>
        <p
          className={
            current == 'musicvideos' ? styles.navSelect : styles.navItem
          }
          onClick={() => handleClick('musicvideos')}
        >
          Music Videos
        </p>
        <p
          className={current == 'acting' ? styles.navSelect : styles.navItem}
          onClick={() => handleClick('acting')}
        >
          Acting
        </p>
      </nav>
      {current == 'feature' && (
        <section id="feature" className={styles.feature}>
          <FilmItem film={feature[0]} />
        </section>
      )}
      {current == '16mm' && (
        <section id="16mm" className={styles.section}>
          <div className={styles.list}>
            {sixteen.map((el, i) => (
              <FilmItem key={i} film={el} />
            ))}
          </div>
        </section>
      )}
      {current == 'shorts' && (
        <section id="shorts" className={styles.section}>
          <div className={styles.list}>
            {shorts.map((el, i) => (
              <FilmItem key={i} film={el} />
            ))}
          </div>
        </section>
      )}
      {current == 'musicvideos' && (
        <section id="musicvideos" className={styles.section}>
          <div className={styles.list}>
            {musicVideos.map((el, i) => (
              <FilmItem key={i} film={el} />
            ))}
          </div>
        </section>
      )}
      {current == 'acting' && (
        <section id="acting" className={styles.section}>
          <div className={styles.actingList}>
            {acting.map((el, i) => (
              <FilmItem key={i} film={el} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
