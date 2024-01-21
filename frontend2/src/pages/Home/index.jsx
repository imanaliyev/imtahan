import React from "react";
import Carusel from "../../components/Carusel";
import Welcome from "../../components/Welcome";
import Crud from "../../components/Crud";
import Customer from "../../components/Customer";
import Blog from "../../components/Blog";
import SignUp from "../../components/SignUp";
import {Helmet} from "react-helmet";
function Home() {
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Carusel />
      <Welcome />
      <Crud/>
      <Customer/>
      <Blog/>
      <SignUp />
    </>
  );
}

export default Home;
