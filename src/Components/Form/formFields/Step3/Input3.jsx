import React, {useRef} from 'react';

function Input3 ({step3}) {

    const {username, imgSrc, confirmPassword, password, methods} = step3;

    return (
        <div id="input" className='flex flex-col items-start justify-center gap-4 md:w-full w-[82%]'>

                <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                    <label htmlFor="username"
                        className='text-[13.75px] w-2/6'
                        >Username
                            <span className='text-red-600'>*</span>
                    </label>

                    <input type="text"
                        id='username'
                        className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px] text-[12px]'
                        placeholder='Enter your username'
                        value={username}
                        title='Enter your username'
                        onChange={(e) => methods.updateUsername(e.target.value)}
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
                        placeholder='Enter your password (8 characters)'
                        value={password}
                        title='Enter your current password'
                        onChange={(e) => {
                            methods.updatePassword(e.target.value)
                        }}
                        required
                    />
                </div>

                <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                    <label htmlFor="confirm-password"
                        className='text-[13.75px] w-2/6'
                        >Confirm Password
                            <span className='text-red-600'>*</span>
                    </label>
                    <input
                        type="password"
                         className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[8px] text-[12px]'
                        id='confirm-password'
                        title='Enter your confirm password'
                        value={confirmPassword}
                        placeholder='Enter your password again (8 characters)'
                        onChange={(e) => methods.updateConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                    <label htmlFor="profile"
                        className='text-[13.75px] w-2/6'
                        >Profile Picture
                            <span className='text-red-600'>*</span>
                    </label>

                    {
                        // imgSrc ? (
                        //     <div className='ml-4'>
                        //         <p className='text-[12px]'>{imgSrc}</p>
                        //     </div>
                        // ) :
                        <input
                        type="url"
                        value={imgSrc}
                        className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[8px] text-[12px]'
                        id='profile'
                        title='Upload Image'
                        placeholder='Enter profile_picture_url from any social media account'

                        onChange={(e) => {
                            methods.updateImgSrc(e.target.value);
                        }}
                        
                        
                    />
                    // here, we are using url instead of file bcoz browser restricts pages to load local resources for security purposes, use indexDB or other tools to handle files.
                    }
                        
                </div>

        </div>
    )
}

export default Input3;