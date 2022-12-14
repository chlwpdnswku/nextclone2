import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';

function Main() {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-500'>Hi</p>
          <h1 className='py-4  text-gray-700'>
            나는 <span className='text-[#5651e5]'>할수</span> 있다
          </h1>
          <h1 className='py-2  text-gray-700'>
            즐기자 열심히 넌 최고다 넌 잘하고있다
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-center'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
