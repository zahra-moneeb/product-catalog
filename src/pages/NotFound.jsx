import { Link } from "react-router-dom";
import '../App.css'
export default function NotFound() {
    return (
        <div className="container text-center my-5">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
            <p className="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <Link to="/">Back to home</Link>
            
        </div>
    )
}