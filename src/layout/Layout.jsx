import { Outlet } from "react-router-dom"
import Navbare from "../components/Navbare"
import Footer from "../components/Footer"


export default function Layout(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <Navbare/>
            <main className="flex-fill">
                <Outlet/>
            </main>
            <Footer/>
        </div> 
    )
}