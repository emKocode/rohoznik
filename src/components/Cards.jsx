import React from 'react'

import { PhoneIcon } from '@heroicons/react/outline';
import { ChipIcon } from '@heroicons/react/solid';
import obec from '../assets/obec.jpeg'
const Cards = () => {
  return (
    <div className='w-full h-screen mt-24' > 
        <div className='w-full h-[700px] bg-gray-dark absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={obec} alt="funguj" />
        </div>
        
        <div className='max-w-[1240px] mx-auto text-navbar relative'>
            <div className='px-4 py-12'>
            <h2 className='text-3xl pt-8 uppercase text-center'>Rohoznik</h2>
            <h3 className='text-5xl font-bold tpy-6 text-center'>Dozved sa nieco nove</h3>
            <p className='py-4 text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dignissimos blanditiis quos, accusamus eius ratione quibusdam a optio sunt illum cum fuga labore architecto officia assumenda consequatur porro fugit quasi.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-[100px] relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-navbar'>
            <div className='bg-text rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <PhoneIcon className='w-16 p-4 bg-blue text-navbar rounded-lg mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Komunalny odpad</h3>
                    <p className='text-navbar text-xl'>Loreapiente recusandae quidem?</p>
                </div>
                <div className='bg-gray pl-8 py-4'>
                    <p className='flex items-center text-blue'>Konaktujte nas <PhoneIcon className='w-5 ml-2'/></p>
                </div>
            </div>
            <div className='bg-text rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <PhoneIcon className='w-16 p-4 bg-blue text-navbar rounded-lg mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Komunalny odpad</h3>
                    <p className='text-navbar text-xl'>Loreapiente recusandae quidem?</p>
                </div>
                <div className='bg-gray pl-8 py-4'>
                    <p className='flex items-center text-blue'>Konaktujte nas <PhoneIcon className='w-5 ml-2'/></p>
                </div>
            </div>
            <div className='bg-text rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <PhoneIcon className='w-16 p-4 bg-blue text-navbar rounded-lg mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Komunalny odpad</h3>
                    <p className='text-navbar text-xl'>Loreapiente recusandae quidem?</p>
                </div>
                <div className='bg-gray pl-8 py-4'>
                    <p className='flex items-center text-blue'>Konaktujte nas <PhoneIcon className='w-5 ml-2'/></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards