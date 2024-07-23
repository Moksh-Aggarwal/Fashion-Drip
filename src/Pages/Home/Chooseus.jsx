import React from 'react'
import { BiFontColor } from 'react-icons/bi'

function Chooseus() {
    return (
        <div>
            <h1 class="font-extrabold text-4xl leading-none tracking-tight md:text-5xl lg:text-6xl text-gray mb-0 " style={{ marginLeft: '1rem' }} >Why choose Us?</h1>
            <p class="font-normal text-2xl ms-4 text-gray leading-tight mb-4" style={{ marginBottom: '3rem', marginTop: '1rem' }} >We offer the best shopping experience
            </p>




            <div className='choose-box  flex flex-row flex-wrap  items-center w-full justify-between'>
                <div class="max-w-sm p-6 bg-gray-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-10 " style={{marginLeft:'4rem'}}>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wide Range of Products</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Choose from a wide range of products from various sellers</p>
                    <a  href="#" class=" shop inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Shop Now
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>



                <div class="max-w-sm p-6 bg-gray-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-10">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Affordable Rental Plans</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rent clothes at affordable prices with our rental plans</p>
                    <a href="#" class=" shop inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg hover:bg-gray-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Rental plans 
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>





                <div class="max-w-sm p-6 bg-gray-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-10" style={{marginRight:'4rem'}}>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wishlist Feature</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Add products to your wishlist and buy them later.</p>
                    <a href="#" class=" shop inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg hover:bg-gray-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View wishlist
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>





                <div class="max-w-sm p-6 bg-gray-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginLeft:'4rem',height:'12.8rem', width:'60rem'}}>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Secure Payments</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We ensure secure payments with our trusted partners</p>
                    <a href="#" class="shop inline-flex items-center mt-6 px-3 h-10 text-sm font-medium text-center text-black rounded-lg hover:bg-gray-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Learn More
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>





                <div class="max-w-sm p-6 bg-gray-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{height:'12.8rem', width:'60rem'}}>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fast Delivery</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 py-6">We offer fast delivery across the country</p>
                    <a href="#" class=" shop inline-flex items-center px-3 h-10 text-sm font-medium text-center text-black rounded-lg hover:bg-gray-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Learn More
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>





                <div class="max-w-sm p-6 bg-gray-200 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginRight:'4rem'}}>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">24/7 Customer Support</h5>
                    </a>order
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We're here to help. Get in touch with us anytime.</p>
                    <a href="#" class="shop inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg hover:bg-gray-500  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Contact Us
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>

    )
}

export default Chooseus