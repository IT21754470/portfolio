import React from 'react'
import single2 from '../assests/my.jpg'
import {
    
    FaLinkedinIn,
      FaGithub,
      FaGoogle,
      FaFacebook,
      FaInstagram
  
  } from 'react-icons/fa'
  
  
  const Footer = () => {
    return (
     
  
        <div className=' w-full py-10 text-white'>
        <div className='max-w-[1240px] mx-auto '>
        <div className='w-40 mx-auto'>
          <img className='w-[100px] h-[100px] rounded-full' src={single2} alt='logo' />
        </div>
        <div className='flex items-center justify-center'>


        
      <div className='block'>
  
      <div className='flex justify-between md:w-[40%] bg-black '>
            <a href='https://www.linkedin.com/in/sathmini-subasinghe-8649022a1/' className=' w-[50px] rounded-md font-medium mx-auto ml-4 my-6 px-2 py-5  shadow-xl shadow-cyan-500/50 hover:scale-105 duration-300' >
              <FaLinkedinIn size={25} bg-black/></a>
              <a href='https://github.com/IT21754470' className='  w-[50px] rounded-md font-medium mx-auto  ml-4 my-6 px-2 py-5 shadow-xl shadow-cyan-500/50 hover:scale-105 duration-300 ' ><FaGithub size={30}  /></a>
             <a href='gmail.com' className=' w-[50px] rounded-md font-medium mx-auto ml-4 my-6 px-2 py-5 shadow-xl shadow-cyan-500/50 hover:scale-105 duration-300'>
             <FaGoogle size={25}  />
                </a>
  
                <a href='gmail.com' className=' w-[50px] rounded-md font-medium mx-auto ml-4 my-6 px-2 py-5 shadow-xl shadow-cyan-500/50 hover:scale-105 duration-300'>
             <FaFacebook size={25}  />
                </a>
                <a href='gmail.com' className=' w-[50px] rounded-md font-medium mx-auto ml-4 my-6 px-2 py-5 shadow-xl shadow-cyan-500/50 hover:scale-105 duration-300'>
             <FaInstagram size={25}  />
                </a>
            
              </div>
  <br/>
              <h1 className='text-gray-400 mx-auto'>© 2024. All rights reserved by Sathmini Subasinghe</h1>
              </div>
  </div>
         </div>
         </div> 
    
    )
  }

export default Footer