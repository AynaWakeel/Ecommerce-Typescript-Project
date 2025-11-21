import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import arrowdown from '../../assets/icons/dashicons_arrow-down-alt2 (1).svg'
import circle from '../../assets/icons/Ellipse 1.svg'
import { useLocation } from 'react-router'

type checkoutState = {
  productQuantity: number
  totalPrice: number
};

const Checkout = () => {
    const location = useLocation() as {state:checkoutState}
    const totalPrice = location.state.totalPrice;
    const productQuantity = location.state.productQuantity || 1;

    return (
        <div>

            {/* ----------- header ----------- */}
            <div className='relative mt-20'>
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

            <div className=' px-6 md:px-14 xl:px-40 py-8 lg:py-10 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20'>

                <div className='w-full lg:w-1/2'>
                    <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold font-poppins pb-14'>Billing Details</h2>

                    <div className='flex gap-2 xl:gap-6 items-center pb-5 lg:pb-10 '>
                        <div className='flex-1'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>First Name</label>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Last Name</label>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                        </div>

                    </div>
                    <div className='pb-5 lg:pb-8'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Company Name (Optional)</label>
                        <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' />
                    </div>
                    <div className='pb-5 lg:pb-10'>
                        <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Country / Region</label>
                       
                         <div className='relative'>
                        <select name="" id="" className='appearance-none h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none text-base font-poppins font-normal text-[#9F9F9F]'>
                            <option selected>Sri Lanka</option>
                            <option>Pakistan</option>
                            <option>India</option>
                            <option>China</option>
                        </select>
                            <img src={arrowdown} alt='down' className='pointer-events-none absolute top-5 right-4'/>
                        </div>
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
                        <div className='relative'>
                        <select name="" id="" className='appearance-none h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none text-base font-poppins font-normal text-[#9F9F9F]'>
                            <option selected>Western Province</option>
                            <option>East</option>
                            <option>North</option>
                            <option>South</option>
                        </select>
                            <img src={arrowdown} alt='down' className='pointer-events-none absolute top-5 right-4'/>
                        </div>
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

                <div className='w-full lg:w-1/2 lg:mt-12'>
                    <div className='flex justify-between pb-4'>
                        <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Product</h3>
                        <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Subtotal</h3>
                    </div>

                    <div className='flex justify-between pb-4'>
                        <div className='flex justify-start gap-2'>
                            <span className='text-sm lg:text-base font-poppins font-normal text-[#9F9F9F] '>Asgaard sofa</span>
                            <span className='text-sm lg:text-base font-poppins font-normal text-black'>X {productQuantity}</span>
                        </div>
                        <span className='text-sm lg:text-base font-poppins font-light text-black '>Rs. {totalPrice}</span>
                    </div>
                    <div className='flex justify-between pb-4'>
                        <h4 className='text-sm lg:text-base font-poppins font-normal text-black'>Subtotal</h4>
                        <p className='text-sm lg:text-base font-poppins font-light text-black'>Rs. {totalPrice}</p>
                    </div>
                    <div className='flex justify-between pb-6'>
                        <h4 className='text-sm lg:text-base font-poppins font-normal text-black'>Total</h4>
                        <p className='text-lg md:text-xl lg:text-2xl font-poppins font-bold text-[#B88E2F]'>Rs. 250,000.00</p>
                    </div>

                    <div className='pt-4 border-t-[1px] border-[#D9D9D9]'>
                        <div className='flex justify-start items-center gap-3'>
                            <img src={circle} alt='icon' />
                            <h4 className='text-base font-poppins font-normal'>Direct Bank Transfer</h4>
                        </div>
                        <p className='pt-4 text-sm lg:text-base font-poppins font-light text-gray-400 text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <div className='pt-4'>
                            <input type='radio' />
                            <label htmlFor="" className='pt-4 text-sm lg:text-base font-poppins font-light text-gray-400 pl-3'>Direct Bank Transfer</label>
                        </div>
                        <div className='pt-2'>
                            <input type='radio' />
                            <label htmlFor="" className='pt-4 text-sm lg:text-base font-poppins font-light text-gray-400 pl-3'>Cash On Delivery</label>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='py-6 text-sm lg:text-base font-poppins font-light text-black text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
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