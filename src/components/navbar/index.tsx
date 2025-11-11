import React from 'react'
import { useNavigate } from 'react-router'

const Navbar: React.FC = () => {
    const navigate = useNavigate()

  return (
    <div>
        <ul className='text-2xl'>
            <li><a onClick={()=>navigate('/')}>Home</a></li>
            <li><a onClick={()=>navigate('/shop')}>Shop</a></li>
            <li><a onClick={()=>navigate('/about')}>About</a></li>
            <li><a onClick={()=>navigate('/contact')}>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar