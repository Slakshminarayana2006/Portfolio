import React from 'react'
import leetcode from '../assets/leetcode.png'
import zeigeist from '../assets/zeigeist.jpg'
import ion from '../assets/ion.png'
import '../css/Achievements.css'

function Achievements() {
  return (
    <>
        <div id='achievement' className="main h-147 bg-[#0E0F14] py-28 px-18 flex flex-col gap-5">
            <p className='aboutme text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>--BEYOND THE CODE</p>
            <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[4rem] font-bold'>Achievements & 
                <span className='italic text-transparent tracking-tighter text-[4rem] font-bold [-webkit-text-stroke:1px_#6b7080] '>activities</span>
            </h1>
            <div className="achievements flex ">
                <div className="p-8 w-100 border border-[#E8EAF012] flex flex-col gap-3 hover:bg-[#13141b] transition ">
                    <img src={leetcode} alt="" className='h-10 w-10 rounded-full' />
                    <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[1.1rem] font-bold'>200+ LeetCode Problems</h1>
                    <p className='text-[#6b7080] text-[0.83rem] diff tracking-widest'>Consistently sharpening data structures and algorithms skills, tackling problems ranging from arrays and recursion to dynamic programming.</p>
                </div>
                <div className="p-8 w-100 border border-[#E8EAF012] flex flex-col gap-3 hover:bg-[#13141b] transition ">
                    <img src={zeigeist} alt="" className='h-10 w-10 rounded-full' />
                    <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[1.1rem] font-bold'>Event Coordinator — Zeigeist 2K25</h1>
                    <p className='text-[#6b7080] text-[0.83rem] diff tracking-widest'>Served as coordinator for Zeigeist 2K25, leading event planning, managing logistics, and coordinating a team to ensure smooth execution.</p>
                </div>
                <div className="p-8 w-100 border border-[#E8EAF012] flex flex-col gap-3 hover:bg-[#13141b]  ">
                    <img src={ion} alt="" className='h-10 w-10 rounded-full' />
                    <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[1.1rem] font-bold'>TCS iON Certification</h1>
                    <p className='text-[#6b7080] text-[0.83rem] diff tracking-widest'>Completed the TCS iON Career Edge – Young Professional certification, focusing on professional communication and workplace readiness skills.</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Achievements