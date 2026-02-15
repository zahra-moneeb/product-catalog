import {products} from "../data";
import ProductsCard from "./ProductsCard";

export default function ProductList() {
  return (
 <div className="product-list my-4 d-flex flex-column">
  <div className="mb-4 text-center"><h1>Our Collection</h1></div>
<div className="container  ">
  
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <ProductsCard product={product} />
          
        </div>
      ))}
    </div>
     </div>
     </div>
  );
}
