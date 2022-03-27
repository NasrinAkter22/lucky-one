import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

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
    const removeProduct=()=>{
        setCart([])
        
    }
    const choiseProduct=()=>{
        const choise=cart[Math.floor(Math.random()*cart.length)]
        setCart([choise])
    }
    return (
        <div >
           <div className='row w-100 m-0'>
               <div className='col-lg-9'>
                  <h1 className='text-center  py-3'>Our product</h1>
                  <div className='row row-cols-lg-3 row-cols-md-2 g-4 '>
                      {
                        products.map(product=><Product product={product} cartProduct={cartProduct}></Product>)  
                      }
                  </div>
               </div>
               <div className='col-lg-3 cartContainer'>
                <h3 className='text-center py-3'>Order sumarry</h3>
                <div>
                    {
                        cart.map(cart=><Cart cart={cart}></Cart>)
                    }
                    <button onClick={choiseProduct} className='w-100 btn-primary my-3'>choise one for me </button>
                    <button onClick={removeProduct} className='w-100 btn-primary '> remove all </button>
                </div>
               </div>

               </div> 
        </div>
    );
};

export default Shop;