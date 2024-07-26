import React from 'react'
import logo from '../images/logo.svg';
import PageLinks from './PageLinks'
import { socialLinks } from '../data';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={ logo } className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */ }
        <PageLinks />

        <ul className='nav-icons'>
          { socialLinks.map((item) => (
            <SocialLink key={ item.id } { ...item } />
          )) }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
