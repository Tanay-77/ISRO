import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

const Projects = () => {
  const projects =[{
    image1:'',
    image2:''},
    {
    image1:'',
    image2:''},
    {
      image1:'',
      image2:''
    

  }]

  return (
    <div className='text-white p-4'>
      <div className='pt-[30vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase '>Projects</h2>
      </div>
      <div className='-mt-10'>
         <ProjectCard />
      </div>
    </div>
  )
}

export default Projects