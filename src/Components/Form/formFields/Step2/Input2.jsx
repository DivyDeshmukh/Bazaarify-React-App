import React from "react";
import {states} from './indianStates.js';

function Input2({step2}) {

    const {streetAddress, city, state, PIN, country, methods} = step2;
    const statesVal = Object.values(states);
    const stateKey = Object.keys(states);

    return (

        <div id="input" className='flex flex-col items-start justify-center gap-4 w-[80%] md:w-full'>
    
            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="street address"
                className='text-[13.75px] w-2/6'
                >Street Address
                    <span className='text-red-600'>*</span>
                </label>
    
                <input type="text"
                id='street address'
                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px] text-[12px]'
                placeholder='Enter your street address'
                value={streetAddress}
                title='Enter your street address'
                onChange={(e) => methods.updateStreetAddress(e.target.value)}
                required
                />
                {/* <span className='text-red-600 text-lg'>Please fill this field correctly</span> */}
            </div>
    
            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="city"
                className='text-[13.75px] w-2/6'
                >City
                    <span className='text-red-600'>*</span>
                </label>
                <input type="text"
                 className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7px] text-[12px]'
                id='city'
                placeholder='Enter your current city'
                value={city}
                title='Enter your current city'
                onChange={(e) => methods.updateCity(e.target.value)}
                required
                />
            </div>
    
            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="state"
                className='text-[13.75px] w-2/6'
                >State
                    <span className='text-red-600'>*</span>
                </label>
                {/* <input
                type="text"
                 className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[8px]'
                id='state'
                title='Enter your state'
                value={state}
                placeholder='Enter your current state'
                onChange={(e) => methods.updateState(e.target.value)}
                required
                /> */}
                <select
                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px] text-[12px]'
                id="state"
                value={state}
                onChange={(e) => methods.updateState(e.target.value)}
                required
                >
    
                    {
                        statesVal.map((state, i) => {
                            return (
                                <option key={stateKey[i]} value={state}>
                                    {state}
                                </option>
                            )
                        })
                    }
    
                </select>
            </div>
    
            <div className='flex gap-5 w-full justify-start items-center pl-2'>
                <label htmlFor="PIN code"
                className='text-[13.75px] w-2/6'
                >PIN Code
                    <span className='text-red-600'>*</span>
                </label>
    
                <input
                type="number"
                // pattern="[0-9]{5}"
                // min='100'
                // max='999999'
                 className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7.5px] text-[12px]'
                id="PIN code"
                name="PIN code"
                title='Enter your PIN code'
                placeholder="Enter your PIN Code"
                value={PIN}
                onChange={(e) => methods.updatePIN(e.target.value)}
                required
                />
    
            </div>
    
            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="country"
                className='text-[13.75px] w-2/6'
                >Country
                    <span className='text-red-600'>*</span>
                </label>
    
                <input
                id='country'
                 className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7px] text-[12px]'
                title='Enter your country'
                placeholder='Enter your country'
                type="text"
                name='country'
                value={country}
                onChange={(e) => methods.updateCountry(e.target.value)}
                required
                />
            </div>
    
        </div>
    
    )
}

export default Input2;