import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary text-white">
        <div className="container-fluid">
          <Link>
            <a className="navbar-brand fw-bold text-white" href="/">
              Local Services
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <Link to="/">
                <li className="nav-item ">
                  <a className="nav-link text-white" aria-current="page">
                    Home
                  </a>
                </li>
              </Link>

              <Link to="/about">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    About
                  </a>
                </li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/contact">
                    Contact
                  </a>
                </li>
              </Link>
              <Link>
                <li className="nav-item">
                  <a className="nav-link text-white">
                    Cart
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "black" }}
                    />
                  </a>
                </li>
              </Link>
            </ul>

           
              <button className="btn btn-dark">Nirav</button>
            
              <div>
                <Link to="/login">
                  <button className="btn btn-dark mx-1">Login</button>
                </Link>

                <Link to="/register">
                  <button className="btn btn-dark">Register</button>
                </Link>
              </div>
        
          </div>
        </div>
      </nav>
     
    </div>
  )
}

export default Navbar