import { Logo } from "./Logo";
import { Search } from "./Search";
import { NumResults } from "./NumberResult";
//export default function NavBar this will give error
export function NavBar({children}) {
	return (
		<nav className="nav-bar">
			<Logo />
			{/*<Logo />
			<Search />
			<NumResults movies = {movies}/>
	*/}
			{children}
		</nav>
	);
}
