import React from 'react';
import whiteLogo from 'assets/img/logo-white.png'

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={whiteLogo} alt="Logo" className="logo"/>
      </div>

      <h1 className="heading-primary">
        <span className="heading-primary-main"> Outdoors </span>
        <span className="heading-primary-sub"> is where life happens </span>
      </h1>
    </div>
  )
}
