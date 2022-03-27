import React from 'react';
import "./Product.css"
const Product = (props) => {
    const{title,image,price}=props.product
    return (
        <div className=''>
          <div className='product'>
              <img src={image} className=" w-100 h-25" alt="" />
              <div><h4>{title}</h4>
              <h5>{price}</h5>
              </div>
              <button onClick={()=>props.cartProduct(props.product)} className='btn-primary my-3 '>Add To cart</button>
              </div>  
        </div>
    );
};

export default Product;
