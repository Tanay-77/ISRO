import React from 'react'

const History = () => {
  return (
   <div>
     <div className='section1'>
      <div className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-48 left-[30vw] bg-red-500 '>
            <img className='h-full w-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/1015px-A._P._J._Abdul_Kalam.jpg" alt="" />
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