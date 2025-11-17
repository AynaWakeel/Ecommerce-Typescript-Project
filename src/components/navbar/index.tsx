import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import cart from '../../assets/icons/Vector.svg'
import heart from '../../assets/icons/Vector (1).svg'
import search from '../../assets/icons/Vector (2).svg'
import user from '../../assets/icons/Vector (3).svg'
import menu from '../../assets/icons/fi_menu.svg'

const Navbar: React.FC = () => {
  const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>

      <div className={`fixed top-0 z-30 w-full p-4 xl:py-8 xl:px-20 flex justify-end  ${isScrolled ? " bg-white shadow-md" : " bg-transparent"} `}>
        <div className='hidden md:flex justify-between gap-28'>

          <ul className='flex justify-between items-center gap-10 xl:gap-20 px-5 xl:px-20'>
            <li><a onClick={() => navigate('/')} className='text-base font-poppins font-medium text-black cursor-pointer'>Home</a></li>
            <li><a onClick={() => navigate('/shop')} className='text-base font-poppins font-medium text-black cursor-pointer'>Shop</a></li>
            <li><a onClick={() => navigate('/about')} className='text-base font-poppins font-medium text-black cursor-pointer'>About</a></li>
            <li><a onClick={() => navigate('/contact')} className='text-base font-poppins font-medium text-black cursor-pointer'>Contact</a></li>
          </ul>

          <div>
            <ul className='hidden md:flex justify-between items-center gap-10 px-10'>
              <li onClick={()=>navigate('/myaccount')} className='cursor-pointer'>
                <img src={user} alt='img1' className='w-5' />
              </li>
              <li  className='cursor-pointer'>
                <img src={search} alt='img2' className='w-5' />
              </li>
              <li  className='cursor-pointer'>
                <img src={heart} alt='img3' className='w-5' />
              </li>
              <li  onClick={()=>navigate('/cart')}  className='cursor-pointer'>
                <img src={cart} alt='img4' className='w-5' />
              </li>
            </ul>
          </div>

        </div>


        <div className='md:hidden'>
           <img src={menu} alt='menubar'  onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
        </div>

        {isMenuOpen && 

        <>
        
        <div className='md:hidden fixed top-14 left-0 z-30 bg-white w-full'>
           <ul className='flex flex-col justify-center items-center'>
            <li className='bg-white hover:bg-yellow-100 w-full text-center py-2 cursor-pointer' onClick={() => navigate('/')} ><a className='text-base font-poppins font-medium text-black cursor-pointer'>Home</a></li>
            <li className='bg-white hover:bg-yellow-100 w-full text-center py-2 cursor-pointer' onClick={() => navigate('/shop')}><a className='text-base font-poppins font-medium text-black cursor-pointer'>Shop</a></li>
            <li className='bg-white hover:bg-yellow-100 w-full text-center py-2 cursor-pointer' onClick={() => navigate('/about')}><a className='text-base font-poppins font-medium text-black cursor-pointer'>About</a></li>
            <li className='bg-white hover:bg-yellow-100 w-full text-center py-2 cursor-pointer' onClick={() => navigate('/contact')}><a className='text-base font-poppins font-medium text-black cursor-pointer'>Contact</a></li>
          </ul>

           <div>
            <ul className='flex justify-center items-center gap-4 py-2'>
              <li onClick={()=>navigate('/myaccount')} className='cursor-pointer'>
                <img src={user} alt='img1' className='w-5' />
              </li>
              <li  className='cursor-pointer'>
                <img src={search} alt='img2' className='w-5' />
              </li>
              <li  className='cursor-pointer'>
                <img src={heart} alt='img3' className='w-5' />
              </li>
              <li  onClick={()=>navigate('/cart')}  className='cursor-pointer'>
                <img src={cart} alt='img4' className='w-5' />
              </li>
            </ul>
          </div>

        </div>

        </>

        }

      </div>

    </>
  )
}

export default Navbar