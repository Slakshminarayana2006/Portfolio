import React from 'react'
import '../App.css'
import '../css/Navbar.css'
function Navbar() {
  return (
    <>
        <div className="navbar fixed top-0 left-0 w-full z-50 h-20 bg-[#08090c]/90 backdrop-blur-md flex justify-between items-center py-10 px-10">
            <div className="name">
                <h1 className='text-[#e8eaf0] text-[1.2rem] font-bold tracking-tight'>Lakshminarayana</h1>
            </div>
            <div className="header">
                <ul className='text-[#6b7080] flex text-[0.73rem] gap-10 tracking-widest'>
                    <li className='hover:text-[#4f8ef7] transition duration-300 cursor-pointer'><a href="#about">ABOUT</a></li>
                    <li className='hover:text-[#4f8ef7] transition duration-300 cursor-pointer'> <a href="#projects">PROJECTS</a></li>
                    <li className='hover:text-[#4f8ef7] transition duration-300 cursor-pointer'><a href='#achievement'>ACHIEVEMENTS</a></li>
                    <li className='hover:text-[#4f8ef7] transition duration-300 cursor-pointer'><a href='#contact'>CONTACT</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar