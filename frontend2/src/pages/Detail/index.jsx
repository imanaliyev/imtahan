import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Routes, Route, useParams } from 'react-router-dom';
import './detail.scss'
import { WishlistContext } from '../../context/WishlistContext';


function Detail() {
  const {addToWishlist} = useContext(WishlistContext)
  const [data, setData] = useState([])

  const handleLike =(item)=>{
    addToWishlist(item)
    document.querySelector('.fa-heart').classList.toggle("active")

  }
  

  let { id } = useParams();
  useEffect(() => {
   fetch(`http://localhost:8080/${id}`)
   .then(response=>response.json())
   .then(data=>{
    setData(data)
   })
  }, [])
  
  return (
   <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Detail</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
 <section id='detail'>
  <div className="container">
    
      <img src={data.image} alt="" />
      <h2>{data.header}</h2>
      <h3>{data.text}</h3>
      <button  onClick={()=>handleLike(data)}><i class="fa-solid fa-heart"></i></button>
    
  </div>

 </section>
   </>
  )
}

export default Detail