import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink'
const PageLinks = () => {
  return (
    <ul className='nav-links' id='nav-links'>
      { pageLinks.map((item) => (
        <PageLink { ...item } />
      )) }
    </ul>
  )
}

export default PageLinks
