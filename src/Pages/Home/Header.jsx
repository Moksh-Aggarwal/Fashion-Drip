import React from 'react'

function Header() {
    return (
        <div class='header-section my-16 p-4 h-fit'  >
            <div className='title h-fit w-full' >
                <h1 className='heading text-6xl md:text-7xl lg:text-9xl font-bold  my-2 ms-2 text-gray ' > Welcome to <br></br>Fashion Drip</h1>
                <h3 className='slogen text-start font-normal text-xl md:text-3xl lg:text-4xl my-5 ms-4 text-gray leading-tight'>Drip In Style , Rent With Ease</h3>

                <div className='images-section my-16'>
                    <div id="default-carousel" class="relative w-[97%] mx-auto" data-carousel="slide">

                        <div class=" relative  h-64 sm:h-96 overflow-hidden rounded-lg md:h-screen">

                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://images.pexels.com/photos/6347545/pexels-photo-6347545.jpeg?auto=compress&cs=tinysrgb&w=600" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>

                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://images.pexels.com/photos/6348047/pexels-photo-6348047.jpeg?auto=compress&cs=tinysrgb&w=600" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>

                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=600" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>

                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://images.pexels.com/photos/6347538/pexels-photo-6347538.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>

                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://images.pexels.com/photos/4042029/pexels-photo-4042029.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                        </div>

                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>

                        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div class=" mx-auto max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white" style={{textDecoration:'none'}}>Our Mission</h5>
                </a>
                <p class="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">To provide a platform where users can buy, rent and wishlist their favorite clothes from various sellers with ease.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Learn More
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
            
        </div>
    )
}

export default Header