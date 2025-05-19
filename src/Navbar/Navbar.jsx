import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <div className="navbar-site">
        <ul className="navbar-items">
            <li>
                <Link to="/">
                    <button>
                        Home page
                    </button>
                </Link>
            </li>
            <li>
                <Link to="/about">
                    <button>
                        About me
                    </button>
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <button>
                        Contact me
                    </button>
                </Link>
            </li>
        </ul>
    </div>
)

export default Navbar