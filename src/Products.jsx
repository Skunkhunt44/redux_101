import React, { useEffect, useState } from 'react'
import getProducts from './Libs/getProducts'
import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';



function Products() {

  // const dispatch = useDispatch();
  // const { data:products }= useSelector((state)=>state.products)
  // const product=useLoaderData()


  const products=useLoaderData()


  const Card=({ image, price, description, rating })=>{
    return(
      <div class="card" style={{width :"18rem"}}>
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{price}</h5>
        <p class="card-text">{description}</p>
        <a href="#" class="btn btn-primary">{rating}</a>
      </div>
    </div>
    )
  }


// useEffect(()=>{

//   // ( ()=getProducts())

//   (
//     async () => {
//       setProducts(await getProducts())
//     }
//   )
//   ()


// },[])

   
  return (

    <div>

      {
        products && products.length > 0 ? 
        <>
              {
        products.map((item,id)=>{
          return <Card {...item} key={id}/>
        })
      }
        </>
        :null
      }
   
    </div>
  )
}

export default Products