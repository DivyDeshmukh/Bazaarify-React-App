import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useFormData } from '../../../../Contexts/FormContext';
import Input1 from "./Input1";
import useValidation1 from "./useValidation1";

function Step1 () {

    const {step1} = useFormData();
    const {isFilled} = step1;

    const handleClick = () => {
        if (!isFilled) {
            alert('Please fill the above information correctly.');
        }
    }

    // pass step1 as prop of Input component
    
    return (
        <div style={{height: 'calc(100vh - 96px)'}} className='w-full bg-slate-100 flex flex-col items-center justify-center'>

            <div id="card" className='md:min-w-[450px] md:max-w-[550px] bg-white h-[68.75vh] md:h-[67.5vh] p-6 rounded-[5px] shadow-2xl shadow-gray-400 border-[0.5px] border-orange-500 text-black'>

                <div id="top" className='p-2 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl mb-3 font-semibold text-black'>Please fill the below form.</h1>
                    <div id="underline" className='h-[1px] w-[150px] bg-gray-400'></div>
                </div>

                <form className='flex flex-col items-center justify-center  py-4 gap-4 pl-10'
                onSubmit={(e) => {
                    e.preventDefault();
                 }}
                >
                    
                <Input1 step1={step1} />

                    <div id="submit" className='w-full flex justify-center'>

                        {
                            (isFilled) ?
                                <Link to='/registration/step2' className='text-lg mt-1 md:mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'>
                                    Save & Continue
                                </Link> :
                                <button type='submit' className='text-lg mt-1 md:mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2 '
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

export default Step1; 