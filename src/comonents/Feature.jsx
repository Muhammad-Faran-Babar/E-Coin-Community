import React, { useState, useEffect } from 'react'
import './Feature.css'
// import btc from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import axios from 'axios'
import { motion } from 'framer-motion'


const Feature = () => {
    const transition = { duration: 2, type: "spring" };

    const [data, setData] = useState(false)
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    // console.log(data)
    if (!data) return null


    return (
        <div className="feature" id='Feature'>
            <div className="container">


                {/* Left side */}
                <div className="left">
                    <h2> Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p> See all available assets: Cryptocurrencies and NFTs</p>
                    <button className="btn">See more coins</button>

                </div>

                {/* Right Side */}
                <div className="right">
                    <motion.div
                    initial={{ top: '-10rem', left: "0" }}
                    whileInView={{ top: "-.5rem" }}
                    transition={transition}
                    style={{ top: '0rem', left: '-3rem' }}
                    className="card">
                        <div className="top">
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>
                                {data[0].name}
                            </h5>
                            <p>
                                ${data[0].current_price}
                            </p>
                            {data[0].price_change_percentage_24h < 0 ? (
                                <span className="red">
                                    <FiArrowDown className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            ) : (
                                <span className="green">
                                    <FiArrowUpRight className='icon'/>
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                            {/* <span><FiArrowUpRight/>2.5%</span> */}
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{ top: '-10rem', left: "0" }}
                    whileInView={{ top: "-.5rem" }}
                    transition={transition}
                    style={{ top: '0rem', left: '-3rem' }}
                    className="card">
                        <div className="top">
                            <img src={data[1].image} alt='' />
                        </div>
                        <div>
                            <h5>
                                {data[1].name}
                            </h5>
                            <p>
                                ${data[1].current_price}
                            </p>
                            {data[1].price_change_percentage_24h < 0 ? (
                                <span className="red">
                                    <FiArrowDown className='icon' />
                                    {data[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            ) : (
                                <span className="green">
                                    <FiArrowUpRight className='icon' />
                                    {data[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                            {/* <span><FiArrowUpRight/>2.5%</span> */}
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{ top: '-10rem', left: "0" }}
                    whileInView={{ top: "-.5rem" }}
                    transition={transition}
                    style={{ top: '0rem', left: '-3rem' }}
                    className="card">
                        <div className="top">
                            <img src={data[2].image} alt='' />
                        </div>
                        <div>
                            <h5>
                                {data[2].name}
                            </h5>
                            <p>
                                ${data[2].current_price}
                            </p>
                            {data[2].price_change_percentage_24h < 0 ? (
                                <span className="red">
                                    <FiArrowDown className='icon'/>
                                    {data[2].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            ) : (
                                <span className="green">
                                    <FiArrowUpRight className='icon' />
                                    {data[2].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                            {/* <span><FiArrowUpRight/>2.5%</span> */}
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{ top: '20rem', left: "0" }}
                    whileInView={{ top: ".5rem" }}
                    transition={transition}
                    style={{ top: '0rem', left: '-3rem' }}
                    className="card">
                        <div className="top">
                            <img src={data[3].image} alt='' />
                        </div>
                        <div>
                            <h5>
                                {data[3].name}
                            </h5>
                            <p>
                                ${data[3].current_price}
                            </p>
                            {data[3].price_change_percentage_24h < 0 ? (
                                <span className="red">
                                    <FiArrowDown className='icon'/>
                                    {data[3].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            ) : (
                                <span className="green">
                                    <FiArrowUpRight className='icon'/>
                                    {data[3].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                            {/* <span><FiArrowUpRight/>2.5%</span> */}
                        </div>
                    </motion.div>

                    <motion.div
                     initial={{ top: '20rem', left: "0" }}
                     whileInView={{ top: ".5rem" }}
                     transition={transition}
                     style={{ top: '0rem', left: '-3rem' }}
                    className="card">
                        <div className="top">
                            <img src={data[4].image} alt='' />
                        </div>
                        <div>
                            <h5>
                                {data[4].name}
                            </h5>
                            <p>
                                ${data[4].current_price}
                            </p>
                            {data[4].price_change_percentage_24h < 0 ? (
                                <span className="red">
                                    <FiArrowDown className='icon'/>
                                    {data[4].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            ) : (
                                <span className="green">
                                    <FiArrowUpRight className='icon'/>
                                    {data[4].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                            {/* <span><FiArrowUpRight/>2.5%</span> */}
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{ top: '20rem', left: "0" }}
                    whileInView={{ top: ".5rem" }}
                    transition={transition}
                    style={{ top: '0rem', left: '-3rem' }}
                    className="card">
                        <div className="top">
                            <img src={data[5].image} alt='' />
                        </div>
                        <div>
                            <h5>
                                {data[5].name}
                            </h5>
                            <p>
                                ${data[5].current_price}
                            </p>
                            {data[5].price_change_percentage_24h < 0 ? (
                                <span className="red">
                                    <FiArrowDown className='icon'/>
                                    {data[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            ) : (
                                <span className="green">
                                    <FiArrowUpRight className='icon' />
                                    {data[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                            {/* <span><FiArrowUpRight/>2.5%</span> */}
                        </div>
                    </motion.div>




                  
                </div>
            </div>

        </div>

    )
}

export default Feature