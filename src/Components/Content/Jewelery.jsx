import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useLoaderData} from 'react-router-dom';
import { prodData } from '../../features/cartSlice/cartSlice';

function Jewelery() {

  const [productsData, setProductsData] = useState(useLoaderData());
  const dispatch = useDispatch();

  useEffect(() => {
    setProductsData(productsData.filter(item => item.category === `jewelery`));
    dispatch(prodData(productsData));
  }, []);


  return (
    <>
      <h1 className='text-2xl text-red-500 font-semibold'>Available Products</h1>

      <ul className='grid grid-cols-1 grid-rows-1 gap-8 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-1 w-screen px-12 mt-5'>

        {
          productsData.map(product => {
            return (
              <li key={product.id} 
              className=' bg-white p-4 border-2 border-black rounded-md flex flex-col gap-4 justify-center items-center hover:scale-[1.1] hover:bg-slate-300 hover:transition-all hover:duration-500 transition-all duration-500'
              >
            Jewelery    <h2>{product.title}</h2>
                <div id="img" className='border-2 border-black flex justify-center items-center p-2 h-[auto] w-[150px]'>
                  <img src={product.image} alt={product.title} className='object-cover h-full w-full' />
                </div>
                <h4>Price: {product.price}$</h4>
                {/* <h6>Description: {product.description}</h6> */}
                <h5>Ratings: {product.rating.rate}/5</h5>

                <div id="add">
                  <Link 
                  to={`../details/:${product.id}`} 
                  className='bg-orange-400 p-2 rounded-lg text-white font-semibold px-3 hover:bg-white hover:border-2 hover:border-orange-400 border-2 border-white hover:text-orange-400'
                  >View Details</Link>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Jewelery;

export const jeweleryProdLoader = async () => {
  const response = await fetch('https://fakestoreapi.com/products/');
  const data = await response.json();
  return data;
}

