import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Form/formHeader/FormHeader';
import { Link } from 'react-router-dom';
import { useFormData } from '../../Contexts/FormContext';
import SaveData from '../localStorage';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const data = useFormData();
    const {usersData, setCurrentUser} = data;

    // This approach is wrong for bcoz in this we have to click two times on Login button. Also, check below that we have used Link inside button and to prop inside it is condtionally changing links.

    // const handleClick = useCallback (() => {
    
    //     if (username && password) {
    
    //         if (usersData) {
    //             console.log(usersData, usersData[`${username}`]);
    //             // if (usersData[`${username}`]) {
    //             //     if (usersData[`${username}`]['password'] === password) {
    //             //         setCurrentUser(usersData[`${username}`]);
    //             //         setIsFilled(true);
        //             }else {
        //                 alert('Either username or password is incorrect');
        //             }
                // }else {
                //     alert('Username do not exist');
                // }
            // }else {
            //     alert('Please Register First');
            // }
        // }else {
        //     alert('Please fill all the fields properly.');
        // }
    //     (isFilled) && console.log('handleClick');

    // }, [username, password]);

    SaveData();

    const handleClick = () => {
        if (!(username && password)) {
            alert('Please Fill all the fields correctly')
        }else if (!(usersData)) {
            alert('Please register yourself first');
        }else if (!(usersData[`${username}`])) {
            alert('Username do not exist');
        }else if (!(usersData[`${username}`]['password'] === password)) {
            alert('Password is incorrect');
        }
    }

    useEffect(() => {
        if (username && password) {
            if (usersData) {
                if (usersData[`${username}`]) {
                    if (usersData[`${username}`]['password'] === password) {
                        setCurrentUser(usersData[`${username}`]);
                        setIsFilled(true);
                    }
                }
            }
        }

    }, [username, password]);

    // setcurrent user here and send only currentUser data to content parts

  return (
    <>
        <Header />
            <div style={{height: 'calc(100vh - 192px)'}} className='w-full bg-slate-100 flex flex-col items-center justify-center'>
                
                <div id="card" className='w-1/2 min-w-[350px] max-w-[450px] bg-white md:h-[43.5vh] p-6 rounded-[5px] shadow-2xl shadow-gray-400 border-[0.5px] border-orange-500 text-black'>

                    <div id="top" className='p-2 flex flex-col items-center justify-center'>
                        
                        <h1 className='text-2xl mb-3 font-semibold text-black'>Login</h1>

                        <div id="underline" className='h-[1px] w-[150px] bg-gray-400'>

                        </div>
                    </div>

                    <form className='flex flex-col items-center justify-center  py-4 gap-4 pl-10'
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    >
                        <div id="input" className='flex flex-col items-start justify-center gap-4 w-full'>

                            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                                <label htmlFor="username"
                                className='text-[13.75px] w-2/6'
                                >Username
                                    <span className='text-red-600'>*</span>
                                </label>

                                <input type="text"
                                id='username'
                                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 text-[12px] focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px]'
                                placeholder='Username'
                                title='Enter username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                />
                            </div>

                            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                                <label htmlFor="password"
                                    className='text-[13.75px] w-2/6'
                                    >Password
                                        <span className='text-red-600'>*</span>
                                </label>
                                <input type="password"
                                    className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7px] text-[12px]'
                                    id='password'
                                    placeholder='Password'
                                    value={password}
                                    title='Enter password'
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    required
                                />
                            </div>
                        </div>
                    </form>

                    <div id="submit" className='w-full flex justify-center flex-col items-center'>

                        {/* {
                            (isFilled) ?
                                <Link to='/content/home' className='text-md mt-4 bg-orange-400 py-[4.15px] px-4 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'>
                                    Login
                                </Link> :
                                <button type='submit' className='text-md mt-4 bg-orange-400 py-[4.15px] px-4 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2' onClick={handleClick}>
                                Login
                                </button>
                        } */}


                        {
                    
                                <button id='submit-btn' type='submit' className='text-md mt-4 bg-orange-400 py-[4.15px] px-4 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2'
                                onClick={handleClick}
                                >
                                    <Link 
                                    to={isFilled ? '/content/all' : '#'} className='w-full h-full'>
                                        Login
                                    </Link>
                                </button>
                        }

                        <p className='text-[11.5px] mt-4'>Don't have an account?
                            <Link to='/registration/step1' >
                                <span className='ml-2 text-blue-600 underline text-[12.5px]'>register</span>
                            </Link>
                        </p>
                    </div>

                </div>
            </div>

    </>

  )
}

export default Login;