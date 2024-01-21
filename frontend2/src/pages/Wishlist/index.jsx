import React, { useContext, useEffect, useState } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import './wishlist.scss'
import { Helmet } from 'react-helmet'
function Wishlist() {
  const {wishlist,removeFromWishlist} = useContext(WishlistContext)

 
  
  

  


  return (
   <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Wishlist</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
    <section id='wishlist'>
      <table id="customers">
  <tr>
    <th>Image</th>
    <th>Header</th>
    <th>Text</th>
    <th>Reomve from wishlist</th>
  </tr>
  {
    wishlist.map(x=>(
      <tr>
        <td><img src={x.image} alt="" /></td>
        <td>{x.header}</td>
        <td>{x.text}</td>
        <td><button onClick={()=>removeFromWishlist(x._id)}>Remove</button></td>
      </tr>
    ))
  }
  
  </table>
      

    </section>
  
   </>

  )
}

export default Wishlist