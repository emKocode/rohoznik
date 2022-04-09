import React, {useState} from 'react'

import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)




  return (
    <div className='w-screen h-[80px] z-10 bg-navbar drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mx-[30px] sm:text-4xl text-text'>Rohoznik</h1>
          </div>
          <div className='flex'>
          <ul className='hidden md:flex justify-between'>
              <li>Domov</li>
              <li>Samosprava</li>
              <li>Zverejnovanie</li>
              <li>Zivot v obci</li>
            </ul>
          </div>
          <div className='md:hidden' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
          </div>
        </div>
  

    <ul className={!nav ? 'hidden' : 'absolute bg-navbar w-full px-8 py-5'}>
              <li className='border-b-2 border-text w-full'>Domov</li>
              <li className='border-b-2 border-text w-full'>Samosprava</li>
              <li className='border-b-2 border-text w-full'>Zverejnovanie</li>
              <li className='border-b-2 border-text w-full'>Zivot v obci</li>
    </ul>


    </div>
  )
}

export default Navbar