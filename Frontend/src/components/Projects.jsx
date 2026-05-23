import React from 'react'
import '../css/Projects.css'
function Projects() {
  return (
    <>
        <div id='projects' className="main h-197 min-w-full bg-[#08090c] py-28 px-18 flex flex-col gap-9">
            <div className="header">
                <p className='aboutme text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>-- SELECTED WORK</p>
                <div className="pro flex justify-between items-center">
                    <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[4rem] font-bold'>My
                        <span className=' italic text-transparent tracking-tighter text-[4rem] font-bold [-webkit-text-stroke:1px_#6b7080] '>projects</span>
                    </h1>
                    <a href="https://github.com/Slakshminarayana2006?tab=repositories" target='_blank'><button className='border-[#6b7080] text-[#08090c] border text-[] h-10 w-40 bg-[#4f8ef7] text-[0.7rem] tracking-widest hover:bg-[#354b70] cursor-pointer'>ALL REPOS ↗</button></a>
                </div>
            </div>
                <div className="pojects flex">
                    <div className="w-[50%] relative">
                        <div className="cont p-10  flex flex-col gap-5 border border-[#E8EAF012] hover:bg-[#0E0F14] transition duration-300 before:absolute before:top-0 before:left-0 before:h-0.75 before:w-0 before:bg-[#4f8ef7] before:transition-all before:duration-500 hover:before:w-full">
                            <p className='text-[#6b7080] tracking-widest text-[0.64rem]'>01/02</p>
                            <div className="">
                                <p className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>2026</p>
                                <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[1.6rem] font-bold'>AI Chatbot Application</h1>
                            </div>
                            <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'><span className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>--</span> Managed global state efficiently using Redux Toolkit to handle chatbot interactions.</p>
                            <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'><span className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>--</span> Implemented async API calls using Thunk for real-time responses from a third-party API.</p>
                            <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'><span className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>--</span> Designed a responsive UI with Tailwind CSS for improved usability and performance.</p>
                            <div className="stack flex gap-3 items-center">
                                <button className='text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>REACT</button>
                                <button className=' text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>REDUX TOOLKIT</button>
                                <button className=' text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>THUNK</button>
                                <button className=' text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>TAILWIND CSS</button>
                                <button className=' text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>REST API</button>
                            </div>
                            <div className="flex gap-5">
                                <a href="https://github.com/Slakshminarayana2006/Chatbot" target='_blank' className='text-[#6b7080] tracking-widest text-[0.7rem] hover:text-[#4f8ef7] transition duration-300 cursor-pointer'>GITHUB ↗</a>
                                <a href="https://chatbot-seven-gold-46.vercel.app/" target='_blank' className='text-[#6b7080] tracking-widest text-[0.7rem] hover:text-[#4f8ef7] transition duration-300 cursor-pointer'>LIVE DEMO ↗</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] relative">
                        <div className="cont p-10  flex flex-col gap-5 border border-[#E8EAF012] hover:bg-[#0E0F14] transition duration-300 before:absolute before:top-0 before:left-0 before:h-0.75 before:w-0 before:bg-[#4f8ef7] before:transition-all before:duration-500 hover:before:w-full">
                            <p className='text-[#6b7080] tracking-widest text-[0.64rem]'>02/02</p>
                            <div className="">
                                <p className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>2025</p>
                                <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[1.6rem] font-bold'>Food Recipe Finder</h1>
                            </div>
                            <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'><span className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>--</span> Built a dynamic recipe search application using third-party API integration.</p>
                            <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'><span className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>--</span> Implemented search and filtering features to improve user experience.</p>
                            <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'><span className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>--</span> Designed a fully responsive interface using vanilla HTML, CSS, and JavaScript.</p>
                            <div className="stack flex gap-3 items-center">
                                <button className='text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>HTML</button>
                                <button className=' text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>CSS</button>
                                <button className=' text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>JAVASCRIPT</button>
                                <button className=' text-[0.7rem] p-1 tracking-widest deg transition duration-300  border border-[#4f8ef7] text-[#4f8ef7] bg-[#23334e]'>API</button>
                            </div>
                            <div className="flex gap-5">
                                <a href="https://github.com/Slakshminarayana2006/Food-Recipe" target='_blank' className='text-[#6b7080] tracking-widest text-[0.7rem] hover:text-[#4f8ef7] transition duration-300 cursor-pointer'>GITHUB ↗</a>
                                <a href="https://slakshminarayana2006.github.io/Food-Recipe/" target='_blank' className='text-[#6b7080] tracking-widest text-[0.7rem] hover:text-[#4f8ef7] transition duration-300 cursor-pointer'>LIVE DEMO ↗</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Projects;