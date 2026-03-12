import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Courses', path: '/courses' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full h-20 z-[1000] flex items-center border-b border-white/10 glass">
            <div className="container-custom flex justify-between items-center w-full">

                <NavLink to="/" className="flex flex-col leading-none" onClick={closeMenu}>
                    <span className="text-2xl font-extrabold tracking-widest bg-accent-gradient bg-clip-text text-transparent">SDS</span>
                    <span className="text-[0.7rem] font-medium text-muted uppercase tracking-wider">Technologies</span>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-[0.95rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent-gradient after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-muted hover:text-white after:w-0 hover:after:w-full'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <button className="hidden md:block bg-accent-gradient text-white py-2 px-6 rounded-full font-semibold text-sm shadow-[0_4px_15px_rgba(157,80,187,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(157,80,187,0.5)] transition-all duration-300" onClick={() => navigate('/contact')}>
                    Get in Touch
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white text-3xl focus:outline-none z-[1100]"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX className="text-primary" /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 bg-bg-dark/95 backdrop-blur-2xl z-[1050] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col gap-8 text-center">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={closeMenu}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            className={({ isActive }) =>
                                `text-2xl font-bold uppercase tracking-widest transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isActive ? 'text-primary' : 'text-white/70'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <button
                        className={`mt-4 bg-accent-gradient text-white py-3 px-10 rounded-full font-bold text-lg shadow-[0_4px_15px_rgba(157,80,187,0.3)] transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                        onClick={() => {
                            navigate('/contact');
                            closeMenu();
                        }}
                    >
                        Get in Touch
                    </button>
                </div>

                {/* Decorative Elements for Mobile Menu */}
                <div className="absolute bottom-10 left-10 w-20 h-20 border-l border-b border-primary/20 animate-pulse"></div>
                <div className="absolute top-32 right-10 w-20 h-20 border-r border-t border-secondary/20 animate-pulse"></div>
            </div>
        </nav>
    );
};

export default Navbar;
