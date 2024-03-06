import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {useFormData} from '../../../../Contexts/FormContext';
import Input3 from "./Input3";

function Step3 () {
    const {step3} = useFormData();
    const {isFilled} = step3;

    const handleClick = () => {
        if (!isFilled) {
            alert('Please fill the above information correctly.\n 1. Ensure password has atleast 8 characters and they match. \n 2. profile must be a url from LinkedIn or any other social media accounts. \n 3. Username can only include letters, numbers, and underscores(_)');
        }
    }

    return (
        <div style={{height: 'calc(100vh - 96px)'}} className='w-full bg-slate-100 flex flex-col items-center justify-center'>
    
            <div id="card" className='w-1/2 min-w-[450px] max-w-[550px] bg-white h-[54.75vh] p-6 rounded-[5px] shadow-2xl shadow-gray-400 border-[0.5px] border-orange-500 text-black pb-4'>
    
                <div id="top" className='p-2 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl mb-3 font-semibold'>Account Setup</h1>
                    <div id="underline" className='h-[1px] w-[150px] bg-gray-400'></div>
                </div>
    
                <form className='flex flex-col items-center justify-center  py-4 gap-4 pl-10' onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    
                    <Input3 step3={step3} />
    
                    <div id="submit" className='w-full flex justify-center'>
    
                        {
                            (isFilled) ?
                            <Link to='/registration/step4' className='text-lg mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'>
                                Save & Continue
                            </Link> :
                            <button type='submit' className='text-lg   mt-2 md:mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'
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

export default Step3;
