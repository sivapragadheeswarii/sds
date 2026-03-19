import React, { useState, useEffect } from 'react';
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";
import axios from 'axios';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('ALL');

    const categories = ['ALL', 'WEB_APP', 'SYSTEM_CORE', 'E-COMMERCE'];

    const projects = [
        {
            id: 1,
            title: 'Guruvappa School',
            category: 'WEB_APP',
            version: '1.0.2',
            build: 'STABLE',
            arch: 'CLIENT_SERVER',
            description: "A modern school website and management platform designed to streamline communication between administrators, teachers, students, and parents while showcasing academic programs and school activities.",
            image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&h=400&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://guruvappaschool.com/",
            features: ["Student Management", "Attendance Tracking", "Gradebook System"]
        },
        {
            id: 10,
            title: 'Crescent School',
            category: 'WEB_APP',
            version: '1.2.0',
            build: 'STABLE',
            arch: 'EDU_PORTAL',
            description: "Comprehensive educational ecosystem for Crescent School, managing academic data and public relations.",
            image: 'https://turntable.kagiso.io/images/iStock-1366797961.width-800.jpg',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://crescentschoolnkp.com/",
            features: ["Academic Management", "Student Portal", "Communication Hub"]
        },
        {
            id: 6,
            title: 'Holy Cross School',
            category: 'WEB_APP',
            version: '1.1.2',
            build: 'STABLE',
            arch: 'CMS',
            description: "A comprehensive school website that highlights the institution’s academic programs, facilities, announcements, and important resources for students and parents.",
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&h=400&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://holycrossschoolpalani.org/",
            features: ["Announcement Board", "Resource Library", "Parent Connect"]
        },
       {
            id: 8,
            title: 'Theivaa Academy',
            category: 'WEB_APP',
            version: '1.0.1',
            build: 'STABLE',
            arch: 'LMS',
            description: "An educational platform designed to introduce training programs and skill development courses while helping students access learning opportunities and career guidance.",
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&h=400&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://theivaa.vercel.app/",
            features: ["LMS Integration", "Skill Assessment", "Career Guidance"]
        }, 
        {
            id: 2,
            title: 'Annai Educational Trust',
            category: 'WEB_APP',
            version: '0.9.5',
            build: 'PRODUCTION',
            arch: 'REACTIVE_UI',
            description: "An institutional website developed for an educational trust to present its mission, academic initiatives, and programs while providing easy access to information for students, parents, and the community.",
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&h=400&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://annai-edu-sample.vercel.app/",
            features: ["Event Management", "Trust Information", "Community Portal"]
        },
        {
            id: 4,
            title: 'Vagarai Marathon',
            category: 'SYSTEM_CORE',
            version: '1.4.2',
            build: 'STABLE',
            arch: 'EVENT_FLOW',
            description: "A dedicated event website created for the Vagarai Marathon, providing participants with event information, registration access, schedules, and updates for a smooth race experience.",
            image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/FbOXaCWxwuI975XgxlDms/1d9bc48af213a35b62fa2dc8a1dbb362/Running_Marathon.jpg',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://vagaraimarathon.in/",
            features: ["Registration System", "Real-time Updates", "Runner Tracking"]
        },
        
        
        {
            id: 7,
            title: 'Green Apple Imports',
            category: 'SYSTEM_CORE',
            version: '2.0.4',
            build: 'ACTIVE',
            arch: 'GLOBAL_TRADE',
            description: "A corporate website developed for an international textile trading company to showcase its product range, global operations, and business capabilities.",
            image: 'https://www.monti.co.in/assets/images/linen-3.jpg',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://greenappleglobal.com/",
            features: ["International Logistics", "Inventory Preview", "Business B2B Portal"]
        },
        
        {
            id: 9,
            title: 'Savik Mahal',
            category: 'WEB_APP',
            version: '1.0.0',
            build: 'LIVE',
            arch: 'CLIENT_SITE',
            description: "A sophisticated platform for an event venue, showcasing facilities and booking options for premium events.",
            image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&h=400&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://satvikmahalpalani.in/",
            features: ["Venue Booking", "Event Gallery", "Facility Showcase"]
        },
        
        {
            id: 11,
            title: 'Ungal Nilam',
            category: 'SYSTEM_CORE',
            version: '1.0.5',
            build: 'PRODUCTION',
            arch: 'REAL_ESTATE',
            description: "Advanced land management and property showcase platform for real estate operations.",
            image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=600&h=400&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://www.ungalnilam.com/",
            features: ["Property Listings", "Mapping Tools", "Lead Management"]
        },
        {
            id: 5,
            title: 'RR - Hair and Skin Care',
            category: 'WEB_APP',
            version: '1.0.0',
            build: 'LIVE',
            arch: 'SPA',
            description: "A healthcare clinic website designed to present hair and skin treatment services, build patient trust, and allow visitors to easily explore treatments and contact the clinic.",
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&h=400&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://www.rrhairskinclinic.com/",
            features: ["Service Catalog", "Online Consultations", "Patient Trust Pillars"]
        },
        {
            id: 12,
            title: 'Profit HMS',
            category: 'SYSTEM_CORE',
            version: '3.1.0',
            build: 'ENTERPRISE',
            arch: 'SAAS',
            description: "Hospital Management System designed for large scale medical operations and patient management.",
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&h=400&auto=format&fit=crop',
            tech: ['React', 'Node.js', 'mongoDB'],
            link: "https://profithms.in/",
            features: ["Patient Management", "Electronic Records", "Hospital ERP"]
        }
    ];

    const [dynamicProjects, setDynamicProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/projects');
                const mapped = response.data.map((p, index) => ({
                    id: `db-${p._id}`,
                    title: p.title,
                    category: 'WEB_APP', // Default category
                    version: '1.0.0',
                    build: 'LIVE',
                    arch: 'DYNAMIC_UPLOAD',
                    description: p.description,
                    image: `http://localhost:5001${p.image}`,
                    tech: ['React', 'Node.js', 'mongoDB'],
                    link: p.link,
                    features: ["Dynamic Feature 1", "Dynamic Feature 2"]
                }));
                setDynamicProjects(mapped);
            } catch (error) {
                console.error('Error fetching dynamic projects:', error);
            }
        };
        fetchProjects();
    }, []);

    const allProjects = [...dynamicProjects, ...projects];

    const filteredProjects = filter === 'ALL' 
        ? allProjects 
        : allProjects.filter(p => p.category === filter);

    return (
        <div className="relative min-h-screen grain pt-20 overflow-hidden">
            <BlueprintBackground />
            
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div className="absolute top-1/4 left-10 text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] rotate-90 origin-left">
                    System_Archive // Rev_2024
                </div>
            </div>

            <div className="container-custom relative z-10">
                <header className="mb-10 animate-fadeIn pt-10">
                    <div className="flex items-center gap-4 mb-6 opacity-60">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">Root</span>
                        <span className="text-white/20">/</span>
                        <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Showcase</span>
                        <div className="h-px w-20 bg-gradient-to-r from-primary/30 to-transparent"></div>
                        <div className="flex items-center gap-2 ml-auto">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow"></div>
                            <span className="text-[10px] font-mono text-primary uppercase tracking-tighter">Live_Server_Active</span>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent animate-maskReveal leading-[0.9] md:leading-[0.85] mb-6 whitespace-normal">
                        PROVEN <span className="gradient-text">SOLUTIONS.</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-4">
                        <p className="text-muted text-base md:text-lg max-w-2xl border-l border-primary/30 pl-6 py-2 leading-relaxed">
                            A curated technical archive of high-performance digital architectures developed for industry-leading clients.
                        </p>
                    </div>
                </header>

             
                <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-mono text-[10px] tracking-widest transition-all whitespace-nowrap shrink-0 ${
                                filter === cat 
                                    ? 'bg-primary text-black font-bold shadow-lg shadow-primary/20' 
                                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60 border border-white/5'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="pb-20 space-y-12">
                    {/* First Row - Scrolling on Desktop, Grid on Mobile */}
                    <div className="marquee-container relative w-full overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:animate-marquee md:whitespace-nowrap w-full md:w-fit hover:[animation-play-state:paused] py-4">
                            {[...filteredProjects, ...filteredProjects].map((project, i) => (
                                <div
                                    key={`row1-${i}`}
                                    className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px]"
                                >
                                    <div
                                        className="group relative rounded-2xl overflow-hidden cursor-pointer card-3d glass-premium border border-white/5 hover:border-primary/40 shadow-2xl bg-slate-900/40 backdrop-blur-xl h-full flex flex-col whitespace-normal"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        
                                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/20">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                                                <span className="text-[8px] font-mono text-white/40 tracking-tighter uppercase">ID: {String(project.id).padStart(3, '0')}</span>
                                            </div>
                                            <span className="text-[8px] font-mono text-primary/60 uppercase tracking-tighter">BUILD_{project.build}</span>
                                        </div>

                                        <div className="relative h-[200px] overflow-hidden group/img shrink-0">
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-70 group-hover:opacity-100" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                                            
                                            
                                            <div className="absolute top-4 left-4 flex flex-col gap-2 transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
                                                <span className="bg-primary/90 text-black text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-tighter">{project.category}</span>
                                                <span className="bg-black/80 text-white/60 text-[8px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-tighter">VER_{project.version}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="p-6 relative flex-grow flex flex-col">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight leading-tight">{project.title}</h3>
                                            </div>
                                            
                                            <div className="space-y-4 mb-4 flex-grow">
                                                <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2 italic">{project.description}</p>
                                                
                                                <div className="flex items-center gap-3">
                                                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                                                    <span className="text-[8px] font-mono text-primary/40 uppercase">{project.arch}</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2 mb-4 shrink-0">
                                                {project.tech.map((t, idx) => (
                                                    <span key={idx} className="text-[8px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase tracking-tighter">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-white/5 shrink-0">
                                                <div className="text-[9px] font-mono text-primary/60 flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-primary animate-pulse rounded-full"></div>
                                                    DEPLOYED_STABLE
                                                </div>
                                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest group-hover:text-primary/60 transition-colors">
                                                    DETAILS_0{project.id}
                                                </span>
                                            </div>
                                        </div>

                                       
                                        <div className="absolute inset-0 bg-primary/5 pointer-events-none border border-primary/0 group-hover:border-primary/20 transition-all duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Row - Scrolling Right */}
                    {filteredProjects.length > 2 && (
                        <div className="marquee-container relative w-full overflow-hidden hidden md:block">
                            <div className="flex gap-6 md:gap-10 animate-marquee-reverse whitespace-nowrap w-fit hover:[animation-play-state:paused] py-4">
                                {/* Reverse array for visual variation */}
                                {[...[...filteredProjects].reverse(), ...[...filteredProjects].reverse()].map((project, i) => (
                                    <div
                                        key={`row2-${i}`}
                                        className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px]"
                                    >
                                        <div
                                            className="group relative rounded-2xl overflow-hidden cursor-pointer card-3d glass-premium border border-white/5 hover:border-primary/40 shadow-2xl bg-slate-900/40 backdrop-blur-xl h-full flex flex-col whitespace-normal"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            
                                            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/20">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                                                    <span className="text-[8px] font-mono text-white/40 tracking-tighter uppercase">ID: {String(project.id).padStart(3, '0')}</span>
                                                </div>
                                                <span className="text-[8px] font-mono text-primary/60 uppercase tracking-tighter">BUILD_{project.build}</span>
                                            </div>

                                            <div className="relative h-[200px] overflow-hidden group/img shrink-0">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-70 group-hover:opacity-100" 
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                                                
                                                
                                                <div className="absolute top-4 left-4 flex flex-col gap-2 transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
                                                    <span className="bg-primary/90 text-black text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-tighter">{project.category}</span>
                                                    <span className="bg-black/80 text-white/60 text-[8px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-tighter">VER_{project.version}</span>
                                                </div>
                                            </div>
                                            
                                            <div className="p-6 relative flex-grow flex flex-col">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight leading-tight">{project.title}</h3>
                                                </div>
                                                
                                                <div className="space-y-4 mb-4 flex-grow">
                                                    <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2 italic">{project.description}</p>
                                                    
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                                                        <span className="text-[8px] font-mono text-primary/40 uppercase">{project.arch}</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex flex-wrap gap-2 mb-4 shrink-0">
                                                    {project.tech.map((t, idx) => (
                                                        <span key={idx} className="text-[8px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase tracking-tighter">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between pt-4 border-t border-white/5 shrink-0">
                                                    <div className="text-[9px] font-mono text-primary/60 flex items-center gap-2">
                                                        <div className="w-1 h-1 bg-primary animate-pulse rounded-full"></div>
                                                        DEPLOYED_STABLE
                                                    </div>
                                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest group-hover:text-primary/60 transition-colors">
                                                        DETAILS_0{project.id}
                                                    </span>
                                                </div>
                                            </div>

                                           
                                            <div className="absolute inset-0 bg-primary/5 pointer-events-none border border-primary/0 group-hover:border-primary/20 transition-all duration-500"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {selectedProject && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black/95 z-[2000] flex items-center justify-center p-4 md:p-8 animate-fadeIn" onClick={() => setSelectedProject(null)}>
                        <div className="w-full max-w-[1000px] max-h-[90vh] rounded-3xl md:rounded-[30px] relative overflow-y-auto p-8 md:p-12 border border-white/10 glass-premium shadow-2xl bg-slate-950/90 backdrop-blur-3xl" onClick={(e) => e.stopPropagation()}>
                            <button className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/5 text-white text-2xl md:text-3xl w-10 md:w-[45px] h-10 md:h-[45px] rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10" onClick={() => setSelectedProject(null)}>&times;</button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div className="modal-image group overflow-hidden rounded-[20px]">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                                </div>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="text-[0.8rem] text-primary uppercase font-bold tracking-wider">{selectedProject.category}</span>
                                            <span className="text-white/20">|</span>
                                            <span className="text-[0.7rem] font-mono text-white/40 tracking-widest">VER_{selectedProject.version}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight">{selectedProject.title}</h2>
                                    </div>
                                    
                                    <p className="text-muted text-sm md:text-base leading-relaxed">{selectedProject.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                        <div className="space-y-4">
                                            <h4 className="text-primary font-bold uppercase text-[10px] md:text-xs tracking-widest border-b border-primary/20 pb-2">Key Features</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.features?.map((f, fi) => (
                                                    <li key={fi} className="flex items-center text-white/70 text-sm gap-2">
                                                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-primary font-bold uppercase text-[10px] md:text-xs tracking-widest border-b border-primary/20 pb-2">Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((t, ti) => (
                                                    <span key={ti} className="bg-white/5 py-1 px-3 rounded text-[9px] md:text-[10px] font-mono border border-white/10 text-white/80 uppercase">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <button 
                                            onClick={() => window.open(selectedProject.link, "_blank")}
                                            className="bg-accent-gradient w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                                        >
                                            Launch Deployment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <section className="py-16 md:py-20">
                    <div className="container-custom text-center">
                        <div className="glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] text-center border border-primary/20 bg-primary/[0.02] shadow-2xl">
                            <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Inspired by our architectures?</h2>
                                <p className="text-muted text-base md:text-lg leading-relaxed ">
                                    Let’s engineer a high-performance digital solution for your enterprise.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                    <Link to="/contact">
                                        <button className="bg-accent-gradient py-3 md:py-4 px-10 md:px-12 rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-all shadow-lg active:scale-95">
                                            Initiate Consultation
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;
