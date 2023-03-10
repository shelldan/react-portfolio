/*
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
*/

import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookOpen } from 'react-icons/bi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'

function Nav({ currentPage, handlePageChange }){
  const [ activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
        <a href="home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a>
        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => handlePageChange('Experience')} className={currentPage === 'Experience' ? 'active' : ''}><BiBookOpen/></a>
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}


export default Nav

