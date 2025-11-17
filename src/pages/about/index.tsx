import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'
import calender from '../../assets/icons/uis_calender.svg'
import user from '../../assets/icons/dashicons_admin-users.svg'
import tag from '../../assets/icons/ci_tag.svg'
import search from '../../assets/icons/akar-icons_search.svg'
import blog1 from '../../assets/images/Rectangle 68.png'
import blog2 from '../../assets/images/Rectangle 78.png'
import blog3 from '../../assets/images/Rectangle 88.png'
import blog4 from '../../assets/images/Rectangle 69.png'
import blog5 from '../../assets/images/Rectangle 69 (1).png'
import blog6 from '../../assets/images/Rectangle 69 (2).png'
import blog7 from '../../assets/images/Rectangle 69 (3).png'
import blog8 from '../../assets/images/Rectangle 69 (4).png'


const About: React.FC = () => {
  return (
    <div>


      {/* ----------- header ----------- */}
      <div className='relative mt-20'>
        <img src={cover} alt='cover' className='max-md:h-56 w-full' />
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <img src={logo} alt='icon' className='max-lg:w-16' />
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-black'>Blog</h1>
          <div className='pt-0 lg:pt-3 flex justify-center items-center'>
            <span className='text-sm lg:text-base font-poppins font-medium text-black px-2'>Home</span>
            <img src={arrow} alt='arrow' />
            <span className='text-sm lg:text-base font-poppins font-light text-black px-2'>Blog</span>
          </div>
        </div>
      </div>

      {/* ---------------- blog sec --------------- */}
      <div className='px-6 md:px-14 xl:px-40 py-10 lg:pt-20'>

        <div className='flex lg:flex-row flex-col-reverse justify-between items-start gap-10 lg:gap-12 xl:gap-20'>
          <div className='w-full lg:w-2/3 xl:w-3/4 '>
            <div className='pb-14'>
              <img src={blog1} alt='img' className='w-full h-auto'/>
              <div className='flex justify-start items-center gap-10 py-5'>
                <div className='flex items-center gap-2'>
                  <img src={user} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>5 min</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={calender} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={tag} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
              </div>
              <h3 className='font-poppins font-medium text-lg lg:text-2xl xl:text-[32px] pb-4'>Going all-in with millennial design</h3>
              <p className='font-poppins font-normal text-sm xl:text-[15px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-xl mt-10 md:pb-2 border-b-2 border-black'>View More</button>
            </div>

            <div className='pb-14'>
              <img src={blog2} alt='img' className='w-full h-auto' />
              <div className='flex justify-start items-center gap-10 py-5'>
                <div className='flex items-center gap-2'>
                  <img src={user} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>5 min</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={calender} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={tag} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
              </div>
              <h3 className='font-poppins font-medium text-lg lg:text-2xl xl:text-[32px] pb-4'>Going all-in with millennial design</h3>
              <p className='font-poppins font-normal text-sm xl:text-[15px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-xl mt-10 md:pb-2 border-b-2 border-black'>View More</button>
            </div>

            <div className='pb-5'>
              <img src={blog3} alt='img'  className='w-full h-auto'/>
              <div className='flex justify-start items-center gap-10 py-5'>
                <div className='flex items-center gap-2'>
                  <img src={user} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>5 min</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={calender} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={tag} alt='icon' />
                  <h6 className='font-normal font-poppins text-[#9F9F9F] text-xs md:text-sm lg:text-base'>12th Oct 2022</h6>
                </div>
              </div>
              <h3 className='font-poppins font-medium text-lg lg:text-2xl xl:text-[32px] pb-4'>Going all-in with millennial design</h3>
              <p className='font-poppins font-normal text-sm xl:text-[15px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <button className='font-medium font-poppins text-black text-sm md:text-base lg:text-lg xl:text-xl mt-10 md:pb-2 border-b-2 border-black'>View More</button>
            </div>
          </div>
          <div className='w-full lg:w-1/2 xl:w-1/4 '>
            <div className='mb-8 relative'>
              <input type='search' className='h-14 w-full px-5 rounded-xl border-[1px] border-[#9F9F9F] outline-none'/>
              <img src={search} alt='search' className='absolute top-4 right-4'/>
            </div>
            <div className='xl:px-8'>
            <div className='mb-6'>
              <h4 className='font-poppins font-medium text-xl lg:text-2xl pb-2'>Categories</h4>
               <div className='flex justify-between items-center py-4'>
                <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>Crafts</h6>
                <span className='font-poppins font-normal text-base text-[#9F9F9F]'>1</span>
              </div>
               <div className='flex justify-between items-center py-4'>
                <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>Design</h6>
                <span className='font-poppins font-normal text-base text-[#9F9F9F]'>2</span>
              </div>
               <div className='flex justify-between items-center py-4'>
                <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>Handmade</h6>
                <span className='font-poppins font-normal text-base text-[#9F9F9F]'>6</span>
              </div>
               <div className='flex justify-between items-center py-4'>
                <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>Interior</h6>
                <span className='font-poppins font-normal text-base text-[#9F9F9F]'>8</span>
              </div>
             
               <div className='flex justify-between items-center py-4'>
                <h6 className='font-poppins font-normal text-base text-[#9F9F9F]'>Wood</h6>
                <span className='font-poppins font-normal text-base text-[#9F9F9F]'>4</span>
              </div>
            
              
            </div>
            <div>
              <h4 className='font-poppins font-medium text-xl lg:text-2xl pb-2'>Recent Posts</h4>
              <div className='flex justify-start items-center gap-3 mt-4'>
                <img src={blog4} alt='blog' />
                <div>
                  <h5 className='font-poppins font-normal text-[14px]'>Going all-in with millennial design</h5>
                  <h6 className='font-poppins font-normal text-[12px] text-[#9F9F9F]'>03 Aug 2022</h6>
                </div>
              </div>

              <div className='flex justify-start items-center gap-3 mt-4'>
                <img src={blog5} alt='blog' />
                <div>
                  <h5 className='font-poppins font-normal text-[14px]'>Exploring new ways of decorating</h5>
                  <h6 className='font-poppins font-normal text-[12px] text-[#9F9F9F]'>03 Aug 2022</h6>
                </div>
              </div>

              <div className='flex justify-start items-center gap-3 mt-4'>
                <img src={blog6} alt='blog' />
                <div>
                  <h5 className='font-poppins font-normal text-[14px]'>Handmade pieces that took time to make</h5>
                  <h6 className='font-poppins font-normal text-[12px] text-[#9F9F9F]'>03 Aug 2022</h6>
                </div>
              </div>

              <div className='flex justify-start items-center gap-3 mt-4'>
                <img src={blog7} alt='blog' />
                <div>
                  <h5 className='font-poppins font-normal text-[14px]'>Modern home in Milan</h5>
                  <h6 className='font-poppins font-normal text-[12px] text-[#9F9F9F]'>03 Aug 2022</h6>
                </div>
              </div>

              <div className='flex justify-start items-center gap-3 mt-4'>
                <img src={blog8} alt='blog' />
                <div>
                  <h5 className='font-poppins font-normal text-[14px]'>Colorful office redesign</h5>
                  <h6 className='font-poppins font-normal text-[12px] text-[#9F9F9F]'>03 Aug 2022</h6>
                </div>
              </div>
            </div>
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

export default About