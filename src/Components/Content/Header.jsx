import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import ShoppingCartLineIcon from 'remixicon-react/ShoppingCartLineIcon';
import {useFormData} from '../../Contexts/FormContext';
import { TiThMenu } from "react-icons/ti";

function Header() {
  const cartItems = useSelector (state => state.cartItems);
  const {currentUser} = useFormData();
  const {username, imgSrc} = currentUser;
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(prev => !prev);
  }

  return (
    <header className='w-screen bg-slate-900 text-white flex justify-between items-center py-4 px-5 h-[90px]'>
      <div id="first" className='flex gap-3 items-center justify-center'>
        <img src="https://i.pinimg.com/originals/ef/82/4e/ef824ee86efb3ec6cc6eb6758cd5e70c.png" alt="logo"
        className='h-[40px] w-[40px] rounded-full object-cover'
        />
        <Link to='/content/all'>Bazaarify</Link>
      </div>

      <div id="nav-links" className='flex gap-6 items-center justify-center'>
        <Link to={`user/:${username}`} className='flex gap-2 items-center justify-center'>
          <div id="img" className='h-[50px] w-[50px] p-0.5 bg-white rounded-full'>
            <img src={imgSrc ? imgSrc : 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg'} alt={username} className='rounded-full object-cover object-center border-2 border-red-600' />
          </div>
          <span className='text-[12px] md:text-[14px]'>{username}</span>
        </Link>

        <Link to='/content/cart' className='md:hover:text-red-500 md:flex md:gap-2 hidden'>
          <div id="cart" className='flex gap-1'>
            <ShoppingCartLineIcon className='ri-shopping-cart-line' />
            <span className='lineHeight: 0.2px'>cart</span>
          </div>
       </Link>

        <Link to='/login' className='md:block hidden'>Logout</Link>

        <button onClick={handleClick} className='cursor-pointer relative pr-2'>
          <TiThMenu className='text-white font-bold text-lg md:hidden' />
          <ul id='menuList' className={`${!show ? 'hidden transition-all duration-200 ease-in-out' : 'flex flex-col absolute top-8 right-0 gap-2 bg-white p-2 border-2 border-yellow-300 transition-all duration-200 ease-in-out'}`} >
            <li className='flex text-right w-[60px] justify-end  text-slate-900 gap-1'>
              <Link to='/content/cart' className='flex text-right w-[60px] justify-end  text-slate-900 gap-1'>
              <span>Cart</span><ShoppingCartLineIcon className='ri-shopping-cart-line' />
              </Link>
            </li>
            <li className='border-t-2 border-slate-900 w-[60px] justify-end text-slate-900'>
              <Link to='/login'>
                Logout
              </Link>
            </li>
          </ul>
        </button>
      </div>

    </header>
  )
}

export default Header;

