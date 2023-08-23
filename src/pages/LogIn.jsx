import React from 'react'
import LoginForm from '../components/components/LoginForm'
import user from "../assets/user.png"


const LogIn = () => {
  return (
    <div className='m-w-full mt-10 mb-10 flex flex-col justify-center items-center ' style={{height:"70vh"}} >
      <div className='  md:w-2/3  lg:w-1/3  md:border-4 rounded flex justify-center items-center ' style={{height:"70vh"}}>
        <LoginForm className="" />
      </div>
    </div>

  )
}

export default LogIn