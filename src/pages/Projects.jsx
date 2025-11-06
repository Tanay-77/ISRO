import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

const Projects = () => {
  const projects =[{
    image1:'https://www.isro.gov.in/media_isro/image/index/Recent/lvm3m5_rec03.png.webp',
    image2:'https://www.isro.gov.in/media_isro/image/index/Recent/gslvf16_rec.png.webp'},
    {
    image1:'https://www.isro.gov.in/media_isro/image/index/Recent/pslvc61_recent.jpg',
    image2:'https://www.isro.gov.in/media_isro/image/index/Recent/gslvf15_rec.png'},
    {
      image1:'https://cdn.britannica.com/92/126092-050-7A610AAE/Artist-conception-lunar-probe-Chandrayaan-1.jpg',
      image2:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mars_Orbiter_Mission_Over_Mars_%2815237158879%29.jpg/330px-Mars_Orbiter_Mission_Over_Mars_%2815237158879%29.jpg'
    

  }]


  return (
    <div className='text-white p-4'>
      <div className='pt-[30vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase '>Projects</h2>
      </div>
      <div className='-mt-10'>
         {projects.map((elem, index)=>{
          return <ProjectCard key={index} image1={elem.image1}  image2={elem.image2} />

         })}
      </div>
    </div>
  )
}

export default Projects