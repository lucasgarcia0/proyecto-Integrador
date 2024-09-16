import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <>
            <ul className="main-nav">
                <li><Link to="/">Home</Link> <br></br> </li>
                <li><Link to="/favorites">Favorites</Link><br></br></li>
                <li><Link to="/topRated">Top Rated</Link><br></br></li>
                <li><Link to="/recent">Recent</Link></li>
                
            </ul>
            
        </>
    )
}
export default Navbar;