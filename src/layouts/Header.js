import React, { Component } from 'react';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <header className="header">
                <div className="container">
                    <nav className='nav d-flex align-items-center justify-content-between'>
                        <a href="#!" className="nav__logo">RoboFr13nds</a>
                        <ul className="nav__list d-flex gap-5 align-items-center">
                            <li className="nav__item"><a href="#!" className="nav__link">About Us</a></li>
                            <li className="nav__item"><a href="#!" className="nav__link">Contact</a></li>
                            <li className="nav__item"><a href="#!" className="nav__link">Support &amp; Help</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default Header;