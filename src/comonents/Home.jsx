import React from 'react'
import './Home.css'
import Crypto from '../assets/hero-img.png'
import { motion } from 'framer-motion'
const Home = () => {
    const transition = { duration: 2, type: "spring" };

    return (
        <div className="home" id='Home'>
            <div className="container">

                <div className='left'>
                    <div className="left">
                        <p> Sell & Buy Crypto Coins 24/7 by using your retirement email</p>
                        <h1>
                            Invest in <br /> CryptoCoin by <br />your IRA
                        </h1>
                        <p> Buy, Sell and Store Thousands Of CryptoCoins </p>
                        <div className='input-container'>
                            <motion.input 
                            initial={{ left: "-66%" }}
                            whileInView={{ left: "-2%" }}
                            transition={transition}
                            className='input'   type='email' placeholder='Enter your Email Here' />
                            <button className='btn'> Learn More</button>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className='right'>
                    <motion.div
                     initial={{ top: '0rem', left: "19rem" }}
                     whileInView={{ left: "3rem" }}
                     transition={transition}
                     style={{ top: '0rem', left: '-3rem' }}
                    className='img-container'>
                        <img src={Crypto} alt='' />
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Home