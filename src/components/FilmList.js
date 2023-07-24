'use client';
import styles from '../app/styles/work.module.css';
import films from '../lib/films.json';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function FilmLinks() {
  const noActing = films.filter((film) => film.Category != 'acting');
  return (
    <div className={styles.links}>
      {noActing.map((el, i) => {
        return (
          <Link href={`#${el.Title.split(' ')[0]}`} key={i}>
            {el.Title}
          </Link>
        );
      })}
    </div>
  );
}

export default function FilmList() {
  const noActing = films.filter((film) => film.Category != 'acting');
  const router = useRouter();

  function handleClick(url) {
    router.push(`work/${url}`);
  }

  return (
    <div className={styles.container}>
      {noActing.map((film, i) => {
        return (
          <div key={i} className={styles.wrapper}>
            <hr className={styles.hr}></hr>
            <div className={styles.card} id={film.Title.split(' ')[0]}>
              <div className={styles.info}>
                <p>{film.Title}</p>
              </div>
              <Image
                className={styles.image}
                src={film.Image}
                alt="thumbnail"
                width={1920}
                height={1080}
                onClick={() => handleClick(film.Title)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
