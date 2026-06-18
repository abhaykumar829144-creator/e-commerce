"use client"
import React from 'react'
import "./Header.css"
import { GoHomeFill } from 'react-icons/go'
import { FaUser } from 'react-icons/fa'
import { BsCart4 } from 'react-icons/bs'

import "./Header.css";

const Header : React.FC = () => {
  return (
    <>
    <div className="main_header">
      <div className="header_left">
        <div className='header_left_icon'><GoHomeFill /></div>
        <div className='header_title'>shop Ease</div>
      </div>
      
        <div className="header_right">
          <div className='header_right_icon'><FaUser /></div>
          <div className='header_right_icon'><BsCart4 /></div>
        </div>
      </div>
    </>
  )
}

export default Header