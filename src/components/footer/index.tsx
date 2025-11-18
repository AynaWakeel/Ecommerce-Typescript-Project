import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <div className='bg-white px-6 md:px-14 xl:px-20 pt-5 lg:pt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 py-8'>
         
          <div>
            <p className='text-base text-[#9F9F9F] font-normal font-poppins'>400 University Drive Suite 200 Coral Gables,
             FL 33134 USA</p>
          </div>
          <div>
            <h5 className='text-base text-[#9F9F9F] font-normal font-poppins pb-7'>Links</h5>
            <ul className='flex flex-col gap-4'>
              <li><a className='text-base text-black font-normal font-poppins'>Home</a></li>
              <li><a className='text-base text-black font-normal font-poppins'>Shop</a></li>
              <li><a className='text-base text-black font-normal font-poppins'>About</a></li>
              <li><a className='text-base text-black font-normal font-poppins'>Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className='text-base text-[#9F9F9F] font-normal font-poppins pb-7'>Help</h5>
            <ul className='flex flex-col gap-4'>
              <li><a className='text-base text-black font-normal font-poppins'>Payment Options</a></li>
              <li><a className='text-base text-black font-normal font-poppins'>Returns</a></li>
              <li><a className='text-base text-black font-normal font-poppins'>Privacy Policies</a></li>
            </ul>
          </div>
          <div>
            <h5 className='text-base text-[#9F9F9F] font-normal font-poppins pb-7'>Newsletter</h5>
            <div>
             <input type='text' className='border-x-0 outline-none border-b-2 border-black mr-2 pr-4' placeholder='Enter Your Email Address'/>
             <button className='font-medium font-poppins text-black text-sm border-b-2 border-black outline-none'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className='py-6 border-t-2 border-gray-200'>
          <p className='text-sm lg:text-base font-poppins font-normal text-black'>2022 Meubel House. All rights reverved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer