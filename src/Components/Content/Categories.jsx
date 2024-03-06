import React from 'react'
import { NavLink } from 'react-router-dom';

function Categories() {

  return (

    <div id='categories' className='px-4 justify-center flex flex-wrap mt-6 gap-4 mb-2'>
      <NavLink to='all' className='p-2 bg-orange-400 text-white rounded-lg text-[12.5px] font-semibold hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 px-4'>All</NavLink>
      <NavLink to='mens' className='p-2 bg-orange-400 text-white rounded-lg text-[12.5px] font-semibold hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 px-4'>Mens</NavLink>
      <NavLink to='womens' className='p-2 bg-orange-400 text-white rounded-lg text-[12.5px] font-semibold hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 px-4'>Womens </NavLink>
      <NavLink to='electronics' className='p-2 bg-orange-400 text-white rounded-lg text-[12.5px] font-semibold hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 px-4'>Electronics</NavLink>
      <NavLink to='jewelery' className='p-2 bg-orange-400 text-white rounded-lg text-[12.5px] font-semibold hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 px-4'>Jewelery</NavLink>
    </div>
  )
}

export default Categories;

