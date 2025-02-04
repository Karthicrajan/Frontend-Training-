import { Link } from "react-router-dom";
import "./style.css";
export default function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg nav-color-am" >
     <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          
          <Link to="/shopping/Home" className="nav-link">Home</Link>  
          {/* <Link to="/">Home</Link> */}
        </li>
        <li className="nav-item">
          {/* <Link to="/cart" className="nav-link" >Cart</Link> */}
        </li>
        <li className="nav-item">
           <Link to="/shopping/cart" className="nav-link">Cart</Link>  
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}