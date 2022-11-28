import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='header'>
            <div className='container'>
                <h1>E-<span className='primary'>Coin</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link spy={true} to='Home' smooth={true} activeClass='active'>

                    <li>
                        <a href='/'>
                            Home
                        </a>
                    </li>
                    </Link>
                    <Link spy={true} to='Feature' smooth={true} activeClass='active'>

                    <li>
                        <a href='/'>
                            Featured
                        </a>
                    </li>
                    </Link>
                    <Link spy={true} to='Email' smooth={true} activeClass='active'>
                    <li>
                        <a href='/'>
                            Earn
                        </a>
                    </li>
                    </Link>
                    <Link spy={true} to='Footer' smooth={true} activeClass='active'>
                    <li>
                        <a href='/'>
                            Contact
                        </a>
                    </li>
                    </Link>
                </ul>
                <div className="btn-group">
                    <button className="btn">
                        Connect Wallet
                    </button>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }}/>):(<FaBars size={20} style={{ color: '#333' }}/>)}

                </div>
            </div>

        </div>
    )
}

export default Navbar