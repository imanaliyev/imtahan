import React, { useContext, useEffect, useState } from "react";
import "./crud.scss";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
function Crud() {
  const [data, setData] = useState([]);
  const {addToWishlist,wishlist} = useContext(WishlistContext)
  console.log(wishlist)
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section id="crud">
      {data.map((x) => (
        <ul key={x._id}>
          <li>
            <img src={x.image} alt="salam" />
          </li>
          <li>{x.header}</li>
          <li>{x.text}</li>
          <Link to={`/detail/${x._id}`}>
            {" "}
            <li>
              learn more<i class="fa-solid fa-arrow-right"></i>
            </li>
          </Link>
          <li className="add-wishlist" onClick={()=>addToWishlist(x)}>add to wishlist</li>
        </ul>
      ))}
    </section>
  );
}

export default Crud;
