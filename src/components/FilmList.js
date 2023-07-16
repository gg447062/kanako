'use client';
import styles from '../app/styles/work.module.css';
import films from '../lib/films.json';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
          <div className={styles.card} key={i}>
            <Image
              className={styles.image}
              src={film.Image}
              alt="thumbnail"
              width={1920}
              height={1080}
              onClick={() => handleClick(film.Title)}
            />
          </div>
        );
      })}
    </div>
  );
}
