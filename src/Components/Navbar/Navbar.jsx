import React from 'react'
import { IoIosSearch } from "react-icons/io";

import './Navbar.css';

function Navbar() {
  return (
    <div>



      <nav class="bg-transparent border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen- flex flex-wrap items-center justify-between
                 mx-4 p-3">
          <a href="#" class=" header font-extrabold  flex items-center space-x-3 rtl:space-x-reverse no-underline">
            <img src="logo2.png" class=" logo h-14 md:h-20" alt="FD Logo" />
            <span class="self-center text-sm font-extrabold md:text-2xl  md:font-extrabold whitespace-nowrap  text-black  dark:text-black ">  Fashion Drip </span>
          </a>
          <div class="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 my-3 me-1 h-fit" >
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>

              <span class="sr-only">Search</span>
            </button>

            <div class="relative py-5 hidden md:block ms-0 me-5">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                {/* <svg class="py-2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg> */}
                <IoIosSearch class=" " size={21} />
                <span class="sr-only">Search icon</span>
              </div>

              <input type="text" id="search-navbar" class="block w-full  px-9  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Products..." />

            </div>
            <div class="flex flex-col md:block">
            <button type="button" class="signb text-black text-sm font-semibold  focus:outline-none md:text-lg md:font-semibold  rounded-lg  px-4 py-2.5 mx-2  my-3  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 justify-end  border border-black border-2  ">Register</button>
            <button type="button" class="signb text-black text-sm font-semibold    focus:outline-none md:text-lg md:font-semibold rounded-lg  px-4 py-2.5 mx-2  my-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 justify-end  border border-black border-2  ">Sign In</button>
            </div >
            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            

              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-search">
            <div class="relative py-5 mt-3 md:hidden">
              <div class="absolute inset-y-0 start-0 flex  items-center ps-3 pointer-events-none">
                {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg> */}
                <IoIosSearch  size={21} />

              </div>

              <input type="text" id="search-navbar" class="block w-full text-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-black-500" placeholder="Search..." />
            </div>


            <ul class=" flex flex-col p-8 md:p-0  font-medium   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                
                <a href="#" class="navele block mb-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100
            md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 no-underline text-lg font-bold"> Home</a>
              </li>
              <li>
              <a href="#" class="navele block mb-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 no-underline text-lg font-bold"> Shop</a>
              </li>
              <li>
              <a href="#" class="navele block mb-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 no-underline text-lg font-bold"> Rent</a>
              </li>
              <li>
              <a href="#" class="navele block mb-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 no-underline text-lg font-bold"> Wishlist</a>
              </li>
            </ul>


          </div>


        </div>


      </nav>
      <hr class=" z-10 border border-1 border-black" />

    </div>
  )
}

export default Navbar