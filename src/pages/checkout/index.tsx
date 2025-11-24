import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import arrowdown from '../../assets/icons/dashicons_arrow-down-alt2 (1).svg'
import circle from '../../assets/icons/Ellipse 1.svg'
import { cartItem, getItem } from '../../data/cart'
import { useForm } from 'react-hook-form'

interface FormData {
    firstName: string;
    lastName: string;
    companyName: string;
    country: string;
    street: string;
    city: string;
    province: string;
    zipCode: number;
    email: string;
    phone: number;
    info: string;
    payment:string;
}

const Checkout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log("data", data);
        localStorage.removeItem('cart')
        alert("Your order has been placed successfully.")
    }

    const items: cartItem[] = getItem()
    const grandTotal = items.reduce((sum, item) => sum + item.subtotal, 0)

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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' px-6 md:px-14 xl:px-40 py-8 lg:py-10 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20'>

                    <div className='w-full lg:w-1/2'>

                        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold font-poppins pb-14'>Billing Details</h2>

                        <div className='flex gap-2 xl:gap-6 items-center pb-5 lg:pb-10 '>
                            <div className='flex-1'>
                                <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>First Name</label>
                                <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'
                                    {...register("firstName", { required: true })} />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Last Name</label>
                                <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'
                                    {...register("lastName", { required: true })} />
                            </div>

                        </div>
                        {errors.firstName && <p>Enter your First Name.</p>}
                        {errors.lastName && <p>Enter your Last Name.</p>}
                        <div className='pb-5 lg:pb-8'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Company Name (Optional)</label>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'
                                {...register("companyName", { required: true })} />
                        </div>
                        {errors.companyName && <p>Enter your Company Name.</p>}
                        <div className='pb-5 lg:pb-10'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Country / Region</label>

                            <div className='relative'>
                                <select id="" className='appearance-none h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none text-base font-poppins font-normal text-[#9F9F9F]' {...register("country", { required: true })} >
                                    <option>Sri Lanka</option>
                                    <option>Pakistan</option>
                                    <option>India</option>
                                    <option>China</option>
                                </select>
                                <img src={arrowdown} alt='down' className='pointer-events-none absolute top-5 right-4' />
                            </div>
                        </div>
                        {errors.country && <p>Enter your Country.</p>}
                        <div className='pb-5 lg:pb-10'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Street address</label>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'
                                {...register("street", { required: true })} />
                        </div>
                        {errors.street && <p>Enter your Street Number.</p>}
                        <div className='pb-5 lg:pb-8'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Town / City</label>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'
                                {...register("city", { required: true })} />
                        </div>
                        {errors.city && <p>Enter your City.</p>}
                        <div className='pb-5 lg:pb-8'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Province</label>
                            <div className='relative'>
                                <select id="" className='appearance-none h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none text-base font-poppins font-normal text-[#9F9F9F]' {...register("province", { required: true })} >
                                    <option>Western Province</option>
                                    <option>East</option>
                                    <option>North</option>
                                    <option>South</option>
                                </select>
                                <img src={arrowdown} alt='down' className='pointer-events-none absolute top-5 right-4' />
                            </div>
                        </div>
                        {errors.province && <p>Enter your Province.</p>}
                        <div className='pb-5 lg:pb-10'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Zip Code</label>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'
                                {...register("zipCode", { required: true })} />
                        </div>
                        {errors.zipCode && <p>Enter your Zip Code.</p>}
                        <div className='pb-5 lg:pb-10'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Phone</label>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'
                                {...register("phone", { required: true })} />
                        </div>
                        {errors.phone && <p>Enter your Phone Number.</p>}
                        <div className='pb-5 lg:pb-10'>
                            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Email address</label>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'
                                {...register("email", { required: true })} />
                        </div>
                        {errors.email && <p>Enter your Email Address.</p>}
                        <div className='pb-5 lg:pb-10'>
                            <input type='text' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' placeholder='Additional Information'
                                {...register("info")} />
                        </div>



                    </div>

                    <div className='w-full lg:w-1/2 lg:mt-12'>
                        <div className='flex justify-between pb-4'>
                            <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Product</h3>
                            <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Subtotal</h3>
                        </div>

                        {items.map((items) => (

                            <div className='flex justify-between pb-4'>
                                <div className='flex justify-start gap-2'>
                                    <span className='text-sm lg:text-base font-poppins font-normal text-[#9F9F9F] '>{items.name}</span>
                                    <span className='text-sm lg:text-base font-poppins font-normal text-black'>X {items.quantity}</span>
                                </div>
                                <span className='text-sm lg:text-base font-poppins font-light text-black '>Rs. {items.subtotal}</span>
                            </div>
                        ))}

                        {/* <div className='flex justify-between pb-4'>
                        <h4 className='text-sm lg:text-base font-poppins font-normal text-black'>Subtotal</h4>
                        <p className='text-sm lg:text-base font-poppins font-light text-black'>Rs. {grandTotal}</p>
                    </div> */}
                        <div className='flex justify-between pb-6'>
                            <h4 className='text-sm lg:text-base font-poppins font-normal text-black'>Total</h4>
                            <p className='text-lg md:text-xl lg:text-2xl font-poppins font-bold text-[#B88E2F]'>Rs. {grandTotal}</p>
                        </div>

                        <div className='pt-4 border-t-[1px] border-[#D9D9D9]'>
                            <div className='flex justify-start items-center gap-3'>
                                <img src={circle} alt='icon' />
                                <h4 className='text-base font-poppins font-normal'>Direct Bank Transfer</h4>
                            </div>
                            <p className='pt-4 text-sm lg:text-base font-poppins font-light text-gray-400 text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            <div className='pt-4'>
                                <input type='radio' value='Direct Bank Transfer' {...register("payment")}/>
                                <label htmlFor="payment" className='pt-4 text-sm lg:text-base font-poppins font-light text-gray-400 pl-3'>Direct Bank Transfer</label>
                            </div>
                            <div className='pt-2'>
                                <input type='radio' value='Cash On Delivery' {...register("payment")}/>
                                <label htmlFor="payment" className='pt-4 text-sm lg:text-base font-poppins font-light text-gray-400 pl-3'>Cash On Delivery</label>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='py-6 text-sm lg:text-base font-poppins font-light text-black text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                                <span className='text-sm lg:text-base font-poppins font-semibold'> privacy policy.</span>
                            </p>
                            <button type='submit' className='text-base lg:text-xl font-poppins font-normal text-black rounded-xl border-[1px] border-black h-14 w-44'>Place order</button>

                        </div>

                    </div>

                </div>
            </form>


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