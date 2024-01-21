import React from "react";
import './footer.scss'
function Footer() {
  return (
   <>
 
  <footer>
      <div className="left-footer">
        <ul>
          <li>
            <h1>CONTACT US</h1>
          </li>
          <li>
            {" "}
            <i class="fa-solid fa-location-dot"></i> 8th floor, 379 Hudson St,
            New York, NY 10018
          </li>
          <li>
            {" "}
            <i class="fa-solid fa-phone"></i> (+1) 96 716 6879
          </li>
          <li>
            {" "}
            <i class="fa-solid fa-envelope"></i> contact@site.com
          </li>
        </ul>
        <ul>
          <li>
            <h1>OPENING HOURS</h1>
          </li>
          <li>09:30 AM – 11:00 PM</li>
          <li>Every Day</li>
        </ul>
      </div>
      <div className="mid-footer">
        <ul>
          <li>
            <h1>LATEST TWITTER</h1>
          </li>
          <li><span>@colorlib</span></li>
          <li>
            Activello is a good option. It has a slider built into that displays
            the featured image in the slider.{" "}
            <span>https://buff.ly/2zaSfAQ</span> <p>21 Dec 2017</p>
          </li>
          <li><span>@colorlib</span></li>
          <li>
            Activello is a good option. It has a slider built into that displays{" "}
            <span>https://buff.ly/2zaSfAQ</span> <p>21 Dec 2017</p>
          </li>
        </ul>
      </div>
      <div className="right-footer">
        <h1>GALLERY</h1>
        <div className="images">
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-02.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-03.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-04.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-05.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-06.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-07.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-08.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-09.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-10.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-11.jpg" alt="" />
        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-12.jpg" alt="" />
        </div>
      </div>
    </footer>
    <div className="lower-footer">
      <div className="left">
         <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>
        <div className="right">
          @ 2018 Iman Aliyev. <span>Get The Theme</span>
        </div>
      
    </div>
 
    
   </>
  );
}

export default Footer;
