import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-colors-primary'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row md:pl-[0.25rem] '>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-xl sm:text-xl font-normal text-colors-accent'> Hi, I'm Nano</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> Illustrator And UI/UX Designer </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem velit quis nobis eveniet laboriosam delectus, ad obcaecati nam autem ullam non culpa voluptatum, odit ducimus ipsam. Cupiditate, quod atque!
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white  my-2 flex items-center  cursor-pointer'>
                    Show more 
                        <span className='group-hover:rotate-90 duration-200'>
                        <MdOutlineKeyboardArrowRight size={20}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='pb-10'>
                <img src={HeroImage} alt="my hero" className='rounded-full mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  ); 

  
};

export default Home