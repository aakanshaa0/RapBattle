import { Link } from 'react-router-dom';
import { GiOysterPearl } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='w-full px-4 py-2 flex items-center justify-between'>
        <div className='text-4xl text-pink-600 flex flex-row gap-2 text-center items-center'><GiOysterPearl size={50} /><span className='font-serif italic font-semibold'>Pearl</span></div>
        <div className='flex flex-row gap-8 align-center text-xl font-medium items-center text-gray-600'>
            <Link to='/'>Home</Link>
            <p>Contact</p>
            <p>Services</p>
            <p>Testionials</p>
            <p>FAQ</p>
        </div>
        <p className='text-amber-100 px-6 py-2 bg-pink-500 border-2 text-xl border-gray-100 border-solid rounded-lg font-semibold'>Login</p>
    </div>
  )
}

export default Navbar;