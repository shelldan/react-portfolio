import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookOpen } from 'react-icons/bi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#' ? 'active' : ''}><BiBookOpen/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav