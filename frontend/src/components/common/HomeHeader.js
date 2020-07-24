import React from 'react'
import Logo from '../../styles/assets/logo.png'

const HomeHeader = () => {
  return (
    <div className="home-header">
      <div className='header-left'>
        <span className="header-title">Monicas</span>
        <img className="header-logo" alt="logo" src={Logo} />
        <span className="header-title">Site</span>
      </div>
      
      <div className="header-right">
        07912345678 <br></br>
        monica@monciashealingservices.com
      </div>
    </div>
  )
}

export default HomeHeader