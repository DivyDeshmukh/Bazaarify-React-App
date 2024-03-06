import React, {useState, useEffect} from 'react';
import { useFormData } from '../../Contexts/FormContext';
import EditInput from './EditInput';
import { Link } from 'react-router-dom';

function Edit() {

    const {currentUser} = useFormData();

    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        if(currentUser.isFilled) {
            setIsFilled(true);
        }
    }, [currentUser.isFilled]);

  return (
    <div style={{height: 'calc(100vh - 192px)'}} className='w-full bg-slate-100 flex flex-col items-center justify-center'>
        
        <div id="card" className='w-1/2 min-w-[500px] max-w-[650px] bg-white p-6 rounded-[5px] shadow-2xl shadow-gray-400 border-[0.5px] flex flex-col gap-5 border-orange-500 overflow-y-auto h-[80%] pb-10 text-black pl-16'>

            <div id="top" className='p-2 flex flex-col items-center justify-center mb-2'>
                <h1 className='text-2xl mb-3 font-semibold'>Edit Profile</h1>
                <div id="underline" className='h-[1px] w-[150px] bg-gray-400'></div>
            </div>

            <form className='flex flex-col items-center justify-center  py-4 gap-4 pl-10' onSubmit={(e) => {
                e.preventDefault();
            }}>
                <EditInput 
                // stepData={{step1, step2, step3, step4, step5}} 
                />

                <div id="submit" className='w-full flex justify-center'>

                    {
                        (isFilled) ?
                        <Link to='/login' className='text-lg mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'>
                            Edit & Save
                        </Link> :
                        <button type='submit' className='text-lg mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'>
                            Edit & Save
                        </button>
                    }

                </div>
            </form>

        </div>

    </div>
  )
}

export default Edit