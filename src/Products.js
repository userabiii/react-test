import React, { useEffect, useState } from 'react'
import "./products.css"

function Products() {
    const[data,setData]=useState([])
    async function fetchData() {
        const value= await fetch('https://fakestoreapi.com/products')
        const result= await value.json()
        setData(result)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='product-main'>
      <div className='container'>
        {
            data.map((items)=>(
                <div className='card'>
                    <img src={items.image} alt='Product'></img>
                    <h4>${items.price}</h4>
                    <p>{items.title}</p>
                    <button>Add to Cart</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Products
