import React from 'react'
import { MdSupervisorAccount } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

           <div className='min-h-[80px] grid lg:grid-cols-12 gap-4 px-5 lg:px-8'>
                  <div className='col-span-2 flex items-center justify-center'>
                        <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/logo.png" alt="logo" className='object-cover' />
                  </div>

                  <div className='col-span-7 flex items-center justify-center'>
                      <ul className='font-bold text-[14px] flex gap-15'>
                           <Link to="/"><li>HOME</li></Link>
                           <Link to="/about"><li>ABOUT</li></Link>
                           <Link><li>SHOP</li></Link>
                           <Link><li>CONTACT</li></Link>
                      </ul>
                  </div>

                  <div className='col-span-3 flex items-center justify-center gap-5 text-[23px]'> 
                      <MdSupervisorAccount />
                      <IoCartOutline />
                      <FaRegHeart />

                  </div>
           </div>

    </div>
  )
}

export default Header