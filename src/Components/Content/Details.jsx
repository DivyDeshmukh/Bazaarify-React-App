import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../../features/cartSlice/cartSlice';
import { useFormData } from '../../Contexts/FormContext';

function Details() {

    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const products = useSelector(state => state.products);
    const cartItems = useSelector(state => state.cartItems);
    const item = products.find(product => product.id == id.slice(1));
    const {currentUser, setCurrentUser} = useFormData();

    const handleClick = () => {
        dispatch(addItem(item));
    }

  return (

    <div className='grid grid-cols-1 grid-rows-1 gap-8 lg:grid-cols-1 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-1 w-screen px-12 mt-4 justify-center'>
        <h1 className='text-2xl text-red-500 font-semibold text-center'>E-Shop</h1>

        <div
        className=' bg-white p-4 border-2 border-black rounded-md flex gap-6 justify-start items-center transition-all duration-500 w-[100%] h-[100%] text-[10px] md:text-[12.5px] md:flex-row flex-col md:justify-center md:items-center'
        >
    
            <div id="img" className='border-2 border-black flex justify-center items-center p-2 h-[auto] w-[225px]'>
                <img src={item.image} alt={item.title}className='object-cover h-full w-full' />
            </div>

            <div id="info" className='flex flex-col gap-4 w-[60%] md:border-l-2 md:border-l-orange-500 md:pl-4'>
                <h2>{item.title}</h2>
                <h4>Price: {item.price}$</h4>
                <h6>Description: {item.description}</h6>
                <h5>Ratings: {item.rating.rate}/5</h5>
            </div>

            <div id="add" className='h-full w-[100%] md:w-[30%] flex md:flex-col md:justify-center md:items-center justify-center items-center gap-2 flex-row md:gap-4 md:border-l-2 md:border-l-orange-500'>

                <h3>Price: {item.price}$</h3>
                <p className='text-red-600'>In Stock</p>
                <label className=' pl-2'>Quantity:-
                <input 
                type='number'
                id='Quantity'
                min={1}
                max={8}
                className=' m-2 pl-2 border-2 border-black'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                />
                </label>

                <button 
                    onClick={handleClick}
                    className='bg-orange-400 p-2 rounded-lg text-white font-semibold px-3 hover:bg-white hover:border-2 hover:border-orange-400 border-2 border-white hover:text-orange-400 mt-3'
                    >Add to cart</button>
            </div>
            
        </div>
    </div>

  )
}

export default Details;


// 
// Apologies for the confusion. Indeed, you can apply onClick on Link and NavLink components in React Router to execute additional logic before navigating. However, it's important to note that if you want to navigate after executing your custom logic, you should call the history.push or history.replace method.