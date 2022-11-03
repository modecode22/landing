import React from 'react'
import img from "../assets/Group.png"
function Header() {
  return (
    <div className='bg-slate-100 h-16 items-center shadow-black shadow-sm p-5 flex justify-between'>
      <div className='flex '>
        
      </div>
              <div className='relative peer z-10 cursor-pointer  shadow-sm shadow-black border-2 hover:shadow-none border-white bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center group'>                 
                <div className='absolute opacity-0 group-hover:opacity-100  duration-300  group-hover:translate-x-28 group-hover:scale-100 scale-[0.1] font-black text-3xl text-sky-500 w-full flex items-center'>المعالي </div>
                <img src={img} className="w-12 group-hover:rotate-6 z-10 duration-300" alt="" />
</div>    
    </div>
  )
}

export default Header
