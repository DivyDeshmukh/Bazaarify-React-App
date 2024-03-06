import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Buy() {
    
    const cartItems = useSelector(state => state.cartItems);

    const [accountNumber, setAccountNumber] = useState('');
    
  const totalPrice = cartItems.reduce ((acc, curr) => {
    return (acc + curr.price);
  }, 0).toFixed(4);

  return (
    <>
        <h1 className='text-2xl text-red-500 font-semibold'>Checkout</h1>

        <div id="card" className='flex flex-col md:flex-row justify-start items-start gap-6 bg-white h-auto pb-16 w-[90%] px-2'>
            <div id='items' className='md:w-[50%] mt-5 md:border-r-2 md:border-r-orange-500'>
            <h1 className='text-center mb-2'>Total Items:- {cartItems.length}</h1>
            <ul className='grid grid-cols-1 grid-rows-1 lg:grid-cols-1 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-1 px-12'>

            {
                cartItems.map(item => {
                return (
                    <li key={item.id} 
                    className='p-4 flex gap-4 justify-start items-center transition-all duration-500 border-b-2 border-b-black w-full'
                    >
                    <div id="img" className='border-2 border-black flex justify-center items-center p-2 h-[auto] w-[80px]'>
                        <img src={item.image} alt={item.title} className='object-cover h-full w-full' />
                    </div>

                    <div id="info" className='flex flex-col gap-4 w-[60%] border-l-2 border-l-orange-500 pl-4 text-[13px]'>
                        
                        <h2>{item.title}</h2>
                        {
                            (item.hasOwnProperty('quantity') && <h4>Quantity: {item.quantity}</h4>)
                        }
                        <h4>Price: {item.price}$</h4>

                    </div>
                    
                    </li>
                )
                })
            }
            </ul>

            <h3 className='text-lg mt-5 text-center'>Sub-Total:- {totalPrice}$</h3>
            </div>

            <div id="info" className='md:w-[50%] pb-8 mt-5 pr-4 flex flex-col w-full items-center justify-center'>
                <div id="input" className='flex flex-col items-start justify-center gap-0 w-full'>

                    <div className='flex gap-0 w-full justify-start pl-2 items-center'>
                        <label htmlFor="accountNumber"
                        className='text-[13.75px] md:w-2/6'
                        >Account Number
                            <span className='text-red-600'>*</span>
                        </label>

                        <input type="text"
                        id='accountNumber'
                        className='pr-4 h-[35px] border-[1px] border-gray-300 pl-4 text-[12px] focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px]'
                        placeholder='Enter your account number'
                        value={accountNumber}
                        title='Enter your account number'
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                        />
                    </div>
                    <p className='mt-8 text-center w-full mb-8'>Other Banking Details</p>
                </div>

                <Link to='../payment'
                    className='bg-orange-400 p-2 rounded-lg text-white font-semibold px-3 hover:bg-white hover:border-2 hover:border-orange-400 border-2 border-white hover:text-orange-400'
                >Payment</Link>

            </div>
        </div>
    </>
  );
}

export default Buy;
