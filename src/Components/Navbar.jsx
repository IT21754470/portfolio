import React ,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import Hero from './Hero.jsx'


const Navbar= ()=> {
    const [nav, setNav] = useState(true)


    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className='px-10 w-full h-24 text-white sticky top-0 z-50 bg-black mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>

    <h1 className="w-full mx-10 text-4xl font-bold text-white">Portfoilo</h1>
 
    <ul className=' hidden md:flex text-gray-400 content  mx-auto  '>
 
     <li className='p-4'>Home </li>
     <li className='p-4'>Features</li>
     <li className='p-4'>Projects</li>
     <li className='p-4'>Resume</li>
     <li className='p-4'>Contact</li>
  <hr/>
 
    </ul>
    <div onClick={handleNav} className='block md:hidden text-[#00FFFF] ' >
        {!nav ?<AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
   
 
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r- gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
    <h1 className="w-full  text-3xl font-bold text-white m-4">Portfoilo</h1>
    <ul className="uppercase p-4">
 
 <li className="p-4 border-b border-gray-600">Home</li>
 <li className='p-4 border-b border-gray-600'>Features</li>
 <li className='p-4 border-b border-gray-600'>Projects</li>
 <li className='p-4 border-b border-gray-600'>Resume</li>
 <li className='p-4 border-b border-gray-600'>Contact</li>

 
 </ul>
 
    </div>
    <ul>
 
    </ul>
     </div>
  )
}

export default Navbar





