import React from 'react'
import item1 from '../../assets/images/Mask group4.png'
import item2 from '../../assets/images/Mask group (1).png'
import item3 from '../../assets/images/Mask group (2).png'
import item4 from '../../assets/images/Mask group (3).png'

const SingleProduct = () => {
  return (
    <div>
        
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