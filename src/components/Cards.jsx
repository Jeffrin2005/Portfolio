import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single User"/>
          <h2 className='text-2xl font-bold text-center py-8'>Beginner DSA</h2>
          <p className='text-center text-4xl font-bold'>$49</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Access to basic problems</p>
            <p className='py-2 border-b mx-8'>Introduction to algorithms</p>
            <p className='py-2 border-b mx-8'>Community support</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Start Learning</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="Double User"/>
          <h2 className='text-2xl font-bold text-center py-8'>Intermediate DSA</h2>
          <p className='text-center text-4xl font-bold'>$99</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Intermediate problem sets</p>
            <p className='py-2 border-b mx-8'>Data structures deep dive</p>
            <p className='py-2 border-b mx-8'>One-on-one mentoring sessions</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Enhance Skills</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="Triple User"/>
          <h2 className='text-2xl font-bold text-center py-8'>Advanced DSA</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Advanced algorithms</p>
            <p className='py-2 border-b mx-8'>Complex data structure problems</p>
            <p className='py-2 border-b mx-8'>Access to competitive programming contests</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Master DSA</button>
        </div>
      </div>
    </div>
  )
}

export default Cards