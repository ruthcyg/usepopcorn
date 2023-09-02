import { Box } from "../MovieList/Box.Component";
import { WatchedBox } from "../WatchMovieList/WatchedBox.component";

export function Main({ children }) {
	//const [query, setQuery] = useState("");
	//const [movies, setMovies] = useState(tempMovieData);
	//const [watched, setWatched] = useState(tempWatchedData);
	//const [isOpen1, setIsOpen1] = useState(true);
	//const [isOpen2, setIsOpen2] = useState(true);

	//const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	//const avgUserRating = average(watched.map((movie) => movie.userRating));
	//const avgRuntime = average(watched.map((movie) => movie.runtime));
	return (
		<main className="main">
			{/*<Box movies = {movies} />
			<WatchedBox /> 
    */}
			{children}
		</main>
	);
}
