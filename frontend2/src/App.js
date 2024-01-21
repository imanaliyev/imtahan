import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import MainLayout from "./layout/MainLayout";
import "./assets/reset.scss";
import './assets/responsive.scss'
import { WishlistContext } from "./context/WishlistContext";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
function App() {
  const [wishlist, setWishlist] = useLocalStorage("wishlist",[])
  const addToWishlist =(item) =>{
   
    const index = wishlist.findIndex(x=> x._id === item._id)
    if (index === -1) {
      setWishlist([...wishlist,item])
      
    }

  }
  const removeFromWishlist=(id)=>{
    setWishlist(wishlist.filter(x=>x._id !== id))

  }
  const data = { addToWishlist,wishlist,removeFromWishlist };
  return (
    <WishlistContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/add" element={<Add />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WishlistContext.Provider>
  );
}

export default App;
