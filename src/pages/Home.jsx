import '../App.css'
import zamrd2 from '../assets/zamrd2.jpg'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const Navigate = useNavigate()
    return(
      <div className="home-cont  ">
        <div className=" container ">
            <div className="row align-items-center">
                <div className='col-md-6 ps-md-5 mt-1 order-2 order-md-1  text-overlay d-inline'>
                    <h1 className='fw-bold'>Welcome to Our Website</h1>
                    <p className='fw-light'>
                        This is a simple home page built with React and Bootstrap.
                        The text is on the left and the image is on the right.
                      
                    </p>
                    <button 
                     className="btn btn-primary"
                     onClick= {() => Navigate("/about")}>
                    
                        Learn More
                    </button>
                </div>

                <div className='col-md-6 order-2 order-md-1 h-100 p-0 '>
                    <img src={zamrd2} 
                    alt="home"
                    className='img-fluid w-100 h-100'
                    style={{ objectFit: "cover" }}
                     />
                </div>


            </div>
        </div>
     </div>
    )
    
}