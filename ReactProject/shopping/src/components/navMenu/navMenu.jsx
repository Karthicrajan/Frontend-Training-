import { Link } from "react-router-dom";
import './navMenu.css';
export default function NavMenu(){
    return (
        <>

        <div className="nav-menu">
        <div className="nav-menu-container">
            <div className="nav-menu-list">
                <Link className="navsub-menu-link" to="/shopAll">Shop All</Link>
                <Link className="navsub-menu-link" to="/computer">Computer</Link>
                <Link className="navsub-menu-link" to="/tablets">Tablets</Link>
                <Link className="navsub-menu-link" to="/shopAll">Drones & Cameras</Link>
                <Link className="navsub-menu-link" to="/shopAll">Audio</Link>
                <Link className="navsub-menu-link" to="/shopAll">Mobile</Link>
                <Link className="navsub-menu-link" to="/shopAll">T.V & Home Cinema</Link>
                <Link className="navsub-menu-link" to="/shopAll">Wearable Tech</Link>
                <Link className="navsub-menu-link" to="/shopAll">Sale</Link>

            </div>
        </div>
        
        </div>
        </>
    )
}