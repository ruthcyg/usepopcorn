import { useEffect, useState } from "react";
import { tempMovieData, tempWatchedData } from "./data.js";
//import { Navbar } from "./Components/Navbar/Navbar.js"
import { NavBar } from "./Components/Navbar/Navbar.js";
import { Logo } from "./Components/Navbar/Logo.js";
import { Search } from "./Components/Navbar/Search.js";
import { NumResults } from "./Components/Navbar/NumberResult.js";

import { Main } from "./Components/MainMovie/Main.component.js";
import { Box } from "./Components/MovieList/Box.Component.js";
import { WatchedBox } from "./Components/WatchMovieList/WatchedBox.component.js";
import { MovieList } from "./Components/MovieList/MovieList.component.js";
import { WatchedSummary } from "./Components/WatchMovieList/WatchedSummary.component.js";
import { WatchedMovieList } from "./Components/WatchMovieList/WatchedMovieList.Component.js";
import StarRating from "./StarRating.js";

//const average = (arr) =>
//	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
	// const [query, setQuery] = useState("");
	const [movies, setMovies] = useState(tempMovieData);
	const [watched, setWatched] = useState(tempWatchedData);
	const KEY = "f84fc31d";
	// const [isOpen1, setIsOpen1] = useState(true);
	// const [isOpen2, setIsOpen2] = useState(true);

	// const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	// const avgUserRating = average(watched.map((movie) => movie.userRating));
	// const avgRuntime = average(watched.map((movie) => movie.runtime));
	useEffect(function () {
		async function fetchMovies() {
			const res = await fetch(
				`http://www.omdbapi.com/?apikey = ${KEY} &s=intersellar`
			);
			const data = await res.json();
			setMovies(data.Search)
		}
		fetchMovies()
	}, []);

	return (
		<>
			<StarRating />
			<NavBar>
				<Search />
				<NumResults movies={movies} />
			</NavBar>
			<Main>
				<Box>
					<MovieList movies={movies} />
				</Box>
				{/*	<WatchedBox /> */}

				<Box>
					<WatchedSummary watched={watched} />
					<WatchedMovieList watched={watched} />
				</Box>

				{/*
				<Box element={<MovieList movies={movies} />} />
				<Box
					element={
						<>
							<WatchedSummary watched={watched} />
							<WatchedMovieList watched={watched} />{" "}
						</>
					}
				/>
				*/}
			</Main>
		</>
	);
}
