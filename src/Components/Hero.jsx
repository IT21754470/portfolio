import React from 'react';
import Typed from 'react-typed';
import single2 from '../assests/my.jpg';
import { FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='w-full py-10 text-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-x-8'>
    
        <div className='md:col-span-2 col-span-full flex flex-col justify-center'>
          <h1 className='md:text-xl sm:text-xl text-xl py-16'>
            Welcome to my portfolio...🙋‍♀️👀!
          </h1>

          <h1 className='md:text-7xl sm:text-6xl text-xl font-bold md:py-4 font-serif'>
            Hi,<span className='text-[#00FFFF] '> I'm Sathmini </span>
          </h1>
          <br />

          <Typed
            className='md:text-5xl sm:text-3xl text-3xl font-bold'
            strings={['Front-End Developer.', 'A Information Technology Undergraduate.']}
            typeSpeed={90}
            backSpeed={90}
            loop
          />
          <br />
          <p className='md:text-2xl sm:text-xl text-xl text-gray-400'>
            I am a BSc (Hons) Information Technology student at the Sri Lanka Institute of Information
            Technology with strong coding skills in HTML, CSS, React, JavaScript, Tailwind CSS, and
            additionally Python and Java. I am familiar with various software development methodologies
            and eager to contribute to meaningful projects with a dynamic team. Passionate about software
            engineering, I am constantly learning and improving my skills to develop innovative solutions
            that solve real-world problems.
          </p>
          <br />
          <br />
          <br />

          <div>
            <p className='font-bold md:text-xl sm:text-xl text-xl '> FIND ME ON</p>

            <div className='block'>
              <div className='flex justify-between md:w-[40%] bg-black'>
                <a
                  href='https://www.linkedin.com/in/sathmini-subasinghe-8649022a1/'
                  className='w-[50px] rounded-md font-medium mx-auto ml-4 my-6 px-2 py-5  shadow-xl shadow-cyan-500/50 hover:scale-105 duration-300'
                >
                  <FaLinkedinIn size={25} bg-black />
                </a>
                <a
                  href='https://github.com/IT21754470'
                  className='w-[50px] rounded-md font-medium mx-auto ml-4 my-6 px-2 py-5 shadow-xl shadow-cyan-500/50 hover:scale-105 duration-300'
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href='gmail.com'
                  className='w-[50px] rounded-md font-medium mx-auto ml-4 my-6 px-2 py-5 shadow-xl shadow-cyan-500/50 hover:scale-105 duration-300'
                >
                  <FaGoogle size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (1/3 of the screen) */}
        <div className='md:col-span-1 col-span-full flex flex-col justify-center items-center'>
          <img
            className='w-[250px] h-[250px] md:w-[395px] md:h-[400px] rounded-full z-20 mt-8 mb-4 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-10 outline-color:white'
            src={single2}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
