import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
          <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[50px] overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image1} alt="" />
          <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='font-[font1] text-4xl text-white border-white border-2 pt-2 px-4 rounded-full '>{props.text1}</h2>
          </div>
          </div>
          <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[50px] overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image2} alt="" />
          <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='font-[font1] text-4xl text-white border-white border-2 pt-2 px-4 rounded-full '>{props.text2}</h2>
          </div>
          </div>
        </>
  )
}

export default ProjectCard