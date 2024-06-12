import { Link } from "react-router-dom";
import "./ProductCard.css"


function ProductCard(props) {

  const product=props.product;

    return (
        
      <>
        <Link to={`/shop/${product.prodID}`}>
          <div className="productCardWrapper">
            <div className="imageWrapper">phimg</div>
            <div className="detailsWrapper">
              <div className="prodCardName">{product.name}</div>
              <div className="prodCardPrice">€{product.price}</div>
            </div>
          </div>
        </Link>
        
      </>
    )
  }
  
  export default ProductCard