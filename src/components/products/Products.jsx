import React, { useEffect, useState } from 'react'
import ProductBox from '../productBox/ProductBox'
import Loading from '../loading/Loading'
import axios from 'axios'

export default function Products() {

  const [posts, setPosts] = useState([{}])
  const [isLoading, setIsloading] = useState(true)
  
    const api = async () => {
      try{

        const response = await axios.get('https://fakestoreapi.com/products')
        const finalres = await response.data
        
        
        if(response.status !== 200){
          setPosts([])
        } else{
          setPosts(finalres)
          setIsloading(false)
        }
      } catch{

      }
    }

    useEffect(()=>{
      api();
    },[])

    if(isLoading == true){
      return(
      <Loading></Loading>
      )
    }else{
      return (
        <main>
          <section>
            {posts?.map((post) => (<ProductBox  key={post.id} image={post.image} title={post.title}  price={post.price} desc={post.description} id={post.id}></ProductBox> ))}
            
          </section>
        </main>
      )

    }
}
