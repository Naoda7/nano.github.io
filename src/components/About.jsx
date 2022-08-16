import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero delectus facere, aspernatur dignissimos sed saepe obcaecati tempore tenetur nisi, minima quae eos, esse ab sint! Dicta beatae neque debitis ullam?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quia quam aliquam veritatis dolorem beatae sequi, maxime eius eum qui eligendi facere iure officia, deleniti alias perferendis nemo? Harum, labore?
            </p>
        </div>
    </div>
  )
}

export default About