import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='text-white font-[font2] flex items-center justify-center gap-3'>
  <Link to='/projects' className='text-[6vw]  leading-[6vw] uppercase border-4 border-solid border-white rounded-full px-10 pt-1 pb-0 hover:border-blue-400 hover:text-blue-400 '>Projects</Link>
  <Link to='/history' className='text-[6vw] leading-[6vw] uppercase border-4 border-solid border-white rounded-full px-10 pt-1 pb-0  '>History</Link>
    </div>
  )
}

export default HomeBottomText