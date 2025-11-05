import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stair = () => {
    const stairPat = useRef(null)
    const currentPath = useLocation().pathname

  useGSAP(function(){
   

    const tl = gsap.timeline()
      tl.from(stairPat.current,{
      display:'block'
    })

    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairPat.current,{
      display:'none'
    })
    
    
  },[currentPath])
  return (
    <div>
        <div className='h-screen w-full fixed z-[100] top-0 pointer-events-none'>
            <div ref={stairPat} className='h-full w-full flex'>
            <div className='stair h-full w-1/5 bg-white'></div>
            <div className='stair h-full w-1/5 bg-white'></div>
            <div className='stair h-full w-1/5 bg-white'></div>
            <div className='stair h-full w-1/5 bg-white'></div>
            <div className='stair h-full w-1/5 bg-white'></div>
            </div>
    </div>
    </div>
  )
}

export default Stair