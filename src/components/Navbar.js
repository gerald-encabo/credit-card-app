import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiAdguard } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import './Navbar.scss';
import { IconContext } from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           <div className="navbar">
               <div className="navbar-container container">
                  <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                      <SiAdguard className="navbar-icon" />Guardian
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      { click ? <FaTimes /> : <FaBars /> }
                  </div>
                  <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                      <li className="navbar-item">
                          <Link to='/' className='navbar-links' onClick={closeMobileMenu} > Home </Link>
                      </li>
                      <li className="navbar-item">
                          <Link to='/services' className='navbar-links' onClick={closeMobileMenu} > Services </Link>
                      </li>
                      <li className="navbar-item">
                          <Link to='/products' className='navbar-links' onClick={closeMobileMenu} > Products </Link>
                      </li>
                      <li className="navbar-item">
                          <Link to='/pricing' className='navbar-links' onClick={closeMobileMenu} > Pricing </Link>
                      </li>
                      <li className="navbar-btn">
                          { button ? (
                             <Link to='sign-in' className="btn-link" >
                                 <Button buttonStyle='btn--secondary'>Sign In</Button>
                             </Link>
                          ) : (
                              <Link to='/sign-in' className="btn-link" onClick={closeMobileMenu}>
                                  <Button buttonStyle='btn--secondary' buttonSize='btn--mobile'>Sign In</Button>
                              </Link>
                          ) }
                      </li>
                   </ul>
               </div>
           </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
