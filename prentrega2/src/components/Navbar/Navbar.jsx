import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div className='containerNav'>
                <h1>Iven Clothes</h1>
                <ul>
                    <li>
                        <Link to='/' className='link-navbar'>
                            Inicio
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/categoria/2' className='link-navbar'>
                            Remeras
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/categoria/3' className='link-navbar'>
                            Buzos
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/categoria/4' className='link-navbar'>
                           Pantalones
                        </Link>
                    </li>
                </ul>
                <Link to='/cart'>
                    <CartWidget />
                </Link>

            </div>
        </header>
    )
}

export default NavBar