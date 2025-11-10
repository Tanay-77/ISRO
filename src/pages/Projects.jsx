import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Projects = () => {
  const projects =[{
    image1:'https://www.isro.gov.in/media_isro/image/index/Recent/lvm3m5_rec03.png.webp',
    text1:'LVM3-M5/CMS-03 Mission',
    image2:'https://www.isro.gov.in/media_isro/image/index/Recent/gslvf16_rec.png.webp',
    text2:'GSLV-F16/NISAR Mission'},
    {
    image1:'https://www.isro.gov.in/media_isro/image/index/Recent/pslvc61_recent.jpg',
    text1:'PSLV-C61 / EOS-09 Mission',
    image2:'https://www.isro.gov.in/media_isro/image/index/Recent/gslvf15_rec.png',
    text2:'GSLV-F15 / NVS-02 MISSION'},
    {
      image1:'https://cdn.britannica.com/92/126092-050-7A610AAE/Artist-conception-lunar-probe-Chandrayaan-1.jpg',
      text1:'Chandrayaan',
      image2:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mars_Orbiter_Mission_Over_Mars_%2815237158879%29.jpg/330px-Mars_Orbiter_Mission_Over_Mars_%2815237158879%29.jpg',
      text2:'Mars Orbiter Mission'},
      {
        image1:'https://www.isro.gov.in/media_isro/image/TVD1/BPT_9811.jpg.webp',
        text1:'Gaganyaan',  
        image2:'https://www.isro.gov.in/media_isro/image/index/SPADEX/spadex4301224.jpg',
        text2:'PSLV C60/SPADEX'
    

  }]

  gsap.registerPlugin(ScrollTrigger)

useGSAP(() => {
  document.querySelectorAll(".hero").forEach((img) => {
    gsap.from(img, {
      scaleY: 0.2,        // start small vertically
      opacity: 0.4,       // fade in smoothly
      transformOrigin: "top center",
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 90%",   
        end: "bottom 20%",  
        scrub: true,
      }
    });
  });
});



  return (
    <div className='text-white p-4'>
      {/* ISRO Logo Navigation */}
      <nav className=' top-0 left-0 right-0 z-50 px-12 py-4 bg-black/50 backdrop-blur-sm'>
        <Link to='/'>
          <img src='https://www.firesafetysearch.com/wp-content/uploads/2016/07/Indian-Space-Agency-employs-Sharpeye.gif' alt='ISRO Logo' className='h-16 w-auto' />
        </Link>
      </nav>
      
      <div className='pt-[30vh] text-center '>
        <h2 className='font-[font2] text-[9vw] uppercase -mt-20'>Projects</h2>
      </div>
    <div className='-mt-0 lol'>
      {projects.map((elem, index)=>{
       return <div className='hero w-full h-[700px]  flex gap-4 mb-4'>
        <ProjectCard key={index} image1={elem.image1}  image2={elem.image2} text1={elem.text1} text2={elem.text2} />
      </div>
      })}
    </div>
    <Footer />
    </div>
  )
}

export default Projects