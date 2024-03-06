import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='h-24 w-screen p-4 flex justify-center items-center bg-slate-900 border-b-[2px] border-orange-500 gap-4 relative'>
            <p className='text-white text-[9px] md:text-[12px] font-bold absolute left-1 md:left-4'>&copy; DivyDeshmukh</p>
            <img src="https://i.pinimg.com/originals/ef/82/4e/ef824ee86efb3ec6cc6eb6758cd5e70c.png" alt="logo"
            className='h-[40px] w-[40px] rounded-full object-cover'
            />
            <h1 className='text-white font-bold text-lg md:text-2xl '>Bazaarify</h1>
            <div id="links">
                <Link to='https://divydeshmukh.github.io/Portfolio/' 
                className='text-white absolute font-semibold right-8 top-[35%]'
                >Contact</Link>
            </div>
        </div>
    )
}

export default Header;

