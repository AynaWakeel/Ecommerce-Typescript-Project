import React from 'react'
import cover from '../../assets/images/Rectangle 1.png'
import logo from '../../assets/icons/Meubel House_Logos-05.svg'
import arrow from '../../assets/icons/dashicons_arrow-down-alt2.svg'
import del from '../../assets/icons/ant-design_delete-filled.svg'
import { useLocation, useNavigate, useParams } from 'react-router'
import { products } from '../../data/products'


type cartState = {
  productQuantity: number
  totalPrice: number
};

const Cart: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation() as {state:cartState}
    const totalPrice = location.state.totalPrice;
    const productQuantity = location.state.productQuantity || 1;

     const {id} = useParams<{id:string}>();
    
      const product = products.find(p => p.id === Number(id));
    
      if (!product) return <h1>Product Not Found</h1>;
    return (
        <div>

            {/* ----------- header ----------- */}
            <div className='relative mt-20'>
                <img src={cover} alt='cover' className='max-md:h-56 w-full' />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <img src={logo} alt='icon' className='max-lg:w-16' />
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium text-black'>Checkout</h1>
                    <div className='pt-0 lg:pt-3 flex justify-center items-center'>
                        <span className='text-sm lg:text-base font-poppins font-medium text-black px-2'>Home</span>
                        <img src={arrow} alt='arrow' />
                        <span className='text-sm lg:text-base font-poppins font-light text-black px-2' onClick={()=>navigate('/checkout')}>Checkout</span>
                    </div>
                </div>
            </div>

            {/* ----------------- cart sec ------------------ */}
            <div className=' px-6 md:px-14 xl:px-36 py-8 lg:py-24 flex flex-col xl:flex-row justify-between items-start gap-5'>
                <div className='w-full xl:w-2/3 overflow-x-auto overflow-y-hidden'>

                    <table className='min-w-[600px] w-full border-separate border-spacing-y-3 table-auto'>
                        <thead className='bg-[#FFF9E5] rounded-md h-16'>
                            <tr>
                                <th></th>
                                <th className='text-sm lg:text-base font-medium font-poppins text-start'>Product</th>
                                <th className='text-sm lg:text-base font-medium font-poppins  text-start'>Price</th>
                                <th className='text-sm lg:text-base font-medium font-poppins text-start '>Quality</th>
                                <th className='text-sm lg:text-base font-medium font-poppins text-center'>SubTotal</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody className='pt-4'>
                            <tr>
                                <td>
                                    <div className='rounded-md bg-[#FBEBB5] h-32 w-36'>
                                        <img src={product.image} alt='img' className='h-auto w-full' />
                                    </div>
                                </td>
                                <td>
                                <span className='text-sm lg:text-base font-poppins font-normal text-[#9F9F9F]'>{product.name}</span>
                                </td>
                                <td>
                                <span className='text-sm lg:text-base font-poppins font-normal text-[#9F9F9F]'>Rs. {product.price}</span>
                                </td>
                                <td>
                                    <div className='rounded-md w-8 h-8 border-[1px] border-[#9F9F9F] flex justify-center items-center'>
                                        <span className='text-sm lg:text-base font-poppins font-normal text-black'>{productQuantity}</span>
                                    </div>
                                </td>
                                <td>
                                    <p className='text-sm lg:text-base font-poppins font-normal text-black'>Rs. {totalPrice}</p>
                                </td>
                                <td>
                                    <img src={del} alt='del' />
                                </td>
                            </tr>
                            

                          
                        </tbody>

                    </table>
                </div>

                <div className='bg-[#FFF9E5] py-8 px-6 xl:px-10 w-full md:w-1/2  xl:w-1/3 text-center mt-3'>
                    <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold font-poppins pb-10'>Cart Totals</h2>
                    <div className='flex justify-between pb-4'>
                        <h4 className='text-sm lg:text-base font-poppins font-normal text-black text-justify'>Subtotal</h4>
                        <p className='text-sm lg:text-base font-poppins font-normal text-black text-justify'>Rs. {totalPrice}</p>
                    </div>
                    <div className='flex justify-between pb-6'>
                        <h4 className='text-sm lg:text-base font-poppins font-normal text-black text-justify'>Total</h4>
                        <p className='text-lg lg:text-xl font-poppins font-medium text-[#B88E2F] text-justify'>Rs. {totalPrice}</p>
                    </div>
                    <button className='text-base lg:text-xl font-poppins font-normal text-black rounded-xl border-[1px] border-black h-12 w-36' onClick={()=>navigate('/checkout',{state:{totalPrice,productQuantity}})}>Check Out</button>

                </div>
            </div>




            {/* ------------------ section ----------------- */}
            <div className='bg-[#FAF4F4] w-full py-16 px-8 lg:px-20 grid grid-row-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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

export default Cart