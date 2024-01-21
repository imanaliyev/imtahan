import React from 'react'
import './signUp.scss'
function SignUp() {
  return (
    <section id='sign-up'>
        <div className="container">
            <h2>SPECIAL SIGN UP</h2>
            <div className="input">
                <input type="text" placeholder='Email Adrress' />
                <i class="fa-solid fa-envelope"></i>
            </div>
            <button>Sign-Up</button>
        </div>


    </section>
  )
}

export default SignUp