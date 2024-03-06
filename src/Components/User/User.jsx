import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartLineIcon from 'remixicon-react/ShoppingCartLineIcon';
import { useFormData } from '../../Contexts/FormContext';

function User() {

    const {currentUser} = useFormData();
    const {imgSrc, firstName, lastName, username, dob, occupation} = currentUser;

  return (
    <div id="card" className='w-1/2 min-w-[350px] max-w-[600px] bg-red-600 h-[64.5vh] p-6 rounded-[5px] shadow-2xl shadow-gray-400 border-[0.5px] border-white text-black pb-4 flex flex-col items-center gap-2 mt-8'>

                <div id="top" className='p-2 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl mb-3 font-semibold text-white'>Welcome {firstName}!!!...</h1>
                    <div id="underline" className='h-[1px] w-[150px] bg-yellow-500'></div>
                </div>

                <div id="img" className='h-[200px] w-[200px] bg-slate-900 p-4 rounded-full'>
                    <img src={imgSrc} alt={username} title='profile_pic' height={200} width={200} className='object-cover rounded-full object-center border-4 border-white' />
                </div>

                <div id="text-info" className='flex flex-col justify-center items-start mt-3 text-white text-left gap-1'>
                    <h2>Username: {username}</h2>
                    <h3>Real name: {firstName} {lastName}</h3>
                    <h4>Date of Birth: {dob}</h4>
                    <h4>Occupation: {occupation}</h4>
                </div>

                {/* <Link 
                to='../:edit'
                className='bg-slate-900 text-white p-2 px-4 rounded-2xl mt-2 hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900 border-2 border-white font-semibold'>Edit Profile</Link> */}
    </div>
  )
}

export default User