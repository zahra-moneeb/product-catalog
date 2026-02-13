import { useParams, useNavigate } from "react-router-dom"
import getProductById  from "../data";
import '../App.css'

export default function ProductDetails() {
    const {id} = useParams();
    const prod = getProductById(Number(id));
    const navigate = useNavigate();

    if(!prod){
        return <div><p>Loading...</p>;</div>
    }
    return(
      <div className="container mt-5">
         <div className="card p-3 bg-dark text-light">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 text-center">
                    <img
                    src={prod.image}
                    alt={prod.name}
                    className="img-fluid product-img border border-10 border-light rounded"
                    />
                </div>

            <div className="col-md-6">
                <h1>{prod.name}</h1>
                <p>{prod.description}</p>
                <p className="text-muted">Category: {prod.category}</p>
            <p className="fw-bold">{prod.price}</p>
            <div className="d-flex gap-2 flex-wrap">
                   <button className="btn btn-primary"
                    onClick={()=> navigate(-1)}
                    >Back to Product
                </button>

                <button className="btn btn-primary ml-0 " onClick={()=> navigate('/')}>buy</button>

            </div>
                
            </div>
            

    </div>
   
  </div>
</div>

    )
}

