import React from 'react'

const PageLink = ({ id, href, text }) => {
  return (
    <li key={ id }>
      <a href={ href } className='nav-link'>
        { ' ' }
        { text }{ ' ' }
      </a>
    </li>
  )
}

export default PageLink
