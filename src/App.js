//import { useState } from "react";
//import { tempMovieData, tempWatchedData } from "./data.js";
//import { Navbar } from "./Components/Navbar/Navbar.js"
import { NavBar } from "./Components/Navbar/Navbar.js";

import { Main } from "./Components/MainMovie/Main.component.js";

//const average = (arr) =>
//	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
	// const [query, setQuery] = useState("");
	// const [movies, setMovies] = useState(tempMovieData);
	// const [watched, setWatched] = useState(tempWatchedData);
	// const [isOpen1, setIsOpen1] = useState(true);
	// const [isOpen2, setIsOpen2] = useState(true);

	// const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	// const avgUserRating = average(watched.map((movie) => movie.userRating));
	// const avgRuntime = average(watched.map((movie) => movie.runtime));

	return (
		<>
			<NavBar />
			<Main />
		</>
	);
}

