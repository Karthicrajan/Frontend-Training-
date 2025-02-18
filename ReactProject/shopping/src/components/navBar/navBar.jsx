import './navBar.css';
import Navtop from "../navtop/navtop";
import NavbarSearch from "../navBarSearch/navBarSearch";
import NavMenu from "../navMenu/navMenu";
export default function NavBar(){
    return(
        <>
        <Navtop/>
        <NavbarSearch/>
        <NavMenu />
        </>
    )
}