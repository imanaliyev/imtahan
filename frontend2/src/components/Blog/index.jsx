import React from "react";
import "./blog.scss";
function Blog() {
  return (
    <section id="blog">
      <div className="header">
        <p>Latest News</p>
        <h1>THE BLOG</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="image">
            <div className="date">
                21 Dec 2007
            </div>
            <img
              src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h3>BEST PLACES FOR WINE</h3>
            <p>
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
            <div >
                continue reading <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <div className="date">
                21 Dec 2007
            </div>
            <img
              src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h3>BEST PLACES FOR WINE</h3>
            <p>
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
            <div >
                continue reading <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <div className="date">
                21 Dec 2007
            </div>
            <img
              src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h3>BEST PLACES FOR WINE</h3>
            <p>
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
            <div >
                continue reading <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
