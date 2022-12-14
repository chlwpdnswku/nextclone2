import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p>
          <p className='py-2 text-gray-600'>
            안녕하십니까 저는 현재 html css와 자바스크립트 스킬을 가지고있고
            프론트쪽을 공부하고 있습니다. 마지막 종강전에 프로젝트를 한번 만들어
            보고 싶습니다 잘부탁 드립니다 ~
          </p>
          <p className='py-2 text-gray-600'>
            안녕하세요 저는 현재 자바와 자바 스프링을 공부중이고 서버쪽에
            관심이있어서 백앤드 쪽으로 개발을 하고 있습니다 . 프론트앤드 부분이
            부족하여 프론트앤드 쪽과 협업하여 포트폴리오를만들고 싶습니다 !
          </p>
          <Link href=''>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
