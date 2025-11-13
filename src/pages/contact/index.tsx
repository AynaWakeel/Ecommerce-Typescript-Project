import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'
import location from '../../assets/icons/Vector1.svg'
import phone from '../../assets/icons/bxs_phone.svg'
import clock from '../../assets/icons/bi_clock-fill.svg'


const Contact: React.FC = () => {
  return (
    <div>

      {/* ----------- header ----------- */}
      <div className='relative'>
        <img src={cover} alt='cover' className='max-md:h-56 w-full' />
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <img src={logo} alt='icon' className='max-lg:w-16' />
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-black'>Contact</h1>
          <div className='pt-0 lg:pt-3 flex justify-center items-center'>
            <span className='text-sm lg:text-base font-poppins font-medium text-black px-2'>Home</span>
            <img src={arrow} alt='arrow' />
            <span className='text-sm lg:text-base font-poppins font-light text-black px-2'>Contact</span>
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
          <div className='flex justify-start items-start gap-6'>
            <div>
              <img src={location} alt='icon' className=''/>
            </div>
            <div>
              <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Address</h3>
              <p className='text-sm lg:text-base font-poppins font-normal text-black w-full xl:w-4/5 text-justify'>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className='flex justify-start items-start gap-6 pt-10'>
            <div>
              <img src={phone} alt='icon' className=''/>
            </div>
            <div>
              <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Phone</h3>
              <p className='text-sm lg:text-base font-poppins font-normal text-black w-full xl:w-4/5 text-justify'>Mobile: +(84) 546-6789
               Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className='flex justify-start items-start gap-6 pt-10'>
            <div>
              <img src={clock} alt='icon' className=''/>
            </div>
            <div>
              <h3 className='text-lg lg:text-xl xl:text-2xl font-medium font-poppins'>Working Time</h3>
              <p className='text-sm lg:text-base font-poppins font-normal text-black w-full text-justify'>Monday-Friday: 9:00 - 22:00
               </p>
                <p className='text-sm lg:text-base font-poppins font-normal text-black w-full text-justify'>
               Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='pb-5 lg:pb-8'>
            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Your Name</label>
            <input type='text' className='h-14 w-full xl:w-4/5 px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' placeholder='abc'/>
          </div>
          <div className='pb-5 lg:pb-10'>
            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Email address</label>
            <input type='text' className='h-14 w-full xl:w-4/5 px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' placeholder='abc@def.com'/>
          </div>
           <div className='pb-5 lg:pb-8'>
            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Subject</label>
            <input type='text' className='h-14 w-full xl:w-4/5 px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' placeholder='This is an optional'/>
          </div>
           <div className='pb-5 lg:pb-8'>
            <label htmlFor="" className='text-sm lg:text-base font-medium font-poppins pb-4 block'>Message</label>
            <input type='text' className='h-14 w-full xl:w-4/5 px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none' placeholder='Hi! I whould like to ask about' />
          </div>
         
            <button className='text-base lg:text-xl font-poppins font-normal text-black rounded-xl border-[1px] border-black h-14 w-44'>Submit</button>
         
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

export default Contact