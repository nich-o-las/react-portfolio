import React from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar(props){
  return(
    <nav className="Navbar">
      <Link className='Navbar-brand Navbar-link' to="/">Nicholas Cox</Link>
      <Link id="bioLink" className={'Navbar-link'+ (props.active === 'Bio' ? ' active': '')} to="/">Bio</Link>
      <Link className={'Navbar-link'+ (props.active === 'Portfolio' ? ' active': '')} to="/portfolio">Portfolio</Link>
    </nav>
  )
}