import React from 'react'

function Faq() {
    return (
        <div className=' flex flex-col items-center my-16 w-full' >
            <h1 class="heading text-6xl md:text-7xl lg:text-9xl font-bold  my-2 ms-7 text-gray  "  >Frequently Asked <br></br> Questions
            </h1>
            <p class="slogen text-start font-normal text-xl md:text-3xl lg:text-4xl my-5 ms-4 text-gray leading-tight" >Have a question? We've got answers
            </p>


            <div class>

                <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-black-400 dark:bg-gray-800 text-black-600 dark:text-white">
                    <h2 id="accordion-color-heading-1">
                        <button type="button" class="flex items-center justify-between text-xl w-full p-4 font-bold rtl:text-right text-gray-800 border border-b-0 border-gray-500 rounded-t-xl hover:bg-white hover:border-4 border-black rounded-t-xl dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <span>How do I create an account?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p class="mb-2 text-xl text-gray font-normal dark:text-gray-400">Click on the "Register" button on the top right corner of the wesite and fill the form.</p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-2">
                        <button type="button" class="flex items-center justify-between text-xl w-full p-4 font-bold rtl:text-right text-gray-800 border border-b-0 border-gray-500 rounded-t-xl hover:bg-white hover:border-4 border-black rounded-t-xl dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <span>How do I rent clothes?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                            <p class="mb-2 text-xl text-gray dark:text-gray-400">Choose a rental plan and that suits you needs and make the payment.You can rent as per you plan.</p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-3">
                        <button type="button" class="flex items-center justify-between text-xl w-full p-4 font-bold rtl:text-right text-gray-800 border border-b-0 border-gray-500 rounded-t-xl hover:bg-white hover:border-4 border-black rounded-t-xl dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <span>What is the return policy?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p class="mb-2 text-xl text-gray dark:text-gray-400">You can return the products within 30 days of delivery.Please refer to our return policy for more details.</p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-4">
                        <button type="button" class="flex items-center justify-between text-xl w-full p-4 font-bold rtl:text-right text-gray-800 border border-b-0 border-gray-500 rounded-t-xl hover:bg-white hover:border-4 border-black rounded-t-xl dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <span>How do I contact customer support?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-4" class="hidden" aria-labelledby="accordion-color-heading-4">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p class="mb-2 text-xl text-gray dark:text-gray-400">You can contact us via email or phone number.We are available 24x7.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Faq