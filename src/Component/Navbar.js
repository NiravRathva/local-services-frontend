import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useState } from "react";
import Cart from "./Cart";
const Navbar = () => {
  const user=useSelector((state)=>state.user)
  const name = user.user.name ? user.user.name.split(' ')[0] : '';
  const [open, setOpen] = useState(false);
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
             
                <li className="nav-item ">
                  <Link to="/" className="nav-link text-white" aria-current="page">
                    Home
                  </Link>
                </li>
              

              
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    About
                  </Link>
                </li>
         
              
                <li className="nav-item">
                  <Link  className="nav-link text-white" to="/contact">
                    Contact
                  </Link>
                </li>
              
              <Link>
                <li className="nav-item">
                  <Link className="nav-link text-white" onClick={()=>setOpen(!open)}>
                    Cart
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "black" }}
                    />
                  </Link>
                </li>
              </Link>
            </ul>

           
            {name ? (
              <button className="btn btn-dark">{name}</button>
            ) : (
              <div>
                <Link to="/login">
                  <button className="btn btn-dark mx-1">Login</button>
                </Link>

                <Link to="/register">
                  <button className="btn btn-dark">Register</button>
                </Link>
              </div>
            )}
        
          </div>
        </div>
      </nav>
      {open && <Cart setOpen={setOpen} open={open} />}
    </div>
  )
}

export default Navbar