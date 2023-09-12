import React from 'react'
import './navbar.css'
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
                        <Link to='/productos' className='link-navbar'>
                            Productos
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/ayuda' className='link-navbar'>
                            Ayuda
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