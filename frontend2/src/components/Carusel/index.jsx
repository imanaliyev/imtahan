import React from "react";
import { Carousel } from "react-carousel-minimal";
import './carusel.scss'

function Carusel() {
  const data = [
    {
      image:
        "https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg",
      caption: "<div id='container'> <div id='txt'> <h2>Welcome to</h2> <h1>POTA PLACE</h1> <button>LOOK MENU</button> </div></div>",
    },
    {
      image:
        "https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg",
      caption: "<div id='container'> <div id='txt'> <h2>Welcome to</h2> <h1>POTA PLACE</h1> <button>LOOK MENU</button> </div></div>",
    },
    {
      image: "https://preview.colorlib.com/theme/pato/images/slide1-03.jpg",
      caption: "<div id='container'> <div id='txt'> <h2>Welcome to</h2> <h1>POTA PLACE</h1> <button>LOOK MENU</button> </div></div>",
    },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <section id="carusel">
      <Carousel
        data={data}
        time={2000}
        width="100%"
        height="100vh"
        captionStyle={captionStyle}
        slideNumberStyle={slideNumberStyle}
        captionPosition="center"
        automatic={false}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "100vw",
      
     
        }}
      />
    </section>
  );
}

export default Carusel;
