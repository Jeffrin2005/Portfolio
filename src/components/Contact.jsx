import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jeffrinjojo/', icon: <FaLinkedin className="text-4xl text-gray-400 hover:text-neon_bg transition duration-300" /> },
        { name: 'GitHub', url: 'https://github.com/Jeffrin2005', icon: <FaGithub className="text-4xl text-gray-400 hover:text-neon_bg transition duration-300" /> },
        { name: 'Instagram', url: 'https://www.instagram.com/jeffrinjojo/', icon: <FaInstagram className="text-4xl text-gray-400 hover:text-neon_bg transition duration-300" /> }
    ];

    return (
        <div className='w-full py-16 px-4 bg-black relative'>
            <div className='max-w-[800px] mx-auto text-center'>
                <h2 className='text-4xl font-bold text-white mb-4 drop-shadow-[0_0_12px_rgba(0,212,255,0.6)]'>Let's Connect</h2>
                <p className='text-gray-400 text-lg'>Feel free to reach out through any platform</p>
            </div>
            {/* Contact Form Container */}
            <div className="max-w-[90%] md:max-w-[600px] mb-12 mx-auto mt-10 bg-[#0A0A0A] p-8 rounded-xl border border-neon_bg shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                <form className="space-y-6">
                    <div className="space-y-4">
                        {['Your Name', 'Your Email'].map((placeholder, index) => (
                            <input key={index} type={index === 1 ? 'email' : 'text'} placeholder={placeholder}
                                className="w-full p-3 rounded-lg bg-[#111111] text-white border border-neon_bg/50 focus:border-neon_bg focus:ring-2 focus:ring-neon_bg/50 transition duration-300" />
                        ))}
                        <textarea placeholder="Your Message" rows="4"
                            className="w-full p-3 rounded-lg bg-[#111111] text-white border border-neon_bg/50 focus:border-neon_bg focus:ring-2 focus:ring-neon_bg/50 transition duration-300"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-neon_bg text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-neon_bg/80 transition duration-300 shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                        Send Message
                    </button>
                </form>
            </div>
            {/* Resume Button */}
            <div className="text-center mb-12">
                <div className="relative inline-block group">
                    <div className="absolute -inset-0.5 bg-neon_bg opacity-75 blur-sm rounded-xl group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -inset-1 bg-neon_bg opacity-50 blur-md rounded-xl group-hover:opacity-75 transition-opacity duration-300" />
                    <a href="https://drive.google.com/file/d/13OjBjPu6xMpDuxQRP2hRX6P21OdSL_vd/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center px-8 py-3 bg-black text-white border border-neon_bg rounded-xl space-x-2 hover:bg-neon_bg/10 transition-all duration-300" >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="font-medium">View Resume</span>
                    </a>
                </div>
            </div>
            {/* Social Links */}
            <div className="flex justify-center space-x-8 mt-10">
                {socialLinks.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;