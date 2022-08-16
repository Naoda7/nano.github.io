import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import TittleLogo from '../assets/logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const link = [
    {
      id:1,
      link: 'home',
    },

    {
      id:2,
      link: 'portfolio',
    },
    {
      id:3,
      link: 'skill',
    },
    {
      id:4,
      link: 'Contact',
    }
    
  ];

  return (
    <div className='flex justify-between items-center w-full px-[18rem] h-20 text-white bg-colors-primary fixed '>
      <div className=' w-[70px] h-[70px]'>
      <img src={TittleLogo} alt="my logo" className=''/>
      </div>

      <ul className='hidden md:flex'>

        {link.map(({id, link}) => (
          <button 
            key={id} 
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-colors-accent-hover hover:scale-105 duration-200  focus:text-colors-accent'>
            
            <Link to={link} smooth duration={500}>
            {link}
            </Link>
          </button>

        ))}

      </ul>

      <div onClick={()=> setNav(!nav)} className='cursor-pointer pl-[9rem]  z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
      </div>

      {nav &&(
      <ul className='flex flex-col justify-center items-center absolute top-[5rem] left-[15rem] opacity-95 w-[15rem] h-[20rem] rounded-b-[1rem] bg-gradient-to-b from-black to-gray-800 text-white'>

      {link.map(({id, link}) => (
          <li 
            key={id} className='px-4 cursor-pointer capitalize py-6 text-lg'>
            
            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
            {link}
            </Link>
          </li>

        ))}

      </ul>

      )}


    </div>

  )
}

export default NavBar