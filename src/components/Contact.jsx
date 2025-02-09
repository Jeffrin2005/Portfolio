import React, { useState } from 'react'; 
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; 

const Contact = () => { 
    const [hoverStates, setHoverStates] = useState({ form: false, button: false }); 
    const socialLinks = [ 
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jeffrinjojo/', icon: <FaLinkedin className="text-5xl" />, color: 'text-[#FF3072]' }, 
        { name: 'GitHub', url: 'https://github.com/Jeffrin2005', icon: <FaGithub className="text-5xl" />, color: 'text-[#FF3072]' }, 
        { name: 'Instagram', url: 'https://www.instagram.com/jeffrinjojo/', icon: <FaInstagram className="text-5xl" />, color: 'text-[#FF3072]' } 
    ]; 

    return ( 
        <div className='w-full py-16 px-4 bg-[#0A0A0A] relative overflow-hidden'> 
            {/* Animated background lines */}
            <div className="absolute inset-0"> 
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF3072] to-transparent top-0 animate-scan" /> 
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF3072] to-transparent bottom-0 animate-scan" /> 
                <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#FF3072] to-transparent left-0 animate-scan-vertical" /> 
                <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#FF3072] to-transparent right-0 animate-scan-vertical" /> 
            </div> 
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3072] opacity-[0.15] blur-[120px] rounded-full animate-pulse" /> 
            <div className='max-w-[1240px] mx-auto relative'> 
                <div className='text-center mb-12'> 
                    <h2 className='text-4xl font-bold text-[#FF3072] mb-2 drop-shadow-[0_0_12px_rgba(255,48,114,0.6)] animate-glow'> 
                        Let's Connect 
                    </h2> 
                    <p className='text-gray-400 text-lg relative inline-block after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#FF3072] after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left'> 
                        Feel free to reach out through any platform 
                    </p> 
                </div> 
                {/* Contact Form Container */}
                <div className="relative group mb-12" onMouseEnter={() => setHoverStates(prev => ({...prev, form: true}))} onMouseLeave={() => setHoverStates(prev => ({...prev, form: false}))}> 
                    {/* Multi-layered neon border effect */}
                    <div className="absolute -inset-0.5 bg-[#FF3072] opacity-75 blur-sm rounded-xl group-hover:opacity-100 transition-opacity duration-300" /> 
                    <div className="absolute -inset-1 bg-[#FF3072] opacity-50 blur-md rounded-xl group-hover:opacity-75 transition-opacity duration-300" /> 
                    <div className="absolute -inset-1.5 bg-[#FF3072] opacity-25 blur-lg rounded-xl group-hover:opacity-50 transition-opacity duration-300" /> 
                    {/* Form */}
                    <div className="relative bg-[#1A1A1A] p-8 rounded-xl border border-[#FF3072]"> 
                        <form className="space-y-6"> 
                            <div className="space-y-4"> 
                                {['Your Name', 'Your Email'].map((placeholder, index) => ( 
                                    <input key={index} type={index === 1 ? 'email' : 'text'} placeholder={placeholder} className="w-full p-3 rounded-lg bg-[#252525] text-white border border-[#FF3072]/30 relative focus:border-[#FF3072] focus:ring-2 focus:ring-[#FF3072]/50 shadow-[0_0_10px_rgba(255,48,114,0.2)] focus:shadow-[0_0_20px_rgba(255,48,114,0.4)] transition-all duration-300" /> 
                                ))} 
                                <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-[#252525] text-white border border-[#FF3072]/30 focus:border-[#FF3072] focus:ring-2 focus:ring-[#FF3072]/50 shadow-[0_0_10px_rgba(255,48,114,0.2)] focus:shadow-[0_0_20px_rgba(255,48,114,0.4)] transition-all duration-300" ></textarea> 
                            </div> 
                            {/* Simplified button without transitions and neon effects */}
                            <button type="submit" className="w-full bg-[#FF3072] text-white py-3 px-6 rounded-lg font-medium" > 
                                Send Message 
                            </button> 
                        </form> 
                    </div> 
                </div> 
                {/* Resume Section */}
                <div className="text-center mb-12"> 
                    <div className="relative inline-block group"> 
                        <div className="absolute -inset-0.5 bg-[#FF3072] opacity-75 blur-sm rounded-xl group-hover:opacity-100 transition-opacity duration-300" /> 
                        <div className="absolute -inset-1 bg-[#FF3072] opacity-50 blur-md rounded-xl group-hover:opacity-75 transition-opacity duration-300" /> 
                        <a href="https://drive.google.com/file/d/1rYrS7qAsBoYOPx3Ppa-GzvMwnoaVVA5b/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center px-8 py-3 bg-[#1A1A1A] text-white border border-[#FF3072] rounded-xl space-x-2 hover:bg-[#FF3072]/10 transition-all duration-300" > 
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> 
                            </svg> 
                            <span className="font-medium">View Resume</span> 
                        </a> 
                    </div> 
                </div> 
                {/* Social Links with enhanced neon effect */}
                <div className="flex justify-center space-x-12"> 
                    {socialLinks.map((social, index) => ( 
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="group relative" > 
                            <div className="absolute -inset-2 bg-[#FF3072] opacity-25 blur-md rounded-full group-hover:opacity-75 transition-all duration-300" /> 
                            <div className={`${social.color} relative transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,48,114,0.8)]`}> 
                                {social.icon} 
                            </div> 
                        </a> 
                    ))} 
                </div> 
            </div> 
            <style jsx>{` 
                @keyframes scan { 
                    0%, 100% { transform: translateX(-100%); } 
                    50% { transform: translateX(100%); } 
                } 
                @keyframes scanVertical { 
                    0%, 100% { transform: translateY(-100%); } 
                    50% { transform: translateY(100%); } 
                } 
                @keyframes glow { 
                    0%, 100% { text-shadow: 0 0 12px rgba(255,48,114,0.6); } 
                    50% { text-shadow: 0 0 20px rgba(255,48,114,0.8); } 
                } 
                .animate-scan { animation: scan 3s linear infinite; } 
                .animate-scan-vertical { animation: scanVertical 3s linear infinite; } 
                .animate-glow { animation: glow 2s ease-in-out infinite; } 
            `}</style> 
        </div> 
    ); 
}; 

export default Contact;