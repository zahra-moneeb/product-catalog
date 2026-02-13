import about from "../images/about.jpg"
import { Link } from "react-router-dom";

export default function About() {
    return (

         <div className="home-cont  ">
                <div className=" container ">
                    <div className="row align-items-center">

                           <div className='col-md-6 order-2 order-md-1 h-100 p-0 '>
                            <img src={about} 
                            alt="home"
                            className='img-fluid w-100 h-100'
                            style={{ objectFit: "cover" }}
                             />
                        </div>

                     <div className='col-md-6 ps-md-5 mt-1 order-2 order-md-1  text-overlay d-inline'>
                            
                       <h1 className="display-4">About Us</h1>
                        <p className="lead text-left mt-4">
                            zamLUX is a refined jewelry brand focused on timeless elegance and modern 
                            luxury. We create and curate high-quality jewelry designed to complement both
                            everyday style and special occasions.
                            At zamLUX, we believe jewelry is a reflection of personal identity and 
                            confidence. Our collections are crafted with attention to detail, quality 
                            materials, and enduring design.
                        </p>

                         <Link to="/products" className="btn btn-sm btn-primary">See Product</Link>
                    </div>
   
                    </div>
                </div>
             </div>
        // <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '80vh' }}>
        //     <h1 className="display-4">About Us</h1>
        //     <p className="lead text-center mt-4">
        //        zamLUX is a refined jewelry brand focused on timeless elegance and modern 
        //        luxury. We create and curate high-quality jewelry designed to complement both
        //         everyday style and special occasions.
        //         At zamLUX, we believe jewelry is a reflection of personal identity and 
        //         confidence. Our collections are crafted with attention to detail, quality 
        //         materials, and enduring design.
        //         We are committed to excellence, integrity, and customer satisfaction,
        //         offering a seamless and trustworthy shopping experience. 
        //         zamLUX represents sophistication, quality, and lasting beauty.
        //     </p>

        // </div>
    );
}