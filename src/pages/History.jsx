import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Footer from '../components/Footer'

const History = () => {
  const imageDevRef = useRef(null)
  const imageRef = useRef(null)
  const historySection1Ref = useRef(null)
  const historySection2Ref = useRef(null)
  const historySection3Ref = useRef(null)
  const historySection4Ref = useRef(null)
  
  const imageArray = ['https://www.isro.gov.in/media_isro/image/chairmanimages/resized/Sarabhai_medium.jpg.webp',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/1015px-A._P._J._Abdul_Kalam.jpg',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/S_Dhawan.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/MGK_Menon.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/U_R_Rao.jpg.webp',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXA_MWTeChdHisZmwq6ninGsU2unsO5J0U3z_EdGD3agBvUiVAbvQDsl8fs7ShAkLA8YMf3mvWwI7HKnGdYrZNghgZtt8Pypobk9n9b_OlJw',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/kiran.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/dr.k-radhakrishnan-c.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/madhavannair.jpg.webp',
    'https://www.isro.gov.in/media_isro/image/chairmanimages/drksivan1.jpg.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnJoCoQv_yZlgcbNQSfKAZhW_aDdZgTwBtA&s'

  ]
  gsap.registerPlugin(ScrollTrigger)
  
  useGSAP(function(){
    gsap.to(imageDevRef.current,{
      scrollTrigger:{
        trigger:imageDevRef.current,
       
        start:'top 28.1%',
        end:'top -100%',
        pin:true,
        scrub:true,
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else{
            imageIndex = imageArray.length-1
          }
          imageRef.current.src = imageArray[imageIndex]
            
        }
      }
    })

    const sections = [historySection1Ref, historySection2Ref, historySection3Ref, historySection4Ref]
    
    sections.forEach((section) => {
      if (section.current) {
        const textContent = section.current.querySelector('.history-text')
        const imageContent = section.current.querySelector('.history-image')
        
        gsap.fromTo(textContent, 
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section.current,
              start: 'top 80%',
              end: 'top 30%',
              scrub: true,
            }
          }
        )
        
        gsap.fromTo(imageContent,
          { opacity: 0, x: 100, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section.current,
              start: 'top 80%',
              end: 'top 30%',
              scrub: true,
            }
          }
        )
      }
    })
  })
  
  return (
   <div>
     <nav className='fixed top-0 left-0 right-0 z-50 px-12 py-4 bg-black/50 backdrop-blur-sm'>
       <Link to='/'>
         <img src='https://www.firesafetysearch.com/wp-content/uploads/2016/07/Indian-Space-Agency-employs-Sharpeye.gif' alt='ISRO Logo' className='h-16 w-auto' />
       </Link>
     </nav>
     
     <div className='section1'>
      <div ref={imageDevRef} className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-44 left-[30vw] '>
            <img ref={imageRef} className='h-full w-full object-cover' src="https://www.isro.gov.in/media_isro/image/chairmanimages/resized/Sarabhai_medium.jpg.webp" alt="" />
      </div>
      <div className='relative font-[font2] text-white'>
      <div className='mt-[55vh] '>
          <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>History of ISRO</h1>
      </div>
      <div className='pl-[40%] mt-20'>
        <p className='text-6xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Indian Space Research Organisation (ISRO) was founded in 1969 with a vision to harness space technology for national development. From its humble beginnings in a small church in Thumba, ISRO has grown into one of the world’s leading space agencies. </p>
      </div>
    </div>
    </div>

    <div className='w-full h-full py-20 px-10 mt-20'>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        containerClassName="text-white"
        textClassName="text-6xl font-[font2] text-center"
      >
        ISRO stands as a symbol of India's scientific excellence and ambition. With each mission, it continues to explore new frontiers in space technology, research, and innovation — shaping a future driven by discovery.
      </ScrollReveal>
    </div>

    <div className='w-full px-20 py-10 space-y-32'>
      
      <div ref={historySection1Ref} className='flex items-center gap-16 min-h-screen'>
        <div className='history-text flex-1'>
          <h2 className='text-7xl font-bold text-white mb-8 font-[font1]'>1975: Aryabhata</h2>
          <p className='text-3xl text-gray-300 leading-relaxed font-[font2]'>
            India's first satellite, Aryabhata, was launched on April 19, 1975, from the Soviet Union. 
            Named after the ancient Indian mathematician and astronomer, this 360 kg satellite marked India's 
            entry into the space age. Though it had a short operational life, it paved the way for future missions 
            and established ISRO's capability in satellite technology.
          </p>
        </div>
        <div className='history-image flex-1'>
          <img 
            src='https://images.firstpost.com/uploads/2025/04/aryabhata-2025-04-0258a8e831ece2bab19bffb3700d3234.jpg?im=FitAndFill=(596,336)' 
            alt='Aryabhata Satellite' 
            className='w-full h-[600px] object-cover rounded-2xl shadow-2xl'
          />
        </div>
      </div>

      <div ref={historySection2Ref} className='flex items-center gap-16 min-h-screen '>
        <div className='history-text flex-1'>
          <h2 className='text-7xl font-bold text-white mb-8 font-[font1]'>1980: SLV-3 Success</h2>
          <p className='text-3xl text-gray-300 leading-relaxed font-[font2]'>
            On July 18, 1980, India successfully launched its first indigenous Satellite Launch Vehicle (SLV-3), 
            placing the Rohini satellite into orbit. This historic achievement, led by Dr. APJ Abdul Kalam, 
            made India the sixth nation to have satellite launch capability. It was a defining moment that 
            demonstrated India's growing prowess in rocket technology.
          </p>
        </div>
        <div className='history-image flex-1'>
          <img 
            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm9p6gpQX01rRCOJSStq4Nw3fL5p8J80-qyA55HwfL_oOg2NA5VO0yoJr8H514gAGdubT1OA_gi3OKeX3-Zxd_0H4yfh8gsGJ0dMNTzP-fk0xSZGQ-zj8Nuge75h5jfIq6s6aFd1tEc8c/s1600/SLV-3_Launch_Vehicle_1.jpg' 
            alt='SLV-3 Launch' 
            className='w-full h-[600px] object-cover rounded-2xl shadow-2xl'
          />
        </div>
      </div>

      <div ref={historySection3Ref} className='flex items-center gap-16 min-h-screen'>
        <div className='history-text flex-1'>
          <h2 className='text-7xl font-bold text-white mb-8 font-[font1]'>2014: Mangalyaan</h2>
          <p className='text-3xl text-gray-300 leading-relaxed font-[font2]'>
            On September 24, 2014, ISRO's Mars Orbiter Mission (Mangalyaan) successfully entered Mars orbit, 
            making India the first nation to reach Mars on its maiden attempt and the fourth space agency to 
            reach Mars. Completed at a fraction of the cost of similar missions, it showcased ISRO's efficiency 
            and innovation in interplanetary exploration.
          </p>
        </div>
        <div className='history-image flex-1'>
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mars_Orbiter_Mission_Over_Mars_%2815237158879%29.jpg/330px-Mars_Orbiter_Mission_Over_Mars_%2815237158879%29.jpg' 
            alt='Mars Orbiter Mission' 
            className='w-full h-[600px] object-cover rounded-2xl shadow-2xl'
          />
        </div>
      </div>

      <div ref={historySection4Ref} className='flex items-center gap-16 min-h-screen'>
        <div className='history-text flex-1'>
          <h2 className='text-7xl font-bold text-white mb-8 font-[font1]'>2023: Chandrayaan-3</h2>
          <p className='text-3xl text-gray-300 leading-relaxed font-[font2]'>
            On August 23, 2023, India created history when Chandrayaan-3 successfully achieved a soft landing 
            near the lunar south pole. This made India the first country to land near this unexplored region 
            and the fourth nation to achieve a soft landing on the Moon. The mission's rover, Pragyan, 
            explored the lunar surface, conducting vital scientific experiments.
          </p>
        </div>
        <div className='history-image flex-1'>
          <img 
            src='https://science.nasa.gov/wp-content/uploads/2023/06/chandrayaan-3-lander-rover-isro-jpg.webp' 
            alt='Chandrayaan-3' 
            className='w-full h-[600px] object-cover rounded-2xl shadow-2xl'
          />
        </div>
      </div>

    </div>
    
  <div className='h-full pt-20'></div>
    
  <Footer />

   </div>
    
  )
}

export default History