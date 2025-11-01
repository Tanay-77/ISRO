import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='text-white font-[font2] flex gap-6 items-center'>
      <Link to='/projects' className='text-lg uppercase border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-semibold flex items-center gap-2 group'>
        Projects
        <span className='group-hover:translate-x-1 transition'>→</span>
      </Link>
      <Link to='/history' className='text-lg uppercase border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-semibold flex items-center gap-2 group'>
        History
        <span className='group-hover:translate-x-1 transition'>→</span>
      </Link>
    </div>
  )
}

export default HomeBottomText