import React from 'react'

function Input5({step5}) {

    const {occupation, companyName, website, agree, methods} = step5;

    return (
        <div id="input" className='flex flex-col items-start justify-center gap-4 w-[80%] md:w-full'>
        
            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="occupation"
                className='text-[13.75px] w-2/6'
                >Occupation
                    <span className='text-red-600'>*</span>
                </label>

                <input type="text"
                id='occupation'
                className='w-[300px] h-[35px] text-[12px] border-[1px] border-gray-300 pl-2 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px]'
                placeholder='Enter your occupation'
                value={occupation}
                title='Enter your occupation'
                onChange={(e) => methods.updateOccupation(e.target.value)}
                required
                />
            </div>

            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="company name"
                className='text-[13.75px] w-2/6'
                >Company Name
                    <span className='text-red-600'>*</span>
                </label>
                <input type="text"
                className='w-[300px] h-[35px] text-[12px] border-[1px] border-gray-300 pl-2 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7px]'
                id='company name'
                placeholder='Enter your current company name'
                value={companyName}
                title='Enter your current company name'
                onChange={(e) => methods.updateCompanyName(e.target.value)}
                required
                />
            </div>

            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="url"
                className='text-[13.75px] w-2/6'
                >Website</label>
                <input
                type="url"
                className='w-[300px] h-[35px] text-[12px] border-[1px] border-gray-300 pl-2 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[8px]'
                id='url'
                title='Enter your confirm password'
                value={website}
                placeholder='Enter your website url (if available)'
                onChange={(e) => methods.updateWebsite(e.target.value)}
                
                />
            </div>
            
            <div className='flex mt-2 gap-1 w-full justify-start pl-2 items-center'>
                    <input
                        type="checkbox"
                        className='w-[15px] h-[15px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px] cursor-pointer'
                        id="t&c"
                        checked={agree}
                        onChange={(e) => methods.updateAgree(e.target.value)}
                        required
                    />
                    <label htmlFor="t&c"
                    className='text-[12px]'
                    >Do you agree to all Terms and Conditions
                    <span className='text-red-600'>*</span>
                    </label>
            </div>
            {/* Add more communication preferences as checkboxes or radio buttons */}
        </div>
    )
}

export default Input5
