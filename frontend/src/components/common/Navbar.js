import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import HomeHeader from './HomeHeader'

const Navbar = () => {
  return (
    <div className ="navbar">
      <HomeHeader />
      <div className="links">
        <Link>Home</Link>
        <Link>About Me</Link>
        <Link>Services</Link>
        <Link>Testimonials</Link>
        <Link>Contact</Link>
        <Link>Certification</Link>
      </div>
    </div>
  )
}

export default Navbar