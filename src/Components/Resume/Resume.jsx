import React, { useState } from 'react'; // Import useState from 'react'
import resume from '../../assests/my resume2.pdf'; // Fix typo in 'assets'
import { Link } from 'react-router-dom';
import Cer from './Certificates.jsx'
import Ex from './Ex.jsx';
import Edu from './Education.jsx';
import Pro from './Pro.jsx';


const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  const [certificatetData, setCertificateData] = useState(false); // Typo in variable name

  return (
    <div className='w-full py-10 text-white'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='md-text-6xl sm:text-5xl text-3xl font-bold text-center text-white'> My Resume</h1>
        <a href={resume} className='bg-[#00FFFF] w-[250px] rounded-md font-medium my-20 mx-auto  py-3 text-black flex items-center justify-center'>Click Here to Download My CV</a>
        
        <div className='max-w-[1240px] max-h-[1240px] mx-auto grid md:grid-cols-4 gap-x-8'>
          <div className='w-full shadow-xl flex flex-col p-5 my-8 rounded-lg hover:scale-105 duration-300 hover:outline'>
            <button onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
              setCertificateData(false);
            }}>Education</button>
         
          </div>

          <div className='-900 w-full shadow-xl flex flex-col p-5 my-8 rounded-lg hover:scale-105 duration-300 hover:outline'>
            <button onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(false);
              setCertificateData(true);
            }}>Certification</button>
          </div>

          <div className='w-full shadow-xl flex flex-col p-5 my-8 rounded-lg hover:scale-105 duration-300 hover:outline'>
            <button onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
              setCertificateData(false);
            }}>Professional Skills</button>
          </div>

          <div className='w-full shadow-xl flex flex-col p-5 my-8 rounded-lg hover:scale-105 duration-300 hover:outline'>
            <button onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
              setCertificateData(false);
            }}>Experience</button>
            
          </div>

        
        </div>
        {educationData && <Edu />}
        {certificatetData && <Cer />}
        {experienceData&& <Ex/>}
        {skillData&& <Pro/>}
      </div>
    </div>
  );
}

export default Resume;
