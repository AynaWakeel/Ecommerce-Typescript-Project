import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'

const MyAccount: React.FC = () => {
    return (
        <div>

            {/* ----------- header ----------- */}
            <div className='relative mt-20'>
                <img src={cover} alt='cover' className='max-md:h-56 w-full' />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <img src={logo} alt='icon' className='max-lg:w-16' />
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-black'>My Account</h1>
                    <div className='pt-0 lg:pt-3 flex justify-center items-center'>
                        <span className='text-sm lg:text-base font-poppins font-medium text-black px-2'>Home</span>
                        <img src={arrow} alt='arrow' />
                        <span className='text-sm lg:text-base font-poppins font-light text-black px-2'>Account</span>
                    </div>
                </div>
            </div>

            {/* ---------------- form --------------- */}
            <div className=' px-6 md:px-14 xl:px-40 py-8 lg:py-10 flex flex-col lg:flex-row justify-between items-start gap-20'>
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold font-poppins pb-8'>Log In</h2>
                    <div className='pb-5 lg:pb-10'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Username or email address</label>
                        <input type='text' className='h-14 w-full xl:w-3/4 px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'/>
                    </div>
                     <div className='pb-5 lg:pb-8'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Password</label>
                        <input type='text' className='h-14 w-full xl:w-3/4 px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'/>
                    </div>
                    <div className='pb-5 lg:pb-10 flex justify-start gap-4'>
                        <input type='checkbox' className='w-8'/>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppinsblock'>Remember Me</label>

                    </div>
                    <div className='flex justify-between lg:justify-start items-center gap-5 lg:gap-20'>
                        <button className='text-base lg:text-xl font-poppins font-normal text-black rounded-xl border-[1px] border-black h-14 w-44'>Log In</button>
                        <span className='text-sm lg:text-base font-poppins font-light text-black'>Lost Your Password?</span>
                    </div>
                </div>
                 <div className='w-full lg:w-1/2'>
                    <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold font-poppins pb-8'>Register</h2>
                    <div  className='pb-5 lg:pb-10'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Email address</label>
                        <input type='text' className='h-14 w-full xl:w-3/4 px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'/>
                    </div>
                    <div className='pb-5 lg:pb-10'>
                        <p className='text-sm lg:text-base font-poppins font-light text-black w-full xl:w-4/5 text-justify pb-2'>A link to set a new password will be sent to your email address.</p>
                        <p className='text-sm lg:text-base font-poppins font-light text-black w-full xl:w-4/5 text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                        <span className='text-sm lg:text-base font-poppins font-semibold'> privacy policy.</span>
                        </p>
                    </div>

                    <button className='text-base lg:text-xl font-poppins font-normal text-black rounded-xl border-[1px] border-black h-14 w-44'>Register</button>

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

export default MyAccount