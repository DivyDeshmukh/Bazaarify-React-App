import React, { useEffect, useState } from 'react'
import timezones from './timezone';

function Input4({step4}) {

    const {langPreferences, timezonePreferences, communicationPreferences, methods} = step4;
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
          .then((response) => response.json())
          .then((data) => setData(data)) // Return the data
          .catch((error) => console.log(error))
    }, []);
    // let langArr = [];  // for removing duplicates

    return (

    <div id="input" className='flex flex-col items-start justify-center gap-4 w-[80%] md:w-full'>
        <div className='flex gap-5 w-full justify-start pl-2 items-center'>
            <label htmlFor="language"
            className='text-[13.75px] w-2/6'
            >Language Preference:</label>
            <select
            className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px] text-[12px]'
            id="language"
            value={langPreferences}
            onChange={(e) => methods.updateLangPreferences(e.target.value)}
            required
            >
                {
                    data.map((country, i) => {
                        let multipleLangs = country['languages'];
                        return multipleLangs.map((lang, j) => {
                        
                            return (
                                <option key={`${i} - ${j}`} value={lang['name']}>
                                    {lang['name']}
                                </option>
                            )
                        })
                    })
                }
            </select>
        </div>

{/* Timezone Preference */}
        <div className='flex gap-5 w-full justify-start pl-2 items-center'>
            <label htmlFor="timezone"
            className='text-[13.75px] w-2/6'
            >Timezone Preference:</label>
        
             <select
            className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px] text-[12px]'
            id="timezone"
            value={timezonePreferences}
            onChange={(e) => methods.updateTimezonePreferences(e.target.value)}
            required
            >
                {
                    timezones.map((timezone, i) => {
        
                        return (
                            <option key={i} value={timezone}>
                                {timezone}
                            </option>
                        )
                    })
                }
            </select>
            {/* You may use a library for timezone suggestions */}
        </div>

{/* Communication Preferences */}
        <div>
            <label
            htmlFor='emailNotifications'
            className='text-[13.75px] w-2/6'>Communication Preferences:</label>
            <div className='flex mt-2 w-full justify-start pl-2 items-center'>
                <input
                    type="checkbox"
                    className='w-[15px] h-[15px] border-[1px] border-gray-300 pl-4 focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px] cursor-pointer text-[12px]'
                    id="emailNotifications"
                    checked=
                    {communicationPreferences}
                    onChange={(e) => methods.updateCommunicationPreferences(e.target.value)}
                    required
                />
                <label htmlFor="emailNotifications"
                className='ml-2 text-[12px]'
                >Receive Email Notifications</label>
            </div>
            {/* Add more communication preferences as checkboxes or radio buttons */}
        </div>

    </div>

    )
}

export default Input4
