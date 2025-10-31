import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  useGSAP(function(){

    const tl = gsap.timeline()
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.3
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
  })
  return (
    <div>

      <div className='h-screen w-full flex fixed z-20 top-0'>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
        <div className='stair h-full w-1/5 bg-white'></div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={<History/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App