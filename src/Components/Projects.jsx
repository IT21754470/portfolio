
import React from 'react'
import single from '../assests/img1.png'
import single1 from '../assests/img3.png'
import single2 from '../assests/img4.png'

const Projects = () => {
  return (
    <div className='w-full py-10 text-white min-h-[500px]'> {/* Set a minimum height */}
    <div className='max-w-[1240px] mx-auto'>
      <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold text-center text-white'> My Projects</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-x-8'>

          <div className='bg-gray-900 w-full shadow-xl flex flex-col p-8 my-10 rounded-lg hover:scale-105 duration-300 shadow-xl shadow-gray-500'>

            <img className='w-100 mx-auto  bg-white' src={single} alt="" /><br />
            <h1 className='font-bold md-text-xl sm:2xl text-xl  py-1 border-b mx-2 text-[#00FFFF]'>Ayurwedic Package Management System</h1><br />
            <p className='text-gray-200'>I learning in creating responsive and user-friendly web applications using HTML, CSS, and React with tailwind css.
              I excel at bringing to life beautiful and functional interfaces that meet the needs of end-users.I tried to do my best to give hardworking and passionate responsive websites.</p>

          </div>



          <div className='bg-gray-900 w-full shadow-xl flex flex-col p-8 my-10 rounded-lg hover:scale-105 duration-300 shadow-xl shadow-gray-500'>

            <img className='w-100 mx-auto  bg-white' src={single1} alt="" /><br />
            <h1 className='font-bold md-text-xl sm:2xl text-xl  py-1 border-b mx-2 text-[#00FFFF]'>Food-Ordering System</h1><br />
            <p className='text-gray-200'>I learning in creating responsive and user-friendly web applications using HTML, CSS, and React with tailwind css.
              I excel at bringing to life beautiful and functional interfaces that meet the needs of end-users.I tried to do my best to give hardworking and passionate responsive websites.</p>

          </div>

          <div className='bg-gray-900 w-full shadow-xl flex flex-col p-8 my-10 rounded-lg hover:scale-105 duration-300 shadow-xl shadow-gray-500'>

            <img className='w-100 mx-auto  bg-white' src={single2} alt="" /><br />
            <h1 className='font-bold md-text-xl sm:2xl text-xl  py-1 border-b mx-2 text-[#00FFFF]'>E-Commerce site</h1><br />
            <p className='text-gray-200'>I learning in creating responsive and user-friendly web applications using HTML, CSS, and React with tailwind css.
              I excel at bringing to life beautiful and functional interfaces that meet the needs of end-users.I tried to do my best to give hardworking and passionate responsive websites.</p>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Projects