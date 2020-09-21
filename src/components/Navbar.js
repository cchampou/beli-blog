import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo';

const Navbar = () => {

  return (
    <>
      <div className="navbar-container">
        <ul className="navbar-list">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="about">Qui suis-je</Link></li>
          <li><Link to="shop">Boutique</Link></li>
        </ul>
        <Logo height="150" width="213" />
        <ul className="navbar-list">
          <li><Link to="blog">Blog</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="youtube">Youtube</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
