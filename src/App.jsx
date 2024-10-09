import React, { useEffect, useState } from 'react'

const App = () => {
  const [resolution , setResolution] = useState({width : window.innerWidth , height : window.innerHeight })
  const [screen , setscreen] = useState({sreenType : '' , image: ''})
    const changeResolution =()=>{
       setResolution({
          width : window.innerWidth,
          height : window.innerHeight,
      })
    }
  useEffect(()=>{
    window.addEventListener('resize', changeResolution )
    return ()=>{
      window.removeEventListener('resize', changeResolution)
    }
  },[resolution])

useEffect(()=>{
  if(resolution.width >= 1280 && resolution.height <= 1080){
       setscreen({
        sreenType: 'It is A Monitor',
        image: 'monitor.png'
       })
  }
  else if(resolution.width >= 1024 && resolution.height <= 900){
    setscreen({
      sreenType: 'It is A Laptop',
      image: 'laptop.png'
     })

  }
  else if(resolution.width >= 768 && resolution.height <= 1024 ){
    setscreen({
      sreenType: 'It is A Tablet',
      image: 'tablet.png'
     })
  }
  else{
    setscreen({
      sreenType: 'It is A Smartphone',
      image: 'smartphone.png'
     })
  }
},[resolution])

  return (
    <>
    
  <h1 className='underline text-center text-white  text-4xl font-light  lg:text-4xl md:text-3xl sm:text-lg '>What is My Resolution</h1>  
  <div className='flex justify-center items-center'>
  <img className='lg:w-[800px] md:w-[500px] sm:w-[400px]  ' src={`./assets/images/${screen.image}`} alt="" />
  <h1 className='absolute top-1/3 text-white text-4xl font-light  lg:text-4xl lg:top-1/2 md:text-3xl sm:text-lg sm:top-1/4 '>{resolution.width} X {resolution.height}</h1>
  
  </div> 
  <h1 className='text-center text-white  text-4xl font-light  lg:text-4xl md:text-3xl sm:text-lg '>{screen.sreenType}</h1>
    
    </>
  )
}

export default App