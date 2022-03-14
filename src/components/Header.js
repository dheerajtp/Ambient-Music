import React from 'react'
import logo from "../media/mp3.png";

function Header() {
  return (
    <div className="flex justify-center">
      <div className="p-10 text-center">
      <img src={logo} alt="logo" className='w-24'/>
      </div>
    </div>
  )
}

export default Header