import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useFormData } from '../../../../Contexts/FormContext';
import Input2 from './Input2';

function Step2 () {

    const {step2} = useFormData();
    const {isFilled} = step2;

    const handleClick = () => {
        if (!isFilled) {
            alert('Please fill the above information correctly. \n 1. Ensure that your PIN has 6 digits.');
        }
    }

    return (
        <div style={{height: 'calc(100vh - 96px)'}} className='w-full bg-slate-100 flex flex-col items-center justify-center'>

            <div id="card" className='min-w-[450px] max-w-[550px] bg-white h-[62.75vh] p-6 rounded-[5px] shadow-2xl shadow-gray-400 border-[0.5px] border-orange-500 text-black'>

                <div id="top" className='p-2 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl mb-3 font-semibold'>Address Info</h1>
                    <div id="underline" className='h-[1px] w-[150px] bg-gray-400'></div>
                </div>

                <form className='flex flex-col items-center justify-center  py-4 gap-4 pl-10' onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    
                    <Input2 step2={step2} />

                    <div id="submit" className='w-full flex justify-center'>

                    {
                        (isFilled) ?
                        <Link to='/registration/step3' className='text-lg mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'>
                            Save & Continue
                        </Link> :
                        <button type='submit' className='text-lg mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'
                        onClick={handleClick}
                        >
                        Save & Continue
                        </button>
                    }

                    </div>
                
                </form>

            </div>

        </div> 
    )
}

export default Step2;
