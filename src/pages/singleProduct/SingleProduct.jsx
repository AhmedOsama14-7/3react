import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
  let {id} = useParams()
  let [counter,setcounter] = useState(1);
  let [singleProduct,SetsingleProduct] = useState({})
  let [isLoading,setIsloading] = useState(true)
  const singleProductApi = async () => {
      try{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const finalres = await response.json()
      
      
      if(response.status !== 200){
        SetsingleProduct([])
      } else{
        SetsingleProduct(finalres)
        setIsloading(false)
      }
    } catch{

    }
    }
    
    

  useEffect(()=>{
    singleProductApi();
    
  },[])
  if(isLoading == false){
    return (

      
      
      <div className='singleProduct'> 
      <div className="photo">
        <img src={singleProduct.image}></img>
      </div>

      <div className="details">
        <h2>{singleProduct.title}</h2>
        <h4 className='price'>{singleProduct.price} $</h4>

        <div className="btns">
        <button className='counter' onClick={()=>{setcounter(counter++)}}>{counter}</button>
        <button className='addToCart'>Add to cart</button>
        </div>


        <h5>Prouct Details</h5>
        <p className='des'>{singleProduct.description}</p>
      </div>
    </div>
  
  )
}
    }
