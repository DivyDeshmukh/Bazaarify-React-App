import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/cartSlice/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {

  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();
  // console.log(cartItems);

  const handleClick = (item) => {
    dispatch(removeItem(item.id));
  }

  const totalPrice = cartItems.reduce ((acc, curr) => {
    return (acc + curr.price);
  }, 0);

  return (
    <>
      {(cartItems.length) === 0 ? <h1 className='text-2xl text-red-500 font-semibold mt-6'>Nothing in Cart ({cartItems.length})</h1> :

      <>
        
        <div className='flex flex-col justify-start items-center gap-2'>
          <h1 className='text-2xl text-red-500 font-semibold mt-6'>Items in Cart ({cartItems.length})</h1>
          <h3 className='text-xl text-red-500 font-semibold'>Subtotal: ({totalPrice}$)</h3>
          <Link to='../buy'
          className='bg-orange-400 p-2 rounded-lg text-white font-semibold px-3 hover:bg-white hover:border-2 hover:border-orange-400 border-2 border-white hover:text-orange-400'
          >
            <button className='w-full h-full' onClick={() => dispatch(buyData(...cartItems))}>
              Buy All
            </button>
          </Link>
        </div>

        <ul className='grid grid-cols-1 grid-rows-1 gap-8 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-1 w-screen px-12 mt-5'>

          {
            cartItems.map(item => {
              return (
                <li key={item.id} 
                className=' bg-white p-4 border-2 border-black rounded-md flex flex-col gap-4 justify-center items-center transition-all duration-500'
                >
                  <h2>{item.title}</h2>
                  <div id="img" className='border-2 border-black flex justify-center items-center p-2 h-[auto] w-[150px]'>
                    <img src={item.image} alt={item.title} className='object-cover h-full w-full' />
                  </div>
                  <h4>Price: {item.price}$</h4>
                  {/* <h6>Description: {item.description}</h6> */}
                  {/* <h5>Ratings: {item.rating.rate}/5</h5> */}

                  <div id="add" className='flex gap-4'>
                    {/* <Link to='../buy'
                      className='bg-orange-400 p-2 rounded-lg text-white font-semibold px-3 hover:bg-white hover:border-2 hover:border-orange-400 border-2 border-white hover:text-orange-400'
                 
                    >
                      <button className='w-full h-full' onClick={() => dispatch(buyData(item))}>
                        Buy Item
                      </button>
                    </Link> */}

                    <button 
                    className='bg-orange-400 p-2 rounded-lg text-white font-semibold px-3 hover:bg-white hover:border-2 hover:border-orange-400 border-2 border-white hover:text-orange-400'
                    onClick={(e) => handleClick(item)}
                    >Remove Item</button>
                    
                  </div>
                </li>
              )
            })
          }
        </ul>
      </>
      
      }
    </>
  )
}

export default Cart