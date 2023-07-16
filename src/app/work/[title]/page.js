import FilmDetail from '@/components/FilmDetail';
import films from '../../../lib/films.json';

function getFilm(title) {
  return films.filter((film) => film.Title == decodeURI(title))[0];
}

export default function Film({ params }) {
  const film = getFilm(params.title);

  return <FilmDetail film={film} />;
}
