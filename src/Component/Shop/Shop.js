import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([])
    console.log(products);
    
    useEffect(()=>{

      fetch('fackdata.json')
      .then(res=>res.json())
      .then(data=>setProducts(data))
    },[]) 
    const[cart,setCart]=useState([]) 
    const cartProduct=product=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div >
           <div className='row w-100 m-0'>
               <div className='col-lg-9'>
                  <h1 className='text-center  py-3'>Our product</h1>
                  <div className='row row-cols-lg-3 row-cols-md-2 g-4 '>
                      {
                        products.map(product=><Product product={product}></Product>)  
                      }
                  </div>
               </div>
               <div className='col-lg-3'>
                <h3>Order sumarry</h3>
               </div>

               </div> 
        </div>
    );
};

export default Shop;