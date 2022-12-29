import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiStackoverflow } from 'react-icons/si'

/* target='_blank' Opens the linked document in a new window or tab */
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a> 
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://stackoverflow.com" target="_blank"><SiStackoverflow/></a>
    </div>
  )
}

export default HeaderSocials