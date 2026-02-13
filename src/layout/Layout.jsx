import { Outlet } from "react-router-dom"
import Navbare from "../components/Navbare"
import Footer from "../components/Footer"


export default function Layout(){
    return(
        <div>
            <Navbare/>
            <Outlet/>
            <Footer/>
        </div> 
    )
}