import React from 'react'
import { motion } from "framer-motion";
const Pro = () => {
  return (

    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
  >
    <div  className='w-full py-10 text-white  '>
    
    <div className='max-w-[1240px] mx-auto'>

    <p className='text-sm text-[#00FFFF] tracking-[4px]'>TECH STACK</p><br/>
    <h1 className='md-text-6xl sm:text-5xl text-3xl font-bold text-center text-white'>Development Skills</h1>
    

    <div className='max-w-[1250px] max-h-[1500px] mx-auto grid md:grid-cols gap-x-8'>
 
 <div className='bg-gray-900 w-full shadow-xl flex flex-col p-8 my-10 rounded-lg hover:scale-105 duration-300'>

 <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Java Script</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>75%</span>
              </motion.span>
            </span>
          </div>




          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>React</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[82%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>82%</span>
              </motion.span>
            </span>
          </div>




          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Node</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>75%</span>
              </motion.span>
            </span>
          </div>




          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Mongodb & (SQL | NOSQL)
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>80%</span>
              </motion.span>
            </span>
          </div>



          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Html,Css</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[82%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>82%</span>
              </motion.span>
            </span>
          </div>




 </div>
 
 
 <div className='bg-gray-900 w-full shadow-xl flex flex-col p-8 my-10 rounded-lg hover:scale-105 duration-300'>

 <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>JAVA</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[78%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>52%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>51%</span>
              </motion.span>
            </span>
          </div>
         
          
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>C++</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[65%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>48%</span>
              </motion.span>
            </span>
          </div>




       
         
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Git & Github</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-green-500 to-red-500 rounded-md relative'
              >
                <span className='absolute -top-7 right-0'>61%</span>
              </motion.span>
            </span>
          </div>



 </div>
 
 
 </div>
    
    </div></div>
    </motion.div>
  )
}

export default Pro