import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/projects' },
        { name: 'Courses', path: '/courses' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const serviceCategories = [
        {
            title: 'Web Development',
            items: [
                { name: 'Corporate Website', path: '/services/web-development' },
                { name: 'E-commerce Solutions', path: '/services/ecommerce-management' },
                { name: 'CMS Development', path: '/services/custom-software' },
                { name: 'Landing Page Design', path: '/services/web-development' },
                { name: 'Website Maintenance', path: '/services/web-development' },
                { name: 'PWA Development', path: '/services/web-development' },
                { name: 'SPA Solutions', path: '/services/web-development' },
                { name: 'Custom Web Portals', path: '/services/custom-software' },
                { name: 'API Integration', path: '/services/custom-software' },
            ]
        },
        {
            title: 'Mobile App Dev',
            items: [
                { name: 'iOS App Development', path: '/services/app-development' },
                { name: 'Android App Development', path: '/services/app-development' },
                { name: 'React Native Apps', path: '/services/app-development' },
                { name: 'Flutter Development', path: '/services/app-development' },
                { name: 'Enterprise Apps', path: '/services/app-development' },
                { name: 'Mobile UI/UX', path: '/services/app-development' },
                { name: 'Hybrid App Solutions', path: '/services/app-development' },
                { name: 'App Store Optimization', path: '/services/app-development' },
                { name: 'Mobile Backend', path: '/services/app-development' },
            ]
        },
        {
            title: 'Digital Marketing',
            items: [
                { name: 'Search Engine Optimization', path: '/services/seo' },
                { name: 'Pay-Per-Click (PPC)', path: '/services/digital-marketing' },
                { name: 'Social Media Marketing', path: '/services/digital-marketing' },
                { name: 'Email Marketing Strategy', path: '/services/digital-marketing' },
                { name: 'Content Marketing', path: '/services/digital-marketing' },
                { name: 'Digital Brand Strategy', path: '/services/digital-marketing' },
                { name: 'Affiliate Marketing', path: '/services/digital-marketing' },
                { name: 'Lead Generation', path: '/services/digital-marketing' },
                { name: 'Influencer Marketing', path: '/services/digital-marketing' },
            ]
        },
        {
            title: 'Software & Cloud',
            items: [
                { name: 'Custom SaaS Development', path: '/services/custom-software' },
                { name: 'Cloud Migration', path: '/services/custom-software' },
                { name: 'DevOps Consulting', path: '/services/custom-software' },
                { name: 'Cybersecurity Services', path: '/services/custom-software' },
                { name: 'Enterprise Software', path: '/services/custom-software' },
                { name: 'Blockchain Solutions', path: '/services/custom-software' },
                { name: 'IoT Platform Dev', path: '/services/custom-software' },
                { name: 'API & Microservices', path: '/services/custom-software' },
                { name: 'Legacy System Upgrade', path: '/services/custom-software' },
            ]
        },
        {
            title: 'Creative Services',
            items: [
                { name: 'Logo & Graphic Design', path: '/services/graphic-design' },
                { name: 'UI/UX Prototyping', path: '/services/graphic-design' },
                { name: 'Video Production', path: '/services/graphic-design' },
                { name: '3D Modeling & Animation', path: '/services/graphic-design' },
                { name: 'Motion Graphics', path: '/services/graphic-design' },
                { name: 'Brand Identity Design', path: '/services/graphic-design' },
                { name: 'Packaging Design', path: '/services/graphic-design' },
                { name: 'Print Media Design', path: '/services/graphic-design' },
                { name: 'Digital Illustrations', path: '/services/graphic-design' },
            ]
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsServicesOpen(false);
        setActiveCategory(null);
    };
    
    const closeMenu = () => {
        setIsOpen(false);
        setIsServicesOpen(false);
        setActiveCategory(null);
    };

    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Close dropdowns on route change
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full h-20 z-[1000] flex items-center border-b border-white/10 transition-all duration-300 ${isOpen ? 'bg-[#0a0a0f]' : 'bg-[#0a0a0f]/90 backdrop-blur-lg'} shadow-lg`}>

            <div className="w-[90%] mx-auto flex justify-between items-center">


                <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>

                    <img
                        src="/logo.png"
                        alt="SDS Technologies"
                        className="w-14 h-14 object-contain"
                    />

                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-bold text-white">SDS</span>
                        <span className="text-[0.65rem] text-muted uppercase tracking-wider">
                            Technologies
                        </span>
                    </div>

                </NavLink>

                <div className="hidden md:flex gap-16 items-center">
                    {navLinks.map((link) => (
                        link.name === 'Services' ? (
                            <div key={link.name} className="static group py-2">
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-[0.95rem] font-medium relative transition-colors duration-300 flex items-center gap-1 ${isActive ? 'text-white' : 'text-muted group-hover:text-white'}`
                                    }
                                >
                                    {link.name}
                                    <HiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                                    <span className={`absolute -bottom-[5px] left-0 h-[2px] bg-accent-gradient transition-all duration-300 ${location.pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </NavLink>
                                
                                {/* Mega Menu */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1200px] bg-[#0a0a0f] backdrop-blur-3xl border border-white/10 rounded-2xl p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[1100]">
                                    <div className="grid grid-cols-5 gap-8">
                                        {serviceCategories.map((category) => (
                                            <div key={category.title} className="flex flex-col gap-4">
                                                <h3 className="text-primary font-bold text-sm uppercase tracking-[0.2em] border-b border-white/5 pb-2">
                                                    {category.title}
                                                </h3>
                                                <div className="flex flex-col gap-2">
                                                    {category.items.map((item) => (
                                                        <NavLink
                                                            key={item.name}
                                                            to={item.path}
                                                            className="text-[0.85rem] text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300"
                                                        >
                                                            {item.name}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs text-white/40 italic">
                                        <span>Empowering your business with SDS Technologies.</span>
                                        <NavLink to="/services" className="text-primary hover:underline not-italic font-semibold uppercase tracking-wider">
                                            View All Services →
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-[0.95rem] font-medium relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent-gradient after:transition-all after:duration-300 ${isActive ? 'text-white after:w-full' : 'text-muted hover:text-white after:w-0 hover:after:w-full'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                </div>

                <button className="hidden md:block bg-accent-gradient text-white py-2 px-6 rounded-full font-semibold text-sm shadow-[0_4px_15px_rgba(157,80,187,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(157,80,187,0.5)] transition-all duration-300" onClick={() => navigate('/contact')}>
                    Get in Touch
                </button>


                <button
                    className="md:hidden text-white text-3xl focus:outline-none z-[1100]"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX className="text-primary" /> : <HiMenuAlt3 />}
                </button>
            </div>


            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-[#0a0a0f] z-[1050] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
                style={{ backdropFilter: 'none' }}
            >
                <div className="flex flex-col gap-4 text-center w-full max-h-[85vh] overflow-y-auto px-6 py-10">
                    {navLinks.map((link, index) => (
                        link.name === 'Services' ? (
                            <div key={link.name} className="flex flex-col items-center w-full">
                                <div 
                                    className={`flex items-center gap-4 text-xl font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${location.pathname.startsWith('/services') ? 'text-primary' : 'text-white'}`}
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <span>{link.name}</span>
                                    <HiChevronDown className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </div>
                                
                                <div className={`flex flex-col gap-4 w-full mt-4 overflow-hidden transition-all duration-500 ${isServicesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {serviceCategories.map((category) => (
                                        <div key={category.title} className="flex flex-col w-full">
                                            <div 
                                                className="flex items-center justify-between py-2 border-b border-white/5 px-4 cursor-pointer"
                                                onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                                            >
                                                <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">{category.title}</span>
                                                <HiChevronDown className={`text-white transition-transform duration-300 ${activeCategory === category.title ? 'rotate-180' : ''}`} />
                                            </div>
                                            <div className={`flex flex-col gap-3 py-2 px-6 overflow-hidden transition-all duration-500 ${activeCategory === category.title ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                {category.items.map((item) => (
                                                    <NavLink
                                                        key={item.name}
                                                        to={item.path}
                                                        onClick={closeMenu}
                                                        className="text-[0.75rem] font-medium text-white/50 hover:text-primary uppercase tracking-wider text-left"
                                                    >
                                                        {item.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <NavLink
                                        to="/services"
                                        onClick={closeMenu}
                                        className="mt-4 text-sm font-bold text-primary uppercase tracking-[0.2em]"
                                    >
                                        View All Services
                                    </NavLink>
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={closeMenu}
                                style={{ transitionDelay: `${index * 50}ms` }}
                                className={({ isActive }) =>
                                    `text-xl font-bold uppercase tracking-widest transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isActive ? 'text-primary' : 'text-white/70'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                    <button
                        className={`mt-6 bg-accent-gradient text-white py-3 px-10 rounded-full font-bold text-lg shadow-[0_4px_15px_rgba(157,80,187,0.3)] transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                        onClick={() => {
                            navigate('/contact');
                            closeMenu();
                        }}
                    >
                        Get in Touch
                    </button>
                </div>


                <div className="absolute bottom-10 left-10 w-20 h-20 border-l border-b border-primary/20 animate-pulse"></div>
                <div className="absolute top-32 right-10 w-20 h-20 border-r border-t border-secondary/20 animate-pulse"></div>
            </div>
        </nav>
    );
};

export default Navbar;
