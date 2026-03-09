import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 w-full h-20 z-[1000] flex items-center border-b border-white/10 glass">
            <div className="container-custom flex justify-between items-center w-full">

                <NavLink to="/" className="flex flex-col leading-none">

                    <span className="text-2xl font-extrabold tracking-widest bg-accent-gradient bg-clip-text text-transparent">SDS</span>

                    <span className="text-[0.7rem] font-medium text-muted uppercase tracking-wider">Technologies</span>
                </NavLink>

                <div className="hidden md:flex gap-8">
                    <NavLink to="/" className={({ isActive }) => 
                        `text-[0.95rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent-gradient after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-muted hover:text-white after:w-0 hover:after:w-full'}`}>
                    Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `text-[0.95rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent-gradient after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-muted hover:text-white after:w-0 hover:after:w-full'}`}>
                    About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `text-[0.95rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent-gradient after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-muted hover:text-white after:w-0 hover:after:w-full'}`}>
                    Services</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => `text-[0.95rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent-gradient after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-muted hover:text-white after:w-0 hover:after:w-full'}`}>
                    Projects</NavLink>
                    <NavLink to="/courses" className={({ isActive }) => `text-[0.95rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent-gradient after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-muted hover:text-white after:w-0 hover:after:w-full'}`}>
                    Courses</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `text-[0.95rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent-gradient after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-muted hover:text-white after:w-0 hover:after:w-full'}`}>
                    Contact</NavLink>
              
               
               
                </div>
 
                <button className="hidden md:block bg-accent-gradient text-white py-2 px-6 rounded-full font-semibold text-sm shadow-[0_4px_15px_rgba(157,80,187,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(157,80,187,0.5)] transition-all duration-300" onClick={() => navigate('/contact')}>
                    Get in Touch</button>
            </div>

        </nav>
    );
};


export default Navbar;
