import React from 'react'
import '../css/About.css'

function About() {

    const skills = 'text-[#6b7080] tracking-widest text-[0.7rem]';
    const skillBtn = "text-[#E8EAF0A6] border border-[#E8EAF012] text-[0.7rem] px-3 py-2 tracking-widest deg transition duration-300  hover:border hover:border-[#4f8ef7] hover:text-[#4f8ef7] hover:bg-[#23334e]";
  return (
    <>
        <div id='about' className="main h-239 min-w-full bg-[#0E0F14] py-28 px-12">
            <div className="code flex gap-15">
                <div className="left w-[50%] flex flex-col gap-8 ">
                    <div className="aboutme text-[#4f8ef7] tracking-[4px] text-[0.7rem]">
                        <p>---ABOUT ME</p>
                    </div>
                    <div className="cwp">
                        <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[4rem] font-bold'>Code with
                            <span className=' italic text-transparent tracking-tighter text-[4rem] font-bold [-webkit-text-stroke:1px_#6b7080] '>purpose</span>
                        </h1>
                    </div>
                    <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'>Hi, I'm Lakshminarayana — a first-year B.Tech CSE student at University College of Engineering, Kakinada (JNTUK), with a passion for building full-stack web applications that solve real problems.</p>
                    <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'>I enjoy bridging the gap between clean UI and robust backend logic — from designing responsive interfaces with React and Tailwind CSS to managing APIs and state efficiently.</p>
                    <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'>Outside of coding, I've taken on leadership roles, solved 200+ algorithmic challenges on LeetCode, and earned industry certifications — always pushing to grow beyond the classroom.</p>
                    <div className="eductaion flex flex-col gap-1">
                        <p className={skills}>EDUCATION</p>
                        <div className="btech border-l-2 border-l-[#4F8EF7] p-5 bg-[#14151C] mt-8">
                            <h1 className='text-[#e8eaf0] text-[0.9rem] diff '>B.Tech in Computer Science & Engineering</h1>
                            <p className={skills}>University College of Engineering, Kakinada (JNTUK)</p>
                            <div className="g flex justify-between">
                                <p className='text-[#4F8EF7] text-[0.7rem] tracking-widest'>CGPA: 8.7</p>
                                <p  className='text-[#6b7080] tracking-widest text-[0.64rem]'>Aug 2024 – Present</p>
                            </div>
                        </div>
                        <div className="inter border-l-2 border-l-[#4F8EF759] p-5 bg-[#14151C]">
                            <h1 className='text-[#e8eaf0] text-[0.9rem] diff '>Intermediate (Class XII)</h1>
                            <p className={skills}>Sri Chaitanya Junior College, Andhra Pradesh</p>
                            <div className="g flex justify-between">
                                <p className='text-[#4F8EF7] text-[0.7rem] tracking-widest'>CGPA: 9.45</p>
                                <p className='text-[#6b7080] tracking-widest text-[0.64rem]'>Aug 2022 – May 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right w-[50%] flex flex-col  gap-7">
                    <p className={skills} >TECHNICAL SKILLS</p>
                    <div className="lan flex flex-col gap-3">
                        <p className={skills}>LANGUAGES</p>
                        <div className="btn flex flex-row gap-3">
                            <button className = {skillBtn}>C</button>
                            <button className = {skillBtn}>Java</button>
                            <button className = {skillBtn}>Python</button>
                            <button className = {skillBtn}>SQL</button>
                        </div>
                    </div>
                    <div className="fra flex flex-col gap-3">
                        <p className={skills}>FRAMEWORKS</p>
                        <div className="btn flex flex-row gap-3">
                            <button className = {skillBtn}>React JS</button>
                            <button className = {skillBtn}>Node.js</button>
                            <button className = {skillBtn}>Express.js</button>
                            <button className = {skillBtn}>Redux Toolkit</button>
                            <button className = {skillBtn}>Tailwind CSS</button>
                        </div>
                    </div>
                    <div className="fra flex flex-col gap-3">
                        <p className={skills}>TOOLS & DATABASES</p>
                        <div className="btn flex flex-row gap-3">
                            <button className = {skillBtn}>Git</button>
                            <button className = {skillBtn}>VS Code</button>
                            <button className = {skillBtn}>MongoDB</button>
                        </div>
                    </div>
                    <div className="fra flex flex-col gap-3">
                        <p className={skills}>WEB TECHNOLOGIES</p>
                        <div className="btn flex flex-row gap-3">
                            <button className = {skillBtn}>HTML</button>
                            <button className = {skillBtn}>CSS</button>
                            <button className = {skillBtn}>JavaScript</button>
                            <button className = {skillBtn}>REST APIs</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About