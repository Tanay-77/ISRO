import React from 'react'

const ProjectCard = () => {
  return (
    <div className='w-full h-[700px]  flex gap-4 mb-4'>
          <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[50px] overflow-hidden'>
          <img className='h-full w-full object-cover' src="https://www.isro.gov.in/media_isro/image/index/Recent/lvm3m5_rec03.png.webp" alt="" />
          <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='font-[font1] text-4xl text-black border-black border-2 pt-2 px-4 rounded-full '>LVM3-M5/CMS-03 Mission</h2>
          </div>
          </div>
          <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[50px] overflow-hidden'>
          <img className='h-full w-full object-cover' src="https://www.isro.gov.in/media_isro/image/index/Recent/lvm3m5_rec03.png.webp" alt="" />
          <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='font-[font1] text-4xl text-black border-black border-2 pt-2 px-4 rounded-full '>LVM3-M5/CMS-03 Mission</h2>
          </div>
          </div>
        </div>
  )
}

export default ProjectCard