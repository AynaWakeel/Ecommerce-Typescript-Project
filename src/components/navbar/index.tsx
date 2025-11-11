import React from 'react'
import { useNavigate } from 'react-router'
import cart from '../../assets/icons/Vector.svg'
import heart from '../../assets/icons/Vector (1).svg'
import search from '../../assets/icons/Vector (2).svg'
import user from '../../assets/icons/Vector (3).svg'
import menu from '../../assets/icons/fi_menu.svg'

const Navbar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div>

      <div className='bg-[#FBEBB5] w-full p-4 xl:py-8 xl:px-20 flex justify-end max-lg:justify-between max-md:justify-end'>
        <div className='hidden md:flex justify-between gap-28'>

          <ul className='flex justify-between items-center gap-10 xl:gap-20 px-5 xl:px-20'>
            <li><a onClick={() => navigate('/')} className='text-base font-poppins font-medium text-black cursor-pointer'>Home</a></li>
            <li><a onClick={() => navigate('/shop')} className='text-base font-poppins font-medium text-black cursor-pointer'>Shop</a></li>
            <li><a onClick={() => navigate('/about')} className='text-base font-poppins font-medium text-black cursor-pointer'>About</a></li>
            <li><a onClick={() => navigate('/contact')} className='text-base font-poppins font-medium text-black cursor-pointer'>Contact</a></li>
          </ul>

          <div>
            <ul className='hidden  lg:flex justify-between items-center gap-10 px-10'>
              <li>
                <img src={user} alt='img1' className='w-5' />
              </li>
              <li>
                <img src={search} alt='img2' className='w-5' />
              </li>
              <li>
                <img src={heart} alt='img3' className='w-5' />
              </li>
              <li>
                <img src={cart} alt='img4' className='w-5' />
              </li>
            </ul>
          </div>

        </div>

        <div className='lg:hidden'>
           <img src={menu} alt='menubar'/>
        </div>


      </div>
    </div>
  )
}

export default Navbar