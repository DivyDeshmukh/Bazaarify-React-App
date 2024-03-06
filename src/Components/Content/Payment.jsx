import React from 'react'

function Payment() {
  return (
    <div id="card" className='flex flex-col justify-center items-center gap-6 bg-white h-auto pb-12 w-[90%] px-2'>
      <img src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png" alt="payment"
      className='h-[250px] w-[auto] rounded-full bg-blue-800'
      />
        <p className='pt-5'>Your Payment is successfully done...</p>
        <p>Your ordered will be delivered soon...</p>
    </div>
  )
}

export default Payment;

