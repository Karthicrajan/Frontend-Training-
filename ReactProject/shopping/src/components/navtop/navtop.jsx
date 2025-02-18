import { Link } from "react-router-dom";
import './navtop.css';
export default function Navtop(){
    return (
        <div>
            <div className="nav1-container">
                <div>
                    
                    <p>Free Shipping for order over $50</p>
                </div>
                <div className="nav1-menu-list">
                    <Link className="nav1-link" to='About'>About</Link>
                    <Link className="nav1-link" to='contact'>contact</Link>
                    <Link className="nav1-link" to='helpcenter'>Help Center</Link>
                    <Link className="nav1-link" to='contact'>Call Us 123-456-7890</Link>

                </div>
            </div>
        </div>
    )
}