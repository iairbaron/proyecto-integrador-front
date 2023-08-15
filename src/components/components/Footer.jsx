import React from 'react'
import logo from "../../assets/logo1.ico";

const Footer = () => {
  return (
      <div className=' p-10 w-full border h-24 flex items-center justify-around'>
          <img src={logo} className="w-32 md:w-40 h-28 md:h-32" alt="Logo" />
          <p>@ CopyRigth 2023. Grupo 5 - DH</p>

      </div>
  )
}

export default Footer