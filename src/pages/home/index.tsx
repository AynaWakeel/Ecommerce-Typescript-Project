import React from 'react'
import Sofa from '../../assets/images/Rocket single seater 1.png'
import CloudSofa from '../../assets/images/Cloud sofa.png'
import Table from '../../assets/images/Mask group.png'
import item1 from '../../assets/images/Mask group4.png'
import item2 from '../../assets/images/Mask group (1).png'
import item3 from '../../assets/images/Mask group (2).png'
import item4 from '../../assets/images/Mask group (3).png'
import Sofaset from '../../assets/images/Asgaard sofa 1.png'
import blog1 from '../../assets/images/Rectangle 13.png'
import blog2 from '../../assets/images/Rectangle 14.png'
import blog3 from '../../assets/images/Rectangle 15.png'
import coverImg from '../../assets/images/Group 43.png'
import calender from '../../assets/icons/uil_calender.svg'
import clock from '../../assets/icons/Group.svg'

const Home: React.FC = () => {
  return (
    <div>

      {/* ------------- 1st sec --------------- */}

      <div className='flex justify-between items-center bg-[#FBEBB5] px-6 md:px-14 xl:px-40 py-5 lg:py-0'>
        <div>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-poppins font-medium '>Rocket single seater</h1>
          <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-2xl mt-4 md:mt-6 xl:mt-10 pb-2 border-b-2 border-black outline-none'>Shop Now</button>
        </div>
        <div className='max-md:hidden max-sm:hidden md:w-2/4 lg:w-1/2'>
          <img src={Sofa} alt='sofa' />
        </div>
      </div>

      {/* ------------ 2nd sec ----------- */}

      <div className='bg-[#FAF4F4] grid grid-rows-2 md:grid-rows-1 gap-5 md:gap-0 md:grid-cols-2 px-6 md:px-14 xl:px-40 py-8 lg:py-10'>
        <div className='relative'>
          <img src={Table} alt='sofa' className='w-4/5' />
          <div className='absolute bottom-0 lg:bottom-3xl xl:bottom-8'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-poppins font-medium '>Side Table</h1>
            <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-2xl md:mt-4 md:pb-2 border-b-2 border-black outline-none'>View More</button>
          </div>
        </div>
        <div className='relative'>
          <img src={CloudSofa} alt='sofa' className='w-4/5' />
          <div className='absolute bottom-0 lg:bottom-3 xl:bottom-8'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-poppins font-medium '>Side Table</h1>
            <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-2xl md:mt-4 md:pb-2 border-b-2 border-black outline-none'>View More</button>
          </div>
        </div>
      </div>

      {/* ----------- 3rd sec ------------- */}
      <div className='flex flex-col justify-between items-center gap-4 lg:gap-10 px-6 md:px-14 xl:px-40 py-8 lg:py-10 xl:py-16'>

        <div className=' text-center'>
          <h1 className='text-xl md:text-2xl lg:text-4xl font-poppins font-medium'>Top Picks For You</h1>
          <p className='text-xs md:text-sm lg:text-base font-poppins font-medium text-gray-400 pt-3'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <div>
            <img src={item1} alt='sofa' />
            <div className=''>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div>
            <img src={item2} alt='sofa' />
            <div className=''>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div>
            <img src={item3} alt='sofa' />
            <div className=''>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div>
            <img src={item4} alt='sofa' />
            <div className=''>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>

        </div>
        <div>
          <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-xl mt-10 md:pb-2 border-b-2 border-black'>View More</button>
        </div>
      </div>

      {/* ---------- 4th sec --------------- */}
     
      <div className='flex justify-center items-center gap-12 lg:gap-14 xl:gap-16 bg-[#FFF9E5] px-6 md:px-14 xl:px-20 py-8 lg:py-0'>
        <div className='max-md:hidden max-sm:hidden md:w-2/4 lg:w-1/2'>
          <img src={Sofaset} alt='sofa' />
        </div>
        <div className='text-center'>
          <h1 className='text-base lg:text-lg xl:text-2xl font-poppins font-medium '>New Arrivals</h1>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold '>Asgaard sofa</h1>
          <button className='font-normal font-poppins text-black text-sm md:text-base lg:text-lg xl:text-xl mt-4 md:mt-6 xl:mt-10 py-2 px-10 border-2 border-black'>Order Now</button>
        </div>
      </div>

      {/* ----------- 5th sec ------------ */}

       <div className='flex flex-col justify-between items-center gap-4 lg:gap-10 px-6 md:px-14 xl:px-40 py-8 lg:py-10 xl:py-16'>

        <div className=' text-center'>
          <h1 className='text-xl md:text-2xl lg:text-4xl font-poppins font-medium'>Our Blogs</h1>
          <p className='text-xs md:text-sm lg:text-base font-poppins font-medium text-gray-400 pt-3'>Find a bright ideal to suit your taste with our great selection</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
         
           <div>
            <img src={blog1} alt='sofa' />
            <div className='text-center pt-4'>
              <h6 className='text-base font-poppins font-normal text-black'>Going all-in with millennial design</h6>
               <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-2xl mt-2 pb-2 border-b-2 border-black outline-none'>Read More</button>
               <div className='flex justify-center items-center gap-3 pt-5'>
                <div className='flex items-center gap-2'>
                  <img src={clock} alt='icon' />
                  <h6 className='font-light font-poppins text-black text-xs md:text-sm lg:text-base'>5 min</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={calender} alt='icon' />
                  <h6 className='font-light font-poppins text-black text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
               </div>
            </div>
          </div>
         <div>
            <img src={blog2} alt='sofa' />
            <div className='text-center pt-4'>
              <h6 className='text-base font-poppins font-normal text-black'>Going all-in with millennial design</h6>
              <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-2xl mt-2  pb-2 border-b-2 border-black outline-none'>Read More</button>
              <div className='flex justify-center items-center gap-3 pt-5'>
                <div className='flex items-center gap-2'>
                  <img src={clock} alt='icon' />
                  <h6 className='font-light font-poppins text-black text-xs md:text-sm lg:text-base'>5 min</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={calender} alt='icon' />
                  <h6 className='font-light font-poppins text-black text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
               </div>
            </div>
          </div>
          <div>
            <img src={blog3} alt='sofa' />
            <div className='text-center pt-4'>
              <h6 className='text-base font-poppins font-normal text-black'>Going all-in with millennial design</h6>
              <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-2xl mt-2 pb-2 border-b-2 border-black outline-none'>Read More</button>
              <div className='flex justify-center items-center gap-3 pt-5'>
                <div className='flex items-center gap-2'>
                  <img src={clock} alt='icon' />
                  <h6 className='font-light font-poppins text-black text-xs md:text-sm lg:text-base'>5 min</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={calender} alt='icon' />
                  <h6 className='font-light font-poppins text-black text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
               </div>
            </div>
          </div>

        </div>
        <div>
          <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-xl mt-10 md:pb-2 border-b-2 border-black outline-none'>View All Post</button>
        </div>
      </div>

      {/* ---------- 6th sec ------------- */}
      <div className='relative'>
        <img src={coverImg} alt='cover' className='h-52 md:h-auto w-full'/>
         <div className='text-center absolute inset-0 flex flex-col justify-center items-center'>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-poppins font-bold '>Our Instagram</h1>
          <h1 className='text-xs md:text-base xl:text-xl font-poppins font-normal pt-2'>Follow our store on Instagram</h1>
          <button className='text-xs md:text-sm lg:text-base xl:text-xl font-poppins font-normal mt-1 md:mt-6 xl:mt-10 py-2 px-10 rounded-3xl bg-stone-50 shadow-md shadow-stone-200'>Follow Us</button>
        </div>
      </div>


    </div>
  )
}

export default Home