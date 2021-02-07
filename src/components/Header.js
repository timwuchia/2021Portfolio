import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const mobileMenuShow = isOpen ? 'mobile-menu-show' : '';
    const closeMenu = () => {
        setOpen(false);
    }
    return (
        <header>
            <h2 className="logo"><Link to='/'>Tim Wu</Link></h2>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <nav className={mobileMenuShow}>
                <ul>
                    <li><Link onClick={closeMenu} to='/works'>My Works</Link></li>
                    <li><Link onClick={closeMenu} to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
