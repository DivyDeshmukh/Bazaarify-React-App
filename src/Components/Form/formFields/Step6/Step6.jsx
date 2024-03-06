import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Input6 from './Input6';
import { useFormData } from '../../../../Contexts/FormContext';
import SaveData from "../../../localStorage";

function Step6 () {

    const {step1, step2, step3, step4, step5, step6} = useFormData();
    const {methods} = step6;
    
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => {
        if (!isFilled) {
            alert('Please fill the above information correctly.');
        }
    }

    useEffect(() => {
        if(step1.isFilled && step2.isFilled && step3.isFilled & step4.isFilled && step5.isFilled) {
            methods.updateIsRegistered(true);
            setIsFilled(true);
        }
    }, [step1.isFilled, step2.isFilled, step3.isFilled, step4.isFilled, step5.isFilled]);

    return (
        // again show all saved data and ask user to review it

        <div style={{height: 'calc(100vh - 96px)'}} className='w-full bg-slate-100 flex flex-col items-center justify-center'>
        
            <div id="card" className='w-1/2 min-w-[500px] max-w-[650px] bg-white p-6 rounded-[5px] shadow-2xl shadow-gray-400 border-[0.5px] flex flex-col gap-5 border-orange-500 overflow-y-auto h-[80%] pb-10 text-black pl-16'>

                <div id="top" className='p-2 flex flex-col items-center justify-center mb-2'>
                    <h1 className='text-2xl mb-3 font-semibold'>Review & Submit</h1>
                    <div id="underline" className='h-[1px] w-[150px] bg-gray-400'></div>
                </div>

                <form className='flex flex-col items-center justify-center  py-4 gap-4 pl-10' onSubmit={(e) => {
                    e.preventDefault();
                }}>
                     <Input6 stepData={{step1, step2, step3, step4, step5}} />

                    <div id="submit" className='w-full flex justify-center'>

                            {
                                (isFilled) ?
                                <Link to='/login' className='text-lg mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'>
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

export default Step6;

