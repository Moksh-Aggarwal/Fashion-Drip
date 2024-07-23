import React from 'react'

function Member() {
  return (
    <div className='member-section flex flex-col items-center mt-30' style={{ margin: '4rem 0rem' }}> 
    <h1 class="font-extrabold text-4xl leading-none tracking-tight md:text-5xl lg:text-6xl text-gray " >Membership Plans</h1>
    <p class="font-normal text-2xl ms-4 text-gray leading-tight mb-4"style={{ marginBottom: '3rem',marginTop:'1rem' }} >Choose a plan that suits your needs</p>




    <div className='member flex flex-row flex-wrap justify-center items-center w-full'>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{marginBottom:'3rem'}}>
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white" >
          <span class="text-3xl font-semibold">Rs.</span>
          <span class="text-5xl font-extrabold tracking-tight">100</span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">deal for occasional shoppers</span>
          </li>
        </ul>
        <button type="button" class="text-white bg-gray-600  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
      </div>

      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg mx-5 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{marginLeft:'4rem',marginRight:'4rem',marginBottom:'3rem'}}>
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Premium</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold">Rs. </span>
          <span class="text-5xl font-extrabold tracking-tight">180</span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Perfect for regular shoppers</span>
          </li>
        </ul>
        <button type="button" class="text-white bg-gray-600  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
      </div>

      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"  style={{marginBottom:'3rem'}}>
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Unlimited</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold">Rs.</span>
          <span class="text-5xl font-extrabold tracking-tight">4190</span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Best for shopaholics</span>
          </li>
        </ul>
        <button type="button" class="text-white bg-gray-600  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
      </div>

    </div>

    <button type="button" class="text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ margin: '4rem 0rem',marginTop:'0rem', height:'4rem',width:'12.5rem',fontSize:'1.2rem' }}>
            View All Plans
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></button>
  </div>
  )
}

export default Member