import React from 'react'
import './welcome.scss'
function Welcome() {
  return (
    <section id='welcome'>

        <div className="welcome-left">
            <h3>Italian Restaurant</h3>
            <h2>WELCOME</h2>
            <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
            <button>OUR Story <i class="fa-solid fa-arrow-right"></i></button>

        </div>
        <div className="welcome-right">
            <div className="image">
                <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
            </div>

        </div>
    </section>
  
  )
}

export default Welcome