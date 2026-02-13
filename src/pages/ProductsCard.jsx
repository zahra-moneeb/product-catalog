import { Link } from "react-router-dom"
import "./cards.css"

export default function ProductsCard({product}){

    return(

<div className="container">
         <div className="card h-100 w-100">
         <img src={product.image} className="card-img-top" alt="img" />
         <div className="card-body">
            <h6 className="card-title fs-bold">{product.name}</h6>
             <div className="card-text fw-bold">{product.price}</div>
             <Link to={`/products/${product.id}`} className="btn btn-sm btn-outline-primary">view details</Link>
            
     </div>
  </div>
</div>


    )
}