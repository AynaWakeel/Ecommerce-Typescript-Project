import React, { useState } from 'react'
import item1 from '../../assets/images/Mask group4.png'
import item2 from '../../assets/images/Mask group (1).png'
import item3 from '../../assets/images/Mask group (2).png'
import item4 from '../../assets/images/Mask group (3).png'
import item5 from '../../assets/images/white sofa 1.png'
import item6 from '../../assets/images/white sofa 2.png'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import sofa from '../../assets/images/Asgaard sofa 1.png'
import sofa1 from '../../assets/images/Stuart sofa 1.png'
import sofa2 from '../../assets/images/Outdoor sofa2.png'
import sofa3 from '../../assets/images/brown sofa.png'
import sofa4 from '../../assets/images/Outdoor sofa.png'
import halfstar from '../../assets/icons/carbon_star-half.svg'
import star from '../../assets/icons/dashicons_star-filled.svg'
import heart from '../../assets/icons/heart.svg'
import twitter from '../../assets/icons/ant-design_twitter-circle-filled.svg'
import linkedin from '../../assets/icons/akar-icons_linkedin-box-fill.svg'
import facebook from '../../assets/icons/akar-icons_facebook-fill.svg'
import Popup from '../../components/popup'


const SingleProduct: React.FC = () => {
  const [isOpen , setISOpen] = useState<boolean>(false)
  return (
    <div>

      {isOpen && 
      <Popup closePopup={()=>setISOpen(false)}/>
      }

      {/* ------------------ header ---------------- */}
      <div className='flex justify-start items-center gap-4 lg:gap-10 px-6 md:px-14 xl:px-40 pt-8 xl:pt-16  mt-20'>
        <h4 className='font-poppins font-normal text-xl xl:text-2xl text-[#9F9F9F] pr-2'>Home</h4>
        <img src={arrow} alt='arow' />
        <h4 className='font-poppins font-normal  text-xl xl:text-2xl text-[#9F9F9F] px-2'>Shop</h4>
        <img src={arrow} alt='arow' />
        <h4 className='font-poppins font-normal  text-xl xl:text-2xl text-black pl-8 border border-l-2 border-y-0 border-r-0 border-gray-400'>Asgaard Sofa</h4>
      </div>

      {/* ---------------- 1st sec ------------------- */}
      <div className='flex flex-col lg:flex-row justify-between items-start gap-10 px-6 md:px-14 xl:px-40 py-8 lg:py-10 xl:py-16'>
        <div className='w-full lg:w-1/2 flex justify-start items-start gap-5'>
          <div className='flex flex-col justify-start items-center gap-4'>
            <div className=' bg-[#FFF9E5] rounded-lg flex justify-center items-center'>
              <img src={sofa1} alt='img' className='w-56 h-24' />
            </div>
            <div className=' bg-[#FFF9E5] rounded-lg flex justify-center items-center'>
              <img src={sofa2} alt='img' className='w-56 h-24' />
            </div>
            <div className=' bg-[#FFF9E5] rounded-lg flex justify-center items-center'>
              <img src={sofa3} alt='img' className='w-56 h-24' />
            </div>
            <div className=' bg-[#FFF9E5] rounded-lg flex justify-center items-center'>
              <img src={sofa4} alt='img' className='w-56 h-24' />
            </div>

          </div>
          <div className=' bg-[#FFF9E5] h-[500px] rounded-lg flex justify-center items-center'>
            <img src={sofa} alt='img' className='w-full' />
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <h2 className='font-poppins font-normal text-3xl xl:text-[42px] '>Asgaard sofa</h2>
          <h4 className='font-poppins font-medium text-2xl text-[#9F9F9F] pt-4'>Rs. 250,000.00</h4>
          <div className='flex justify-start items-center gap-4 py-2'>
            <div className='flex justify-start items-center gap-2'>
              <img src={star} alt='img' className='' />
              <img src={star} alt='img' className='' />
              <img src={star} alt='img' className='' />
              <img src={star} alt='img' className='' />
              <img src={halfstar} alt='img' className='' />
            </div>
            <h5 className=' font-poppins font-normal text-[13px] text-black px-4  border border-l-2 border-y-0 border-r-0 border-gray-400'>5 Customer Review</h5>
          </div>
          <p className=' font-poppins font-normal text-[13px] text-black py-3 xl:w-9/12 text-justify'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <div>
            <h6 className=' font-poppins font-normal text-[14px] text-[#9F9F9F] pb-3'>Size</h6>
            <div className='flex justify-start items-center gap-4'>
              <div className='bg-[#FAF4F4] hover:bg-[#FBEBB5] active:bg-[#FAF4F4]  rounded-lg w-8 h-8 flex justify-center items-center'>
                <span className=' font-poppins font-normal text-[13px] text-black'>L</span>
              </div>
              <div className='bg-[#FAF4F4] hover:bg-[#FBEBB5] active:bg-[#FAF4F4] rounded-lg w-8 h-8 flex justify-center items-center'>
                <span className=' font-poppins font-normal text-[13px] text-black'>XL</span>
              </div>
              <div className='bg-[#FAF4F4] hover:bg-[#FBEBB5] active:bg-[#FAF4F4]  rounded-lg w-8 h-8 flex justify-center items-center'>
                <span className=' font-poppins font-normal text-[13px] text-black'>XS</span>
              </div>

            </div>
          </div>
          <div>
            <h6 className=' font-poppins font-normal text-[14px] text-[#9F9F9F] py-3'>Color</h6>
            <div className='flex justify-start items-center gap-4'>
              <div className='bg-[#816DFA] active:border active:border-2 active:border-gray-800 rounded-full w-8 h-8 flex justify-center items-center'>
              </div>
              <div className='bg-black active:border active:border-2 active:border-gray-300 rounded-full w-8 h-8 flex justify-center items-center'>
              </div>
              <div className='bg-[#CDBA7B] active:border active:border-2 active:border-gray-800 rounded-full w-8 h-8 flex justify-center items-center'>
              </div>
            </div>
          </div>

          <div className='flex justify-start items-center gap-6 py-4'>
            <div className='rounded-md h-14 w-28 border-[1px] border-[#9F9F9F] flex justify-center items-center gap-6'>
              <span className='text-sm lg:text-base font-poppins font-normal text-black '>-</span>
              <span className='text-sm lg:text-base font-poppins font-normal text-black '>1</span>
              <span className='text-sm lg:text-base font-poppins font-normal text-black '>+</span>
            </div>
            <button className='text-base lg:text-xl font-poppins font-normal text-black rounded-xl border-[1px] border-black h-14 w-44' onClick={()=>setISOpen(true)}>Add To Cart</button>
          </div>

          <div className='mt-6 pt-10 border border-t-[1px] border-x-0 border-b-0 border-[#D9D9D9]'>
            <div className='flex justify-start items-center gap-4 py-1'>
              <h6 className='font-poppins font-normal text-base text-[#9F9F9F] w-24'>SKU</h6>
              <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>: SS001</h6>
            </div>
             <div className='flex justify-start items-center gap-4 py-1'>
              <h6 className='font-poppins font-normal text-base text-[#9F9F9F] w-24'>Category</h6>
              <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>: Sofas</h6>
            </div>
             <div className='flex justify-start items-center gap-4 py-1'>
              <h6 className='font-poppins font-normal text-base text-[#9F9F9F] w-24'>Tags</h6>
              <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>: Sofa, Chair, Home, Shop</h6>
            </div>
             <div className='flex justify-start items-center gap-4 py-1'>
              <h6 className='font-poppins font-normal text-base text-[#9F9F9F]  w-24'>Share</h6>
              <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>: </h6>
              <div className='flex justify-start items-center gap-4 '>
                 <img src={facebook} alt='icon'/>
                 <img src={linkedin} alt='icon'/>
                 <img src={twitter} alt='icon' className='lg:pr-32'/>
                 <img src={heart} alt='icon'/>
              </div>
            </div>
          
          </div>
        </div>
      </div>

      {/* --------------- 2nd sec -------------- */}
      <div className='flex flex-col justify-between items-center gap-4 lg:gap-10 px-6 md:px-14 xl:px-40 py-8 lg:py-10 xl:py-16 border border-y-[1px] border-x-0 border-gray-200'>
        <div className='flex justify-center items-center gap-4 lg:gap-11'>
          <h4 className='font-poppins font-normal text-base md:text-xl lg:text-2xl text-[#9F9F9F] hover:text-black cursor-pointer active:text-black'>Description</h4>
          <h4 className='font-poppins font-normal textbase md:text-xl lg:text-2xl text-[#9F9F9F] hover:text-black cursor-pointer active:text-black'>Additional Information</h4>
          <h4 className='font-poppins font-normal text-base md:text-xl lg:text-2xl text-[#9F9F9F] hover:text-black cursor-pointer active:text-black'>Reviews [5]</h4>
        </div>
        <div className='lg:px-14'>
          <p className='font-poppins font-normal text-sm md:text-base text-[#9F9F9F] text-justify pb-4'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p className='font-poppins font-normal text-sm md:text-base text-[#9F9F9F] text-justify'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
          <div className='bg-[#FFF9E5] lg:w-1/2 lg:h-80'>
            <img src={item5} alt='sofa' className='h-auto w-full' />
          </div>
          <div className='bg-[#FFF9E5] lg:w-1/2 lg:h-80'>
            <img src={item6} alt='sofa' className='h-auto w-full' />
          </div>

        </div>

      </div>

      {/* ----------- 3rd sec ------------- */}
      <div className='flex flex-col justify-between items-center gap-4 lg:gap-10 px-6 md:px-14 xl:px-40 py-8 lg:py-10 xl:py-16'>

        <div className=' text-center'>
          <h1 className='text-xl md:text-2xl lg:text-4xl font-poppins font-medium'>Related Products</h1>
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

    </div>
  )
}

export default SingleProduct