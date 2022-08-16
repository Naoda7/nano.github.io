import React from 'react'

const footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
            <div className='flex w-full h-25  bg-colors-primary  justify-center'>
                <p className='text-base font-normal p-8 text-gray-500'> {year}</p>
            </div>
    )
}

export default footer