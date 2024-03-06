import React, {useState} from "react";

function Input1 ({step1}) {

    const {firstName, lastName, dob, formattedDate, gender, email, phone, methods} = step1;

    return (
        <div id="input" className='flex flex-col items-start justify-center gap-4  w-[80%] md:w-full'>

            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="firstName"
                className='text-[13.75px] w-2/6'
                >First Name
                    <span className='text-red-600'>*</span>
                </label>

                <input type="text"
                id='firstName'
                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 text-[12px] focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] ml-[7px]'
                placeholder='Enter your first name'
                value={firstName}
                title='Enter your first name'
                onChange={(e) => methods.updateFirstName(e.target.value)}
                required
                />
            </div>

            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="lastName"
                className='text-[13.75px] w-2/6'
                >Last Name
                    <span className='text-red-600'>*</span>
                </label>
                <input type="text"
                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 text-[12px] focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7px]'
                id='lastName'
                placeholder='Enter your last name'
                value={lastName}
                title='Enter your last name'
                onChange={(e) => methods.updateLastName(e.target.value)}
                required
                />
            </div>

            <div className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="dob"
                className='text-[13.75px] w-2/6'
                >Date of Birth
                    <span className='text-red-600'>*</span>
                </label>
                <input
                type="date"
                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 text-[12px] focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[8px] pr-2'
                id='dob'
                title='Enter your DOB'
                value={dob}
                min='01/01/1947'
                max={`${formattedDate}`}
                onChange={(e) => methods.updatedob(e.target.value)}
                required
                />
            </div>

            <div id="gender" className='flex gap-5 w-full justify-start items-center pl-2'>
                <label htmlFor="gender"
                className='text-[13.75px] w-2/6'
                >Gender
                    <span className='text-red-600'>*</span>
                </label>

                <input
                type="text"
                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 text-[12px] focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7.5px]'
                id="gender"
                name="gender"
                list="genderOptions"
                title='Enter your gender'
                placeholder="Select or enter your gender"
                value={gender}
                onChange={(e) => methods.updateGender(e.target.value)}
                required
                />

                <datalist id="genderOptions">
                <option value="Male" />
                <option value="Female" />
                <option value="Non-Binary" />
                <option value="Prefer not to say" />
                <option value="Others" />
                </datalist>
            </div>

            <div id="email" className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="email"
                className='text-[13.75px] w-2/6'
                >Email
                    <span className='text-red-600'>*</span>
                </label>

                <input
                id='email'
                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 text-[12px] focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7px]'
                title='Enter your email'
                placeholder='Enter your email'
                type="email"
                name='email'
                value={email}
                onChange={(e) => methods.updateEmail(e.target.value)}
                required
                />
            </div>

            <div id="phone" className='flex gap-5 w-full justify-start pl-2 items-center'>
                <label htmlFor="phone"
                className='text-[13.75px] w-2/6'
                >Phone
                    <span className='text-red-600'>*</span>
                </label>

                <input
                type="number"
                className='w-[300px] h-[35px] border-[1px] border-gray-300 pl-4 text-[12px] focus:outline-none focus:border-orange-400 focus:border-2 rounded-[4px] md:ml-[7px]'
                title='Enter your phone number'
                id='phone'
                name='phoneNumber'
                onChange={(e) => methods.updatePhone(e.target.value)}
                placeholder='Enter your phone number'
                value={phone}
                required
                />
            </div>
        </div>
    )
}

export default Input1;

