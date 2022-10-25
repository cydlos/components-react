import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav classname="styles.header">
      <ul>
        <li>
          <NavLink to="/" end></NavLink>
        </li>
        <li>
          <NavLink to="contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
