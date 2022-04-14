import React from 'react'
import { Link } from 'react-router-dom'


const News = () => {
  return (
   <div className="bg-white h-screen w-full flex flex-col justify-center items-center">
     <h1 className="lg:text-7xl md:text-5xl sm:text-3xl font-black mb-14">
       MIESTO PRE LEPSI ZIVOT
     </h1>
     <Link  className='py-6 px-10 bg-text text-3xl rounded-full hover:bg-navbar transition duration-300 ease-in-out flex items-center animate-bounce ' to="/">Ubytuj sa teraz</Link>
   </div> 
  )
}

export default News