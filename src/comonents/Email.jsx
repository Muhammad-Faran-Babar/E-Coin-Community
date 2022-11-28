import React from 'react'
import './Email.css'
import Crypto from '../assets/trade.png'
const Email = () => {
  return (
<div className="email" id='Email'>
    <div className="container">
        {/* left side */}
        <div className="left">
            <img src={Crypto} alt='' />
        </div>


        {/* Right side */}
        <div className="right">
            <h5>
            Earn passive income with crypto.
            </h5>
            <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.
            </p>
            <div className="input-container">
                <input className='input' type='email' placeholder='write your email'/>
                <button className='btn'>Learn More!</button>
            </div>
        </div>

    </div>



</div>

)
}

export default Email