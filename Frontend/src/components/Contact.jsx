import React,{useState} from 'react'
import axios from 'axios';
import '../css/Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:3000/post', formData)

            alert('Message Sent Successfully✔')

            setFormData({
                name: '',
                email: '',
                message: ''
            })

            console.log(res.data)

        } catch (err) {
            console.log(err)
            alert('Failed to send message')
        }
    }
  return (
    <>
        <div id='contact' className="main h-160 min-w-full bg-[#08090c] py-28 px-18  flex gap-15">
            <div className="left w-[50%] flex flex-col gap-5">
                <div className="">
                    <p className='text-[#4f8ef7] tracking-[4px] text-[0.7rem]'>-- GET IN TOUCH</p>
                    <h1 className='na text-[#e8eaf0] flex gap-4 items-center tracking-tighter text-[4rem] font-bold'>Let's <span className='italic text-transparent tracking-tighter text-[4rem] font-bold [-webkit-text-stroke:1px_#6b7080]'>connect</span></h1>
                </div>
                <p className='text-[#E8EAF0A6] text-[0.95rem] diff tracking-widest'>Open to internships, collaborative projects, and new opportunities. Feel free to reach out — I'd love to connect and build something meaningful together.</p>
                <div className="flex flex-col gap-8">
                    <div className="mail border-b border-b-[#E8EAF0A6] h-8 flex gap-3">
                        <span className='text-[#4f8ef7]  text-[0.75rem]'><i className="fa-regular fa-envelope"></i></span>
                        <a href="" className='text-[0.75rem] text-[#6b7080] tracking-widest hover:text-[#4f8ef7] transition duration-300'>slakshminarayana2006@gmail.com</a>
                    </div>
                    <div className="pno border-b border-b-[#E8EAF0A6] h-8 flex gap-3">
                        <span className='text-[#4f8ef7] text-[0.75rem]'>☏</span>
                        <a href="" className='text-[0.75rem] text-[#6b7080] tracking-widest hover:text-[#4f8ef7] transition duration-300'>+91 701394 3694</a>
                    </div>
                    <div className="linked border-b border-b-[#E8EAF0A6] h-8 flex gap-3">
                        <span className='text-[#4f8ef7] text-[0.75rem]'>↗</span>
                        <a href="https://www.linkedin.com/in/lakshminarayana-s-8aa002323/" target='_BLANK' className='text-[0.75rem] text-[#6b7080] tracking-widest hover:text-[#4f8ef7] transition duration-300'>linkedin.com/in/lakshminarayana-s-8aa002323</a>
                    </div>
                    <div className="git border-b border-b-[#E8EAF0A6] h-8 flex gap-3">
                        <span className='text-[#4f8ef7] text-[0.75rem]'>◈</span>
                        <a href="https://github.com/Slakshminarayana2006" target='_BLANK' className='text-[0.75rem] text-[#6b7080] tracking-widest hover:text-[#4f8ef7] transition duration-300'>github.com/Slakshminarayana2006</a>
                    </div>
                </div>
            </div>
            <div className="right w-[50%] flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className='text-[0.6rem] text-[#6b7080] tracking-widest'>YOUR NAME</label>
                    <input id='name'  onChange={handleChange} value={formData.name} name='name' type="text" placeholder='Enter Your Name' className='border border-[#E8EAF012] bg-[#0E0F14] placeholder:text-[0.9rem] placeholder:text-[#6b7080] px-2 w-[95%] h-13  text-[#6b7080] focus:outline-[#4f8ef7] focus:outline-[0.1rem] autofill:bg-[#0E0F14]'  />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className='text-[0.6rem] text-[#6b7080] tracking-widest'>YOUR EMAIL</label>
                    <input id='email' onChange={handleChange} value={formData.email} name='email' type="email" placeholder='Enter Your Email' className='border border-[#E8EAF012] bg-[#0E0F14] placeholder:text-[0.9rem] placeholder:text-[#6b7080] px-2 w-[95%] h-13  text-[#6b7080] focus:outline-[#4f8ef7] focus:outline-[0.1rem] autofill:bg-[#0E0F14]'  />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="det" className='text-[0.6rem] text-[#6b7080] tracking-widest'>MESSAGE</label>
                    <textarea id='det' onChange={handleChange} value={formData.message} name='message' placeholder='Tell me about the opportunity or project...' className='border border-[#E8EAF012] bg-[#0E0F14] placeholder:text-[0.9rem] placeholder:text-[#6b7080] px-2 w-[95%] h-28  text-[#6b7080] resize-none focus:outline-[#4f8ef7] focus:outline-[0.1rem] autofill:bg-[#0E0F14] p-2'></textarea>
                </div>
                <div className="send">
                    <button onClick={handleSubmit} className='border-[#6b7080]  text-[#08090c] border text-[] h-10 w-40 bg-[#4f8ef7] text-[0.7rem] tracking-widest hover:bg-[#354b70] cursor-pointer'>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact