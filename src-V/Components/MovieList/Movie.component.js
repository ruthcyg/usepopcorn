import { useState } from "react";
//import { tempMovieData, tempWatchedData } from "/src/data";
import { tempMovieData } from "../../data";

 export function Movie({ movie }) {
	const [movies, setMovies] = useState(tempMovieData);
	return (
		<li>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}
