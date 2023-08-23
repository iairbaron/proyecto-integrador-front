import React from 'react'
import logo from "../../assets/logo1.ico";

const Footer = () => {
  return (
    <div className="shadow-md w-full relative top-0 left-0 border mt-12">
      <div className="flex md:flex items-center justify-around lg:justify-evenly">          
        <img src={logo} className="w-32 md:w-40 h-28 md:h-40" alt="Logo" />
        <p>@ CopyRigth 2023. Grupo 5 - DH</p>
      </div>
      </div>
  )
}

export default Footer