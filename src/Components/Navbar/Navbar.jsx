import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import "./Navbar.css";
import "../../Pages/Home/home.css";
function Navbar() {
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="backg relative   p-4 w-full mx-3 max-w-md max-h-full shadow-inner shadow-black rounded-lg">
          {/* <!-- Modal content --> */}
          <div class="relative  z-20  rounded-lg  dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class=" flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="heading text-white drop-shadow-[1px_4px_2px_gray]  text-3xl font-semibold tracking-widest  dark:text-white">
                Sign In To Our Platform
              </h3>
              <button
                type="button"
                class="relative left-3 p-2 text-white bg-transparent hover:bg-gray-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  class=" w-5 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5">
              <form class="space-y-4" action="#">
                <div>
                  <label
                    for="email"
                    class="heading block mb-2 text-md tracking-widest font-semibold text-white dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-500  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="heading block mb-2 text-md tracking-widest font-semibold text-white dark:text-white"
                  >
                    Your Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ms-2 text-sm font-medium text-white tracking-wide dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-bold tracking-wide text-rose-300 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-gray-500 hover:bg-gray-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <p class="text-sm tracking-widest text-white text-center">-- or --</p>
                <button
                  type="button"
                  class="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                >
                  <svg
                    class="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sign in with Google
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    class="text-blue-500 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <nav class="bg-transparent border-gray-200 dark:bg-gray-900">
        <div
          class="max-w-screen- flex flex-wrap items-center justify-between
                 mx-4 p-3"
        >
          <a
            href="#"
            class=" header font-extrabold  flex items-center space-x-3 rtl:space-x-reverse no-underline"
          >
            <img src="logo2.png" class=" logo h-14 md:h-20" alt="FD Logo" />
            <span class="self-center text-sm font-extrabold md:text-2xl  md:font-extrabold whitespace-nowrap  text-black  dark:text-black ">
              {" "}
              Fashion Drip{" "}
            </span>
          </a>
          <div class="flex md:order-2">
          

            <div class="relative py-5 hidden md:block ms-0 me-5">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                {/* <svg class="py-2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg> */}
                <IoIosSearch class=" " size={21} />
                <span class="sr-only">Search icon</span>
              </div>

              <input
                type="text"
                id="search-navbar"
                class="block w-full  px-9  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Products..."
              />
            </div>
            <div class="hidden md:block">
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                type="button"
                class="signb text-black text-sm font-semibold active:bg-gray-100  focus:outline-none md:text-lg md:font-semibold  rounded-lg  px-4 py-2.5 mx-2  my-3  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 justify-end  border border-black border-2  "
              >
                Register
              </button>
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                type="button"
                class="signb text-black text-sm font-semibold active:bg-gray-100   focus:outline-none md:text-lg md:font-semibold rounded-lg  px-4 py-2.5 mx-2  my-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 justify-end  border border-black border-2  "
              >
                Sign In
              </button>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
            id="navbar-search"
          >
            <div class="relative py-5 mt-3 md:hidden">
              <div class="absolute inset-y-0 start-0 flex  items-center ps-3 pointer-events-none">
                {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg> */}
                <IoIosSearch size={21} />
              </div>

              <input
                type="text"
                id="search-navbar"
                class="block w-full text-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-black-500"
                placeholder="Search..."
              />
            </div>

            <ul class=" flex flex-col p-8 md:p-0  font-medium   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="navele block mb-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100
            md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 no-underline text-lg font-bold"
                >
                  {" "}
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="navele block mb-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 no-underline text-lg font-bold"
                >
                  {" "}
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="navele block mb-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 no-underline text-lg font-bold"
                >
                  {" "}
                  Rent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="navele block mb-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 no-underline text-lg font-bold"
                >
                  {" "}
                  Wishlist
                </a>
              </li>
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                type="button"
                class="signb md:hidden text-black text-sm font-semibold active:bg-gray-100  focus:outline-none md:text-lg md:font-semibold  rounded-lg  px-4 py-2.5 mx-2  my-3  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 justify-end  border border-black border-2  "
              >
                Register
              </button>
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                type="button"
                class="signb md:hidden text-black text-sm font-semibold active:bg-gray-100   focus:outline-none md:text-lg md:font-semibold rounded-lg  px-4 py-2.5 mx-2  my-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 justify-end  border border-black border-2  "
              >
                Sign In
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <hr class=" z-10 border border-1 border-black" />
    </div>
  );
}

export default Navbar;
