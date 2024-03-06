import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Form/formHeader/FormHeader';
import '../index.css';

function App() {

  return (
    <>
      <Header />

        <div style={{height: 'calc(100vh - 96px)'}} className='w-full bg-slate-100 flex flex-col items-center justify-center'>

          <h1 className='text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-red-500'>Welcome to Bazaarify...</h1>
          
          <div id="container" className='flex items-center justify-center gap-6 lg:flex-row flex-col'>
            <div id="imgInApp" className='h-[30vh] w-[30vw]'
            // style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/013/976/267/non_2x/online-shopping-concept-girl-sitting-with-a-laptop-and-shopping-bags-internet-order-service-flat-illustration-vector.jpg)', backgroundSize: 'cover'}}
            >
              {/* <img src="https://static.vecteezy.com/system/resources/previews/013/976/267/non_2x/online-shopping-concept-girl-sitting-with-a-laptop-and-shopping-bags-internet-order-service-flat-illustration-vector.jpg" alt="welcome"
              className='h-full w-full object-cover rounded-3xl'
              /> */}
            </div>

            <ul className='flex gap-8 p-4 lg:flex-col'>
              
              <li className=' px-4 bg-orange-500 font-semibold border-2 rounded-lg text-white text-[17px] py-[5px] hover:border-2 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 flex justify-center items-center'>
                <Link to='login'>Login</Link>
              </li>

              <li className=' px-4 bg-orange-500 font-semibold border-2 rounded-lg text-white text-[17px] py-[5px] hover:border-2 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 flex justify-center items-center'>
                <Link to='registration/step1'>Registration</Link>
              </li>

            </ul>
          </div>

        </div>


    </>
  )
}

export default App
