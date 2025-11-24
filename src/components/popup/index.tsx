import React from 'react'
import bag from '../../assets/icons/shopping_bag.svg'
import close from '../../assets/icons/cancel.svg'
import { useNavigate } from 'react-router';
import { removeItem } from '../../data/cart';

type Props = {
  items: any[]
  closePopup: () => void;
};

const Popup: React.FC<Props> = ({ items, closePopup }) => {
  const navigate = useNavigate()
  const grandTotal = items.reduce((sum,item)=> sum + item.subtotal, 0)
  
  return (
    <div>
      <div className='fixed inset-0 bg-black/40 z-40' onClick={closePopup}>
      </div>

      <div className='w-[400px] h-auto py-5 pl-4 bg-white fixed top-0 right-0 border shadow-xl z-50 '>
        <div className='border border-b-[1px] border-x-0 border-t-0 border-gray-300 pb-4 pr-4'>
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-poppins font-medium text-black'>Shopping Cart</h3>
            <img src={bag} alt='img' />
          </div>
        </div>
        <div className='h-96 py-4 overflow-y-scroll'>
          {/*  ------------ per item in cart ---------- */}
          {items.map((items,index) => (
            <div className='flex justify-between items-center pt-2 '>

              <div className='flex justify-start items-start gap-3 w-5/6'>
                <div className='rounded-md bg-[#FBEBB5] h-28 w-1/3 flex justify-center items-center'>
                  <img src={items.image} alt='img' className='h-auto w-auto' />
                </div>
                <div className='flex flex-col w-2/3'>
                  <div>
                    <span className='text-sm lg:text-base font-poppins font-normal text-[#9F9F9F] w-44 line-clamp-1'>{items.name}</span>
                  </div>

                  <div className='flex justify-start gap-2'>
                    <span className='text-sm lg:text-base font-poppins font-normal text-black'>{items.quantity} X</span>
                    <span className='text-sm lg:text-base font-poppins font-normal text-[#B88E2F]'>Rs. {items.price}</span>
                  </div>

                  <div className='flex justify-start gap-8'>
                    <div className='flex justify-start gap-2'>
                      <span className='text-sm lg:text-base font-poppins font-normal text-black'>Color:</span>
                      <div style={{ backgroundColor: items.color }} className={` border border-gray-400 rounded-full w-6 h-6 flex justify-center items-center `}>
                      </div>
                      <div className='flex justify-start gap-2'>
                        <span className='text-sm lg:text-base font-poppins font-normal text-black'>Size:</span>
                        <span className='text-sm lg:text-base font-poppins font-normal text-black'>{items.size}</span>
                      </div>
                    </div>

                  </div>

                  <div className='flex justify-start gap-2'>
                    <span className='text-sm lg:text-base font-poppins font-normal text-black'>subtotal:</span>
                    <span className='text-sm lg:text-base font-poppins font-normal text-[#B88E2F]'>Rs. {items.subtotal}</span>
                  </div>
                </div>

              </div>
              <div className='1/6' onClick={()=>{removeItem(index); window.location.reload();}}>
                <img src={close} alt='img'/>
              </div>

            </div>
          ))}

        </div>

        <div className='flex justify-between py-3 pr-4'>
          <h4 className='text-sm lg:text-base font-poppins font-normal text-black text-justify'>Total</h4>
          <p className='text-base md:text-lg lg:text-xl font-poppins font-bold text-[#B88E2F]'>Rs. {grandTotal}</p>
        </div>
        <div className='flex justify-start items-center gap-14 border border-t-[1px] border-x-0 border-b-0 border-gray-300 pt-4'>
          <button className='text-sm font-poppins font-normal text-black rounded-3xl border-[1px] border-black py-2 px-4' onClick={() => navigate('/cart')}>View Cart</button>
          <button className='text-sm font-poppins font-normal text-black rounded-3xl border-[1px] border-black py-2 px-4' onClick={() => navigate('/checkout')}>Checkout</button>
        </div>

      </div>
    </div>
  )
}

export default Popup