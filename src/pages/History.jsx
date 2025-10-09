import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
const History = () => {
  const imageDevRef = useRef(null)
  const imageRef =useRef(null)
  const imageArray = ['https://www.isro.gov.in/media_isro/image/chairmanimages/resized/Sarabhai_medium.jpg.webp',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/1015px-A._P._J._Abdul_Kalam.jpg',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/S_Dhawan.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/MGK_Menon.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/U_R_Rao.jpg.webp',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXA_MWTeChdHisZmwq6ninGsU2unsO5J0U3z_EdGD3agBvUiVAbvQDsl8fs7ShAkLA8YMf3mvWwI7HKnGdYrZNghgZtt8Pypobk9n9b_OlJw',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/madhavannair.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/drksivan1.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairman.png.webp'

  ]
  gsap.registerPlugin(ScrollTrigger)
  
  useGSAP(function(){
    gsap.to(imageDevRef.current,{
      scrollTrigger:{
        trigger:imageDevRef.current,
        markers:true,
        start:'top 28.1%',
        end:'top -100%',
        pin:true,
        scrub:true
      }
    })
  })
  
  return (
   <div>
     <div className='section1'>
      <div ref={imageDevRef} className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-44 left-[30vw] bg-red-500 '>
            <img ref={imageRef} className='h-full w-full object-cover' src="https://www.isro.gov.in/media_isro/image/chairmanimages/resized/Sarabhai_medium.jpg.webp" alt="" />
      </div>
      <div className='relative font-[font2] text-white'>
      <div className='mt-[55vh] '>
          <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>History of ISRO</h1>
      </div>
      <div className='pl-[40%] mt-20'>
        <p className='text-6xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indian Space Research Organisation (ISRO) is the space agency of India. The organisation is involved in science, engineering and technology to harvest the benefits of outer space for India and the mankind. </p>
      </div>
    </div>
    </div>
    <div className="section2 h-screen"></div>
   </div>
    
  )
}

export default History