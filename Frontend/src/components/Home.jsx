import React from 'react'
import Navbar from './Navbar'
import pic from '../assets/pic.png'
import '../css/Home.css'

function Home() {
  return (
    <>
        <div className="about min-h-screen bg-[#08090c] pt-15">
            <Navbar />
            <div className="sec1 flex">
                <div className="left flex flex-col px-10 py-20 w-[50%]">
                    <p className='deg text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>---  B.TECH CSE · JNTUK · CGPA 8.7</p>
                    <div className="divv flex flex-col gap-13">
                        <h1 className=' na text-[#e8eaf0]  tracking-tighter text-[6rem] font-bold relative '>Lakshminarayana <br />
                            <span className=' na  italic text-transparent tracking-tighter text-[6rem] font-bold [-webkit-text-stroke:1px_#6b7080] absolute top-20'>Sakabattula</span>
                        </h1>
                        <p className='text-[#4f8ef7] tracking-widest text-[0.8rem]'>FULL-STACK DEVLOPER & PROBLEM SOLVER</p>
                        <p className='diff text-[#6b7080] w-80'>Computer Science student at JNTUK building real-world web applications with React, Node.js, and modern JavaScript — one problem at a time.</p>
                        <div className="buttons flex gap-10">
                            <a href='#projects'><button className='border-[#6b7080] text-[#08090c] border text-[] h-10 w-40 bg-[#4f8ef7] text-[0.7rem] tracking-widest hover:bg-[#354b70] cursor-pointer'>VIEW PROJECTS →</button></a>
                            <a href='https://github.com/Slakshminarayana2006' target='_blank'><button className='border-[#6b7080] text-[#6b7080] border text-[] h-10 w-20 text-[0.7rem] tracking-widest  cursor-pointer hover:border hover:border-[#4f8ef7] hover:text-[#4f8ef7] '>GITHUB ↗</button></a>
                            <a href='#contact'><button className='border-[#6b7080] text-[#6b7080] border text-[] h-10 w-20 text-[0.7rem] tracking-widest cursor-pointer hover:border hover:border-[#4f8ef7] hover:text-[#4f8ef7] '>CONTACT</button></a>
                        </div>
                    </div>
                </div>
                <div className="right flex flex-col  items-center w-[50%] justify-around">
                    <div className="img  ">
                        <img src={pic} alt=""  className=" h-72 w-72 profile rounded-full object-cover shadow-[0_0_30px_rgba(79,142,247,0.7)]  transition-all duration-300"
  style={{
    animation: "float 2.5s ease-in-out infinite",
  }}/>
                    </div>
                    <div className="div flex gap-5">
                        <button className='border border-[#6b7080] text-[#6b7080] text-[0.6rem] p-1 tracking-widest '>REACT</button>
                        <button className='border border-[#6b7080] text-[#6b7080] text-[0.6rem] p-1 tracking-widest '>NODE.JS</button>
                        <button className='border border-[#6b7080] text-[#6b7080] text-[0.6rem] p-1 tracking-widest '>MONGDODB</button>
                        <button className='border border-[#6b7080] text-[#6b7080] text-[0.6rem] p-1 tracking-widest '>REST APIS</button>
                        <button className='border border-[#6b7080] text-[#6b7080] text-[0.6rem] p-1 tracking-widest '>JAVA</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;