import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductBox({image, title , price , desc , id}) {
  return (
    <Link to={`${id}`} className='box' >
        <div className="img">
            <img src={image} alt="" />
        </div>
        <div className="body">
            <h2>{title}</h2>
            <h4>Price :  {price}$</h4>
            <p>{desc}</p>
        </div>
    </Link>
  )
}
