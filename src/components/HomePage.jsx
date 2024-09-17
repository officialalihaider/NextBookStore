import React from 'react'
import banner from '../assets/banner.png';
import { NavLink } from 'react-router-dom';
import FeaturedBooks from './FeaturedBooks';

const HomePage = () => {
  return (
    <>
      <div className="banner flex w-[98vw] min-h-[70vh]  m-auto  items-center mt-[5rem] mb-10 p-5 max-md:flex-col max-md:gap-2 max-sm:gap-1 max-md:p-0 max-md:mb-0">
        <div className="left w-1/2 pl-10 max-md:order-2 max-md:w-[95%] max-md:p-2  ">
          <h1 className='text-5xl max-md:text-4xl max-sm:text-3xl'>Welcome to <span className='font-bold text-[#E22F2F]'>NextBookStore</span></h1>
          <p className='mt-5 text-lg text-justify max-md:line-clamp-3 max-md:text-base max-sm:text-sm max-md:mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eaque fuga necessitatibus cum neque! Eius tenetur voluptatibus dolorum, magni quos saepe omnis molestias aliquam aperiam iste repellat in repellendus possimus voluptas quis quia atque eos aliquid natus sapiente perspiciatis velit? Hic consectetur earum quisquam aut modi tempore architecto pariatur voluptatibus cum tempora. Autem quasi distinctio eum.<span className='opacity-50'>.....</span></p>
          <button className='bg-transparent border-2 border-slate-700 rounded-lg p-2 px-4 mt-5 transition-transform hover:border-slate-800 hover:scale-105 max-md:text-sm'><NavLink to="/about">Learn More</NavLink></button>
        </div>
        <div className="right w-1/2 flex justify-center items-center max-md:order-1 max-md:w-[95%]">
          <img src={banner} alt="banner" className='w-[80%] max-md:w-full' />
        </div>
      </div>
      <FeaturedBooks />
    </>
  )
}

export default HomePage