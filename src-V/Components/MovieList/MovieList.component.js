import { useState } from "react";
//import { tempMovieData, tempWatchedData } from "/src/data";
import { tempMovieData } from "../../data";
import { Movie } from "./Movie.component";
export function MovieList({movies}) {
	//const [movies, setMovies] = useState(tempMovieData);
	return (
		<ul className="list">
			{movies?.map((movie) => (
				<Movie movie={movie} key={movie.imdbID} />
			))}
		</ul>
	);
}
