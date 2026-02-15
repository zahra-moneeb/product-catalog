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
                    <h1 className='fw-bold mb-4' >Discover Timeless Elegance</h1>
                    <p className='fw-light'>
                       At zamLUX, we create elegant jewelry that combines sophistication, quality, and timeless beauty. 
                       Each piece enhances your style and makes every moment unforgettable
                      
                    </p>
                    <button 
                     className="btn fw-bold btn-primary"
                     onClick= {() => Navigate("/products")}>
                    
                        View Our Collection
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