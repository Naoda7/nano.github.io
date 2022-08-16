import React from 'react'
import Porto1 from '../assets/portfolio/ts1.png'
import Porto2 from '../assets/portfolio/ts6.png'
import Porto3 from '../assets/portfolio/ts3.png'
import Porto4 from '../assets/portfolio/ts2.png'
import Porto5 from '../assets/portfolio/ts5.png'
import Porto6 from '../assets/portfolio/ts4.png'

function Portofolio() {

    const portofolio =[
        {
            id:1,
            src: Porto1,
            href: ""
        },
        {
            id:2,
            src: Porto2,
            href: ""
        },
        {
            id:3,
            src: Porto3,
            href: ""
        },
        {
            id:4,
            src: Porto4,
            href: ""
        },
        {
            id:5,
            src: Porto5,
            href: ""
        },
        {
            id:6,
            src: Porto6,
            href: ""
        },
    ] 

  return (
    <div name="portfolio" className='bg-colors-secondary w-full text-white md:h-full text-center'>
        <div className='max-w-screen-lg p-3 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-[3rem]'>
                <p className='text-4xl font-bold inline border-b-4 border-colors-accent'>Portofolio</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-[3rem]'>
            {
            portofolio.map(({id, src, href }) => (
                <div key={id} className='shadow-sm shadow-gray-800 rounded-lg bg-colors-primary'>
                    <img src={src} alt="" className='rounded-t-md duration-200 hover:scale-125 md:hover:scale-[2]'/>
                    <div className='flex items-center justify-center'>
                        <a href={href} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-105'>
                        <button>Demo</button>
                        </a>
                    </div>
                </div>
            
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portofolio