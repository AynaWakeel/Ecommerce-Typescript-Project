import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'
import dot from '../../assets/icons/ci_grid-big-round.svg'
import list from '../../assets/icons/bi_view-list.svg'
import filter from '../../assets/icons/system-uicons_filtering.svg'
import { useNavigate } from 'react-router'
import { products } from '../../data/products'

const Shop = () => {
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
          {products.map((items)=>(

          <div className='cursor-pointer h-96 flex flex-col justify-center items-center xl:items-start' onClick={()=>navigate(`/single-product/${items.id}`)}>
            <div className='h-72 flex justify-center items-center'>
              <img src={items.image} alt='sofa' className='w-full h-auto'/>
            </div>
            <div>
              <h6 className='text-base font-poppins font-normal w-52 line-clamp-2'>{items.name}</h6>
              <h5 className='font-medium font-poppins text-black text-base xl:text-2xl md:mt-4 border-black'>{items.price}</h5>
            </div>
          </div>
          ))}

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