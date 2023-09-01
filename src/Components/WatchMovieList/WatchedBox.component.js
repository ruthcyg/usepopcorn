import { useState } from "react";
import { tempWatchedData } from "../../data";
import { WatchedMovieList } from "./WatchedMovieList.Component";
import { WatchedSummary } from "./WatchedSummary.component";


const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
export function WatchedBox() {
	const [watched, setWatched] = useState(tempWatchedData);
	//const [isOpen1, setIsOpen1] = useState(true);
	const [isOpen2, setIsOpen2] = useState(true);

	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));
	return (
		<div className="box">
			<button
				className="btn-toggle"
				onClick={() => setIsOpen2((open) => !open)}
			>
				{isOpen2 ? "–" : "+"}
			</button>
			{isOpen2 && (
				<>
					<WatchedSummary watched={watched} />
					<WatchedMovieList watched={watched} />
				</>
			)}
		</div>
	);
}
