import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative z-50 bg-dark py-20 border-t border-white/10 grain">
            <div className="container-custom grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 mb-12">
                <div className="max-w-[400px]">
                    <div className="flex flex-col leading-none">
                        <Link to="/" className="flex flex-col leading-none group">
                            <span className="text-2xl font-extrabold tracking-widest bg-accent-gradient bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">SDS</span>
                            <span className="text-[0.7rem] font-medium text-muted uppercase tracking-wider group-hover:text-primary transition-colors">Technology</span>
                        </Link>
                    </div>
                    <p className="mt-6 text-muted">
                        Crafting customized software solutions that drive innovation and business growth.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="footer-col">
                        <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-tighter">Services</h4>
                        <ul className="list-none space-y-3">
                            <li><Link to="/services/web-development" className="text-muted text-sm hover:text-primary hover:translate-x-[5px] transition-all duration-300 block">Web Development</Link></li>
                            <li><Link to="/services/app-development" className="text-muted text-sm hover:text-primary hover:translate-x-[5px] transition-all duration-300 block">App Development</Link></li>
                            <li><Link to="/services/digital-marketing" className="text-muted text-sm hover:text-primary hover:translate-x-[5px] transition-all duration-300 block">Digital Marketing</Link></li>
                            <li><Link to="/services/seo" className="text-muted text-sm hover:text-primary hover:translate-x-[5px] transition-all duration-300 block">SEO</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-tighter">Company</h4>
                        <ul className="list-none space-y-3">
                            <li><Link to="/about" className="text-muted text-sm hover:text-primary hover:translate-x-[5px] transition-all duration-300 block">About Us</Link></li>
                            <li><Link to="/projects" className="text-muted text-sm hover:text-primary hover:translate-x-[5px] transition-all duration-300 block">Projects</Link></li>
                            <li><Link to="/courses" className="text-muted text-sm hover:text-primary hover:translate-x-[5px] transition-all duration-300 block">Courses</Link></li>
                            <li><Link to="/contact" className="text-muted text-sm hover:text-primary hover:translate-x-[5px] transition-all duration-300 block">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center pt-8 border-t border-white/10 text-muted text-[0.8rem]">
                <p>&copy; {new Date().getFullYear()} SDS Technology. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
