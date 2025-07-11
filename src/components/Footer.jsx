import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-r from-pink-600 to-pink-400 mt-12'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
            <div className='flex flex-row gap-4'>
                <p className='text-xl font-semibold text-white'>Connect with me: </p>
                <FaGithub size={30} className='text-white'/>
                <GrLinkedin size={30} className='text-white'/>
                <FaTwitter size={30} className='text-white'/>
                <IoLogoInstagram size={30} className='text-white'/>
            </div>
            <div className='flex flex-row px-4 py-4 items-center gap-2 text-xl font-semibold text-white'>
                <span>Made with </span> 
                <FaHeart className='text-red-500 animate-pulse'/> 
                <span> by Aakansha</span>
            </div>
        </div>
    </div>
  )
}

export default Footer