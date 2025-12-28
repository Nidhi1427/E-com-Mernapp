import React from 'react';
import Logo from './Logo';
import { IoMdSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";

export const header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
       <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}>
          <Logo w={100} h={50}/>
          </Link>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here..' className='w-full outline-none '/>
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <IoMdSearc/>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-3xl cursor-pointer'>
            <aCircleUser/>
          </div>

          <div className='text-2xl relative'>
            <span><IoCartSharp/></span>
            <div className='bg-black text-white h-5 rounded-full w-5 p-1 flex items-center justify-center absolute -top- right-0'>
              <p className='text-sm'>0</p>
            </div>
          </div>

<div>
<Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-black hover:bg-red-700'>Login</Link>
</div>

        </div>
       </div>
    </header>
   
  )
}
