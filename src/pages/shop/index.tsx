import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'
import dot from '../../assets/icons/ci_grid-big-round.svg'
import list from '../../assets/icons/bi_view-list.svg'
import filter from '../../assets/icons/system-uicons_filtering.svg'
import item1 from '../../assets/images/Mask group4.png'
import item2 from '../../assets/images/Mask group (1).png'
import item3 from '../../assets/images/Mask group (2).png'
import item4 from '../../assets/images/Mask group (3).png'
import item5 from '../../assets/images/Plain console_ 1.png'
import item6 from '../../assets/images/Reclaimed teak.png'
import item7 from '../../assets/images/Maya sofa three seater 1.png'
import item8 from '../../assets/images/Outdoor sofa.png'
import item9 from '../../assets/images/Kent coffee table 1.png'
import item10 from '../../assets/images/Asgaard sofa 1.png'
import item11 from '../../assets/images/Round coffee.png'
import item12 from '../../assets/images/Sideboard.png'
import item13 from '../../assets/images/Mask group.png'
import item14 from '../../assets/images/SJP_0825  1.png'
import item15 from '../../assets/images/Grain coffee.png'
import item16 from '../../assets/images/Bella chair.png'
import { useNavigate } from 'react-router'

const Shop: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* ----------- header ----------- */}
      <div className='relative mt-20'>
        <img src={cover} alt='cover' className='max-md:h-56 w-full'/>
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <img src={logo} alt='icon' className='max-lg:w-16'/>
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-black'>Shop</h1>
          <div className='pt-0 lg:pt-3 flex justify-center items-center'>
            <span className='text-sm lg:text-base font-poppins font-medium text-black px-2'>Home</span>
            <img src={arrow} alt='arrow'/>
            <span className='text-sm lg:text-base font-poppins font-light text-black px-2'>Shop</span>
          </div>
        </div>
      </div>

      {/* ------------------- filters -------------- */}
      <div className='bg-[#FAF4F4] w-full mt-10 py-6 px-6 lg:px-10 xl:px-20 flex flex-col gap-4 lg:flex-row justify-between items-center'>
        <div className='flex justify-center md:justify-between items-center gap-4 flex-wrap'>
          <div className='flex justify-between items-center gap-2 lg:gap-6'>
            <img src={filter} alt='arrow'/>
            <span className='text-base lg:text-xl font-normal font-poppins'>Filter</span>
            <img src={dot} alt='arrow'/>
            <img src={list} alt='arrow'/>           
          </div>
          <div className='border-l-2 border-gray-400'>
            <h5 className='text-base font-normal font-poppins pl-5'>Showing 1–16 of 32 results</h5>
          </div>
        </div>
        <div className='flex justify-center md:justify-between items-center  gap-4 lg:gap-6 flex-wrap'>
           <div className='flex justify-between items-center gap-4'>
            <label htmlFor=""  className='text-base lg:text-xl font-normal font-poppins'>Show</label>
            <input type='text' className=' outline-none rounded-lg w-14 h-10 lg:h-12 px-4' placeholder='12'/>
          </div>
          <div className='flex justify-between items-center  gap-2 lg:gap-4'>
            <label htmlFor=""  className='text-base lg:text-xl font-normal font-poppins'>Short by</label>
            <input type='text' className='py-3 px-5 outline-none rounded-lg w-24 h-10 lg:h-12' placeholder='Default'/>
          </div>
        </div>
      </div>
      
      {/*  ------------------ cards ----------------- */}
       <div className='flex flex-col justify-between items-center gap-4 lg:gap-10 px-6 md:px-14 xl:px-40 py-4'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <div  onClick={()=>navigate('/single-product')} className='cursor-pointer'>
            <img src={item1} alt='sofa' />
            <div>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div>
            <img src={item2} alt='sofa' />
            <div>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div>
            <img src={item3} alt='sofa' />
            <div>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='max-xl:relative'>
            <img src={item4} alt='sofa' />
            <div className='max-xl:absolute max-xl:bottom-0'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>

           <div className='mt-12'>
            <img src={item15} alt='sofa' />
            <div className='pt-12'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='mt-16 pt-2'>
            <img src={item9} alt='sofa' />
            <div className='pt-11'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='mt-0 md:relative'>
            <img src={item11} alt='sofa'/>
            <div className='md:absolute md:bottom-0'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='mt-20'>
            <img src={item6} alt='sofa' />
            <div className='pt-10'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
        

           <div className='mt-32 max-xl:mt-20 max-xl:pt-2'>
            <img src={item5} alt='sofa' />
            <div className='pt-10'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='mt-10 md:relative'>
            <img src={item12} alt='sofa' />
            <div className='md:absolute md:bottom-0'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='mt-12'>
            <img src={item14} alt='sofa' />
            <div className='pt-11 xl:pt-12'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='mt-20'>
            <img src={item16} alt='sofa' />
            <div className='pt-10'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>

          
          <div className='mt-16 pt-2 md:relative'>
            <img src={item13} alt='sofa' className='w-64'/>
            <div className='md:absolute md:bottom-0'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
           <div className='mt-12'>
            <img src={item10} alt='sofa' className='w-64'/>
            <div className='pt-10'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='mt-32'>
            <img src={item7} alt='sofa' />
            <div className='pt-11 max-lg:pt-9'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>
          <div className='mt-12'>
            <img src={item8} alt='sofa' />
            <div className='pt-10 xl:pt-12'>
              <h6 className='text-base font-poppins font-normal '>Trenton modular sofa_3</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>Rs. 25,000.00</h5>
            </div>
          </div>

        </div>
        <div className='flex flex-row justify-center items-center gap-7'>
          <button className='font-light font-poppins text-black bg-[#FFF9E5] rounded-lg text-sm md:text-base lg:text-lg xl:text-xl mt-10 py-3 px-5 w-14 hover:bg-[#FBEBB5]'>1</button>
          <button className='font-light font-poppins text-black bg-[#FFF9E5] rounded-lg text-sm md:text-base lg:text-lg xl:text-xl mt-10 py-3 px-5 w-14 hover:bg-[#FBEBB5]'>2</button>
          <button className='font-light font-poppins text-black bg-[#FFF9E5] rounded-lg text-sm md:text-base lg:text-lg xl:text-xl mt-10 py-3 px-5 w-14 hover:bg-[#FBEBB5]'>3</button>
          <button className='font-light font-poppins text-black bg-[#FFF9E5] rounded-lg text-sm md:text-base lg:text-lg xl:text-xl mt-10 py-3 px-5 hover:bg-[#FBEBB5]'>Next</button>
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

export default Shop