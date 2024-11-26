import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/Images/Logo.svg';

import headerCSS from './header.module.css';
import './active.css';

export default function Header() {

    // ====== nav-for-phone ====== //

    useEffect(() => {

        const navPh = document.getElementById('nav_ph');
        const navBar = document.getElementById('navBar');

        const toggleNav = () => {

            navPh.classList.toggle(headerCSS.change);
            navBar.classList.toggle(headerCSS.display_nav);

        }

        navPh.addEventListener('click' , toggleNav);
        navBar.addEventListener('click' , toggleNav);

        return () => {

            navPh.removeEventListener('click' , toggleNav);
            navBar.removeEventListener('click' , toggleNav);

        }

    } , []);

    return <React.Fragment>

        <div className={`padding_inline ${headerCSS.container}`}>

            <Link className={headerCSS.logo}>
                <img src={logo} alt="logo" />
            </Link>

            <div id='nav_ph' className={headerCSS.nav_ph}>

                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>

            </div>

            <nav id='navBar' className={headerCSS.nav}>

                <ul>

                    <li><NavLink className='nav_link' to={'/'}>Feature</NavLink></li>
                    <li><NavLink className='nav_link' to={'/Affilite'}>Affilite</NavLink></li>
                    <li><NavLink className='nav_link' to={'/Pricing'}>Pricing</NavLink></li>
                    <li><NavLink className='nav_link' to={'/Communities'}>Communities</NavLink></li>

                </ul>

                <Link className={headerCSS.action}>Join Waitlist</Link>

            </nav>

        </div>

    </React.Fragment>

}
