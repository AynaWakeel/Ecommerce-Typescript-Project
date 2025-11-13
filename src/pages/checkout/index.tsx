import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'
import circle from '../../assets/icons/Ellipse 1.svg'

const Checkout: React.FC = () => {
    return (
        <div>

            {/* ----------- header ----------- */}
            <div className='relative'>
                <img src={cover} alt='cover' className='max-md:h-56 w-full' />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <img src={logo} alt='icon' className='max-lg:w-16' />
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-black'>Checkout</h1>
                    <div className='pt-0 lg:pt-3 flex justify-center items-center'>
                        <span className='text-sm lg:text-base font-poppins font-medium text-black px-2'>Home</span>
                        <img src={arrow} alt='arrow' />
                        <span className='text-sm lg:text-base font-poppins font-light text-black px-2'>Checkout</span>
                    </div>
                </div>
            </div>

            {/* ---------------- form --------------- */}
            <div className='px-14 py-5 lg:py-10 flex flex-col justify-center items-center'>
                <div className='text-center w-full lg:w-1/2'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-poppins font-medium'>Get In Touch With Us</h1>
                    <p className='text-xs md:text-sm lg:text-base font-poppins font-medium text-gray-400 pt-3'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
            </div>
            <div className=' px-6 md:px-14 xl:px-40 py-8 lg:py-10 flex flex-col lg:flex-row justify-between items-start gap-20'>
               
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold font-poppins pb-8'>Billing Details</h2>

                    <div className='flex justify-between gap-6 items-center pb-5 lg:pb-10 '>
                        <div>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>First Name</label>
                            <input type='text' className='h-14 w-[270px] px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Last Name</label>
                            <input type='text' className='h-14 w-[270px] px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                        </div>

                    </div>
                    <div className='pb-5 lg:pb-8'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Company Name (Optional)</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                    </div>
                    <div className='pb-5 lg:pb-10'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Country / Region</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' placeholder='Sri Lanka' />
                    </div>
                    <div className='pb-5 lg:pb-10'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Street address</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                    </div>
                    <div className='pb-5 lg:pb-8'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Town / City</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                    </div>
                    <div className='pb-5 lg:pb-8'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Province</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' placeholder='Western Province' />
                    </div>
                    <div className='pb-5 lg:pb-10'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Zip Code</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                    </div>
                    <div className='pb-5 lg:pb-10'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Phone</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                    </div>
                    <div className='pb-5 lg:pb-10'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Email address</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                    </div>
                    <div className='pb-5 lg:pb-10'>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' placeholder='Additional Information' />
                    </div>


                </div>

                 <div className='w-full lg:w-1/2'>
                    <div className='flex justify-start items-start gap-6'>
                       
                        <div>
                            <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Product</h3>
                            <p className='text-sm lg:text-base font-poppins font-normal text-black w-full xl:w-4/5 text-justify'>United States</p>
                        </div>
                         <div>
                            <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Product</h3>
                            <p className='text-sm lg:text-base font-poppins font-normal text-black w-full xl:w-4/5 text-justify'>United States</p>
                        </div>
                    </div>
                    <div className='pt-3 border-t-[1px] border-[#D9D9D9]'>
                        <div className='flex justify-start items-center gap-3'>
                            <img src={circle} alt='icon'/>
                            <h4 className='text-base font-poppins font-normal'>Direct Bank Transfer</h4>
                        </div>
                        <p className='pt-4 text-sm lg:text-base font-poppins font-light text-gray-400 w-full xl:w-4/5 text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                    <div>
                        <p className='py-6 text-sm lg:text-base font-poppins font-light text-black w-full xl:w-4/5 text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                        <span className='text-sm lg:text-base font-poppins font-semibold'> privacy policy.</span>
                        </p>
                        <button className='text-base lg:text-xl font-poppins font-normal text-black rounded-xl border-[1px] border-black h-14 w-44'>Place order</button>

                    </div>

                </div>

            </div>


            {/* ------------------ section ----------------- */}
            <div className='bg-[#FAF4F4] w-full py-16 px-8 lg:px-20 grid grid-row-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                <div className='w-full xl:w-96'>
                    <h4 className='text-xl md:text-2xl xl:text-[32px] font-poppins font-medium'>Free Delivery</h4>
                    <p className='text-base xl:text-xl font-poppins font-normal text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</p>
                </div>
                <div className='w-full xl:w-96'>
                    <h4 className='text-xl md:text-2xl xl:text-[32px] font-poppins font-medium'>90 Days Return</h4>
                    <p className='text-base xl:text-xl font-poppins font-normal text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
                </div>
                <div className='w-full xl:w-96'>
                    <h4 className='text-xl md:text-2xl xl:text-[32px] font-poppins font-medium'>Secure Payment</h4>
                    <p className='text-base xl:text-xl font-poppins font-normal text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
                </div>
            </div>


        </div>
    )
}

export default Checkout