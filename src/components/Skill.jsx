import React from 'react'
import skill1 from '../assets/skill/figma.png'
import skill2 from '../assets/skill/xd.png'
import skill3 from '../assets/skill/ps.png'
import skill4 from '../assets/skill/ai.png'
import skill5 from '../assets/skill/corel.png'
import skill6 from '../assets/skill/csp.jpg'
import skill7 from '../assets/skill/html.png'
import skill8 from '../assets/skill/css.png'
import skill9 from '../assets/skill/msword.png'
import skill10 from '../assets/skill/ppt.png'
import skill11 from '../assets/skill/exel.png'


function Skill() {

    const skill = [
      {
        id: 1,
        src: skill1,
        tittle: 'Figma'
      },
      {
        id: 2,
        src: skill2,
        tittle: 'Adobe XD'
      },
      {
        id: 3,
        src: skill3,
        tittle: 'Adobe Photoshop'
      },
      {
        id: 4,
        src: skill4,
        tittle: 'Adobe Illustrator'
      },
      {
        id: 5,
        src: skill5,
        tittle: 'Corel Draw'
      },
      {
        id: 6,
        src: skill6,
        tittle: 'Clip Studio Paint'
      },
      {
        id: 7,
        src: skill7,
        tittle: 'HTML'
      },
      {
        id: 8,
        src: skill8,
        tittle: 'CSS'
      },
      {
        id: 9,
        src: skill9,
        tittle: 'Microsoft Word'
      },
      {
        id: 10,
        src: skill10,
        tittle: 'Microsoft PowerPoint'
      },
      {
        id: 11,
        src: skill11,
        tittle: 'Microsoft Exel'
      }

    ]

  return (
    <div name='skill' className='bg-colors-tertiary w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full sm:h-30 text-white text-center'>
        
        
        <div className='pt-8 pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skill</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-11 gap-8 text-center py-8 px-12 sm:px-0 text-sm'>

            {
              skill.map(({id, src, tittle}) =>(

            <div key={id} 
                 className={'shadows-md hover:scale-105 duration-500 py-2 rounded-lg'}>
              <img src={src} alt="" className='w-10 mx-auto' />
              <p className='mt-4'>{tittle}</p>
            </div>

              ))
            }

        </div>

      </div>
    </div>
  )
}

export default Skill