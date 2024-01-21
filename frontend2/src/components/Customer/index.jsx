import React from "react";
import "./customer.scss";
function Customer() {
  return (
    <section id="customer">
      <div className="container">
        <span>Customer Says</span>
        <h2>REWIEV</h2>
        <img
          src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg"
          alt="as"
        />
        <div className="text">
          <p>
            We are Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis reiciendis odio enim architecto? Enim praesentium
            dolorum suscipit tempora nisi voluptas eius minima,nesciunt.
          </p>
        </div>
        <div className="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p >Iman Aliyev - New York</p>
      </div>
      <div className="dots-customer">
        <div className="dot-customer">
            

        </div>
        <div className="dot-customer">
            

            </div>
            <div className="dot-customer">
            

            </div>
      </div>
    </section>
  );
}

export default Customer;
