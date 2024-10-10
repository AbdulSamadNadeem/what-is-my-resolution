import React,{useState ,useEffect, useContext} from 'react'
import { ChangeTheme } from './Context/theme'

const Resolution = () => {
    const {isThemeDark , setisThemeDark} = useContext(ChangeTheme)
    console.log(isThemeDark)
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
      return ()=>{
        window.removeEventListener('resize', changeResolution)
      }
    },[resolution])
   
    useEffect(()=>{
        if(isThemeDark){
            document.body.style.backgroundImage = 'linear-gradient(to right , #8b5cf6 , #d946ef)'
        }
        else{
             document.body.style.backgroundImage = 'linear-gradient(to right , #0ea5e9 , #6366f1)'
        }
    })
  
  return (
    <>

<div className='flex flex-col justify-center items-center gap-6 sm:gap-10'>
<h1 className='underline text-center text-white  text-4xl font-light  lg:text-4xl md:text-3xl sm:text-lg '>What is My Resolution</h1> 
<h1 className='text-center  text-white  text-4xl font-light  lg:text-4xl md:text-3xl sm:text-lg '>{screen.sreenType}</h1>
<button className='border-2 w-40 h-10 rounded-lg font-bold text-white transition-transform hover:scale-110 duration-300 sm:w-28 text-sm sm:h-8' onClick={()=>setisThemeDark(!isThemeDark)}>{isThemeDark ? 'Blue Horizon' : 'Electric Blossom '}</button> 
</div>
  <div className='flex justify-center items-center'>
  <img className='lg:w-[800px] md:w-[500px] sm:w-[400px]  ' src={`./assets/images/${screen.image}`} alt="" />
  <h1 className='absolute  text-white text-4xl font-light  lg:text-4xl  md:text-3xl sm:text-lg  '>{resolution.width} X {resolution.height}</h1>
  
  </div> 
  

    
    </>
  )
    

  
}

export default Resolution