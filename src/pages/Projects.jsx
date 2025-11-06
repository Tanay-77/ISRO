import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

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
      text2:'Mars Orbiter Mission'
    

  }]


  return (
    <div className='text-white p-4'>
      <div className='pt-[30vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase '>Projects</h2>
      </div>
      <div className='-mt-10'>
         {projects.map((elem, index)=>{
          return <ProjectCard key={index} image1={elem.image1}  image2={elem.image2} text1={elem.text1} text2={elem.text2} />

         })}
      </div>
    </div>
  )
}

export default Projects