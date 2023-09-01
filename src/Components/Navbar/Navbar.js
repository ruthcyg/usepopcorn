import { Logo } from "./Logo";
import { Search } from "./Search";
import { NumResults } from "./NumberResult";
//export default function NavBar this will give error
export function NavBar() {
	return (
		<nav className="nav-bar">
			<Logo />
			<Search />
			<NumResults />
		</nav>
	);
}
