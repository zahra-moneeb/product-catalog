import { NavLink } from 'react-router-dom'
import '../App.css'

export default function Navbare() {

    return (
        <nav className="navbar .nav-link navbar-expand-lg mt-0 text-dark navbar-dark bg-dark fs-5" >
            <div className="container mt-10">
                <div className="navbar-brand text-light fs-3 fw-bold">ZamLUX</div>
                <button 
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ms-auto  text-light " >
                         <li className="navbar-item me-5"><NavLink to="/" style={({isActive})=>({
                            color: isActive ? "#0d6efd" : "white",
                            textDecoration: "none"
                         })}>Home</NavLink></li> 

                         <li className="navbar-item me-5"><NavLink to="/about" style={({isActive})=>({
                            color: isActive ? "#0d6efd" : "white",
                            textDecoration: "none"
                         })} >About</NavLink></li>

                         <li className="navbar-item"><NavLink to="/products" style={({isActive})=>({
                            color: isActive ? "#0d6efd" : "white",
                            textDecoration: "none"
                         })}>Products</NavLink></li>
                   </ul>
                </div>
            </div>
        </nav>
    )
}