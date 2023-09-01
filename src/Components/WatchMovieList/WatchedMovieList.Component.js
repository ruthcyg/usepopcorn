
import { WatchedMovie } from "./WatchedMovie.Component";

export function WatchedMovieList({ watched }) {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<WatchedMovie movie={movie} key={movie.imdbID} />
			))}
		</ul>
	);
}
