import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedTitle from '../components/AnimatedTitle';
import EnterpriseCodeVisual from '../components/EnterpriseCodeVisual';
import HeroVisual from '../components/HeroVisual';
import BlueprintBackground from '../components/BlueprintBackground';
import Counter from '../components/Counter';
import { Link } from "react-router-dom";
import CyberCoreVisual from '../components/CyberCoreVisual';
import { FaWhatsapp, FaPhoneAlt, FaRocket, FaFolderOpen } from 'react-icons/fa';

const Home = () => {
    const navigate = useNavigate();

    const featuredServices = [
        {
            id: 'MOD_01',
            title: 'Custom Web Development',
            icon: '💻',
            desc: 'Scalable web applications using modern MERN stack.',
            link: '/services/web-development',
            runtime: 'STABLE',
            version: '2.4.0'
        },
        {
            id: 'MOD_02',
            title: 'Mobile App Development',
            icon: '📱',
            desc: 'Cross-platform mobile apps for Android and iOS.',
            link: '/services/app-development',
            runtime: 'ACTIVE',
            version: '1.8.5'
        },
        {
            id: 'MOD_03',
            title: 'E-commerce Development',
            icon: '🛒',
            desc: 'Secure and scalable online stores with payment integration.',
            link: '/services/ecommerce',
            runtime: 'OPTIMIZED',
            version: '3.1.2'
        },
        {
            id: 'MOD_04',
            title: 'Digital Marketing',
            icon: '📈',
            desc: 'SEO and marketing strategies to grow your business online.',
            link: '/services/digital-marketing',
            runtime: 'LIVE',
            version: '1.0.0'
        }
    ];

    const featuredProjects = [
        {
            id: 'ARCH_001',
            title: 'Guruvappa School Website',
            category: 'Education',
            image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&h=400&auto=format&fit=crop',
            link: 'https://guruvappaschool.com/',
            build: 'STABLE',
            arch: 'GLOBAL_CDN'
        },
        {
            id: 'ARCH_002',
            title: 'Holy Cross School',
            category: 'Education',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&h=400&auto=format&fit=crop',
            link: 'https://holycrossschoolpalani.org/',
            build: 'STABLE',
            arch: 'CMS_PORTAL'
        },
        {
            id: 'ARCH_003',
            title: 'RR Hair & Skin Clinic',
            category: 'Healthcare',
            image: 'https://www.baylaser.ca/wp-content/uploads/2018/12/Finding-The-Right-Laser-Treatment-For-You-Image-2.jpg',
            link: 'https://www.rrhairskinclinic.com/',
            build: 'LIVE',
            arch: 'SPA_CORE'
        }
    ];
    // const clients = [
    //     { name: 'X-CO', logo: '🔷' },
    //     { name: 'KINETIC', logo: '⚡' },
    //     { name: 'AETHER', logo: '☁️' },
    //     { name: 'CORE', logo: '🔘' },
    //     { name: 'VOID', logo: '⚫' }
    // ];



    const clients = [
        { name: 'Guruvappa School', logo: '🏫' },
        { name: 'Crescent School', logo: '🎓' },
        { name: 'RR Hair & Skin Clinic', logo: '💊' },
        { name: 'Theivaa Academy', logo: '📚' }
    ]

    const stats = [
        { end: 30, label: "Projects Delivered", suffix: "+" },
        { end: 25, label: "Happy Clients", suffix: "+" },
        { end: 5, label: "Years Experience", suffix: "+" },
        { end: 5, label: "Industry Domains", suffix: "+" }
    ];

    const techStack = [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Express.js', icon: '⚡' },
        { name: 'React.js', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'AWS', icon: '☁️' }
    ]

    const reasons = [
        { title: 'Vectorized Operations', desc: 'Parallel execution models that minimize computational overhead.' },
        { title: 'Hardened Security', desc: 'Zero-trust architecture integrated at the hardware abstraction layer.' },
        { title: 'Elastic Resilience', desc: 'Self-healing systems that adapt to catastrophic network failures.' }
    ];

    return (
        <div className="relative min-h-screen grain">
            <BlueprintBackground />

            <div className="py-20 relative z-10">
                <section className="min-h-[90vh] flex items-center relative overflow-x-clip overflow-y-visible">
                    <div className="absolute top-0 right-0 w-full h-full -z-[1] bg-[radial-gradient(circle_at_top_right,_#1a0b3b,_transparent_60%)]">
                        <div className="absolute w-[500px] h-[500px] bg-accent-gradient blur-[120px] rounded-full opacity-10 -z-[1] -top-[100px] -right-[100px] animate-float"></div>
                    </div>

                    <div className="container-custom w-full">
                        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
                            <div className="max-w-[900px] z-10">
                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-2 animate-fadeIn">

                                    {/* <div className="hidden md:block h-4 w-[1px] bg-white/10"></div>
                                    <a 
                                        href="tel:+919384293632" 
                                        className="group/phone flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] text-blue-100/40 hover:text-primary transition-all duration-300 uppercase"
                                    >
                                        <span className="text-sm bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center group-hover/phone:bg-primary/10 group-hover/phone:scale-110 transition-all duration-500">📞</span>
                                        <span className="group-hover/phone:tracking-[0.4em] transition-all duration-500">+91 9384293632</span>
                                    </a> */}
                                </div>

                                <h1 className="mb-8 overflow-visible animate-pulse">
                                    <AnimatedTitle text="SDS TECHNOLOGIES" />
                                </h1>

                                <p className="max-w-[650px] text-lg md:text-xl text-blue-100/60 leading-relaxed mb-12 font-light animate-fadeIn" style={{ animationDelay: '0.0s' }}>
                                    Architecting <span className="text-white font-medium">elite digital ecosystems</span> through precision engineering and creative intelligence. We transform complexity into seamless performance.
                                </p>

                                <div className="flex flex-wrap gap-6 animate-fadeIn" style={{ animationDelay: '0.0s' }}>
                                    <Link
                                        to="/contact"
                                        className="group relative bg-accent-gradient hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 flex items-center gap-3"
                                    >
                                        <FaRocket className="text-xl md:text-2xl" />
                                        <span className="relative z-10 uppercase tracking-widest text-sm md:text-lg">Build your idea now</span>
                                        <div className="absolute inset-0 bg-white/10 rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                                    </Link>

                                    <Link
                                        to="/projects"
                                        className="glass-premium border-white/5 text-white py-4 px-10 rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-300 uppercase tracking-widest text-sm md:text-lg flex items-center gap-3"
                                    >
                                        <FaFolderOpen className="text-lg md:text-xl text-primary" />
                                        View portfolio
                                    </Link>
                                </div>
                            </div>

                            <div className="hidden lg:block relative h-full min-h-[500px] animate-fadeIn">
                                <HeroVisual />
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------------------------------------------------------------------------- */}



                </section>


                <section className="py-20 md:py-32 container-custom relative">
                    <div className="absolute inset-0 bg-primary/5 opacity-20 animate-grid-pulse -z-10 rounded-[2rem] md:rounded-[4rem]"></div>
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center text-center lg:text-left">
                        <div className="space-y-8 md:space-y-10 animate-fadeInLeft">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight typewriter-text">
                                Computational <span className="text-primary">Sovereignty</span>
                            </h2>
                            <div className="space-y-4 md:space-y-6 text-blue-100/50 text-base md:text-lg leading-relaxed font-light">
                                <p>
                                    SDS Technologies operates at the intersection of extreme scalability and visual refinement.
                                    We architect the silent engines that power tomorrow's digital leaders.
                                </p>
                                <p>
                                    Our mission: To neutralize technical debt and enforce architectural purity in
                                    every bit we deploy. From micro-services to global CDNs.
                                </p>
                            </div>

                            <button
                                className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm flex items-center gap-2 group border-b border-primary/20 pb-2 w-fit mx-auto lg:ml-0 hover:border-primary transition-all duration-500"
                                onClick={() => navigate('/about')}
                            >
                                Interface with our Core DNA
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </button>
                        </div>

                        <div className="relative group animate-fadeInRight w-full max-w-[500px] mx-auto lg:max-w-none">
                            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
                            <div className="glass-premium rounded-3xl md:rounded-[3rem] p-6 md:p-8 border-glow-primary overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary animate-scan opacity-30"></div>
                                <EnterpriseCodeVisual />
                            </div>
                        </div>
                    </div>
                </section>
                {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,210,255,0.05)_0%,_transparent_70%)] animate-pulse-slow"></div>
                    <div className="container-custom relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                            {stats.map((stat, i) => (
                                <div key={i} className="group animate-blurIn relative" style={{ animationDelay: `${0.15 * (i + 1)}s` }}>
                                    <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors"></div>
                                    <Counter end={stat.end} label={stat.label} suffix={stat.suffix} />
                                    <div className="mt-4 flex justify-center gap-1">
                                        {[...Array(5)].map((_, j) => (
                                            <div key={j} className="w-2 md:w-4 h-1 bg-white/5 group-hover:bg-primary/40 transition-colors" style={{ transitionDelay: `${j * 0.1}s` }}></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="container-custom">
                        <div className="text-center mb-16 md:mb-24 relative">
                            <span className="text-primary font-mono text-[10px] md:text-sm tracking-[0.5em] mb-4 block uppercase animate-fadeIn">Exploration Modules</span>
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
                                Domain <span className="text-primary">Execution</span>
                            </h2>
                            <div className="w-24 md:w-40 h-[1px] bg-accent-gradient mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {featuredServices.map((service, i) => (
                                <div
                                    key={i}
                                    className="stagger-reveal animate-stagger"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div
                                        className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card-3d glass-premium border border-white/5 hover:border-primary/40 p-8 h-full flex flex-col bg-slate-900/40 backdrop-blur-xl"
                                        onClick={() => navigate(service.link)}
                                    >
                                        <div className="flex items-center justify-between mb-8 opacity-40">
                                            <span className="text-[9px] font-mono text-primary tracking-widest">{service.id}</span>
                                            <div className="flex gap-1">
                                                <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
                                                <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-black mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-blue-100/40 text-xs mb-10 leading-relaxed font-light flex-grow">
                                            {service.desc}
                                        </p>

                                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-tighter">V_{service.version}</span>
                                            <span className="text-[9px] font-mono text-primary/60 uppercase tracking-tighter">STATUS: {service.runtime}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <button
                                className="group relative px-12 py-5 rounded-xl font-black text-[10px] tracking-[0.4em] uppercase text-white overflow-hidden border border-white/10 hover:border-primary transition-all bg-white/5"
                                onClick={() => navigate('/services')}
                            >
                                <span className="relative z-10">Expand Global Registry</span>
                                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-primary/[0.01] relative border-y border-white/5">
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-8 text-center md:text-left">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                                    Operational <span className="text-primary">Proofs</span>
                                </h2>
                                <p className="text-blue-100/30 font-mono text-[10px] md:text-sm tracking-widest uppercase">Verified system deployments in production environments.</p>
                            </div>
                            <button
                                className="glass-premium px-8 md:px-10 py-3 md:py-4 rounded-xl font-black text-[8px] md:text-[10px] tracking-[0.4em] uppercase hover:bg-white/5 transition-all text-white border border-white/10"
                                onClick={() => navigate('/projects')}
                            >
                                All Deployments
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {featuredProjects.map((project, i) => (
                                <div
                                    key={i}
                                    className="stagger-reveal animate-stagger"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div
                                        className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 border border-white/5 card-3d glass-premium hover:border-primary/40 shadow-2xl bg-slate-900/40 backdrop-blur-xl"
                                        onClick={() => window.open(project.link, "_blank")}
                                    >
                                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/20">
                                            <span className="text-[8px] font-mono text-white/40 tracking-tighter uppercase">{project.id}</span>
                                            <span className="text-[8px] font-mono text-primary/60 uppercase tracking-tighter">BUILD_{project.build}</span>
                                        </div>

                                        <div className="relative h-[280px] overflow-hidden group/img">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>

                                            <div className="absolute top-4 left-4 flex flex-col gap-2 transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
                                                <span className="bg-primary text-black text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-tighter">{project.category}</span>
                                                <span className="bg-black/80 text-white/60 text-[8px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-tighter">{project.arch}</span>
                                            </div>
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-xl font-black text-white tracking-tight uppercase group-hover:text-primary transition-colors mb-4">{project.title}</h3>
                                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                                <div className="text-[10px] font-mono text-primary/60 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full"></div>
                                                    DEPLOYED_STABLE
                                                </div>
                                                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover:text-primary/60">ACCESS_NODE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className="py-32 relative overflow-hidden bg-white/[0.01]">
                    <div className="container-custom">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="flex-1 space-y-12">
                                <div>
                                    <span className="text-primary font-mono text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 block">Optimization Protocols</span>
                                    <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                                        System <span className="text-primary underline decoration-primary/20">Superiority</span>
                                    </h2>
                                    <p className="text-blue-100/40 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                                        We don't just develop; we optimize at the machine level. Our internal protocols ensure
                                        unprecedented reliability and deterministic performance across the entire stack.
                                    </p>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    {reasons.map((item, i) => (
                                        <div key={i} className="flex flex-wrap md:flex-nowrap gap-6 md:gap-8 p-6 md:p-10 rounded-2xl glass-premium hover:bg-primary/[0.05] transition-all duration-700 border-l-4 border-l-white/10 hover:border-l-primary group animate-fadeInLeft" style={{ animationDelay: `${0.2 * (i + 1)}s` }}>
                                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-dark border border-white/5 flex items-center justify-center font-black text-white/20 text-2xl md:text-3xl group-hover:text-primary group-hover:border-primary/40 transition-all duration-500">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight uppercase group-hover:text-primary transition-colors">{item.title}</h4>
                                                <p className="text-blue-100/30 text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 w-full relative">
                                <CyberCoreVisual />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 relative bg-black/5">
                    <div className="container-custom">
                        <div className="text-center mb-24">
                            <span className="text-primary font-mono text-[10px] tracking-[0.6em] uppercase mb-4 block">Stack Manifest</span>
                            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">Core <span className="text-primary">Infrastructures</span></h2>
                            <div className="h-[1px] w-48 bg-white/10 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-20 hover:opacity-100 transition-all duration-1000">
                            {techStack.map((tech, i) => (
                                <div key={i} className="flex flex-col items-center group cursor-pointer animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <div className="text-7xl mb-8 group-hover:scale-110 group-hover:text-primary transition-all duration-700 grayscale group-hover:grayscale-0">
                                        {tech.icon}
                                    </div>
                                    <span className="text-[10px] font-black tracking-[0.4em] text-blue-100/20 group-hover:text-primary transition-colors uppercase">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <section className="py-24 relative overflow-hidden border-y border-white/5 bg-white/[0.01]">
                    <div className="container-custom">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">Trusted Network</span>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                                Industry <span className="text-primary">Collaborations</span>
                            </h2>
                            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-12">

                            <div className="marquee-container relative">
                                <div className="flex gap-8 animate-marquee whitespace-nowrap w-fit">
                                    {[...clients, ...clients, ...clients].map((client, i) => (
                                        <div
                                            key={`f-${i}`}
                                            className="glass-premium p-6 rounded-2xl border-white/5 flex items-center gap-6 group hover:bg-white/5 transition-all duration-500 min-w-[300px]"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 shadow-inner shrink-0 text-white">
                                                {client.logo}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-sm font-bold text-white/60 group-hover:text-primary transition-colors duration-500 uppercase tracking-widest whitespace-normal">
                                                    {client.name}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="marquee-container relative">
                                <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap w-fit">
                                    {[...clients, ...clients, ...clients].map((client, i) => (
                                        <div
                                            key={`r-${i}`}
                                            className="glass-premium p-6 rounded-2xl border-white/5 flex items-center gap-6 group hover:bg-white/5 transition-all duration-500 min-w-[300px]"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 shadow-inner shrink-0 text-white">
                                                {client.logo}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-sm font-bold text-white/60 group-hover:text-primary transition-colors duration-500 uppercase tracking-widest whitespace-normal">
                                                    {client.name}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                <section className="py-32 relative overflow-hidden ">
                    <div className="absolute inset-0 bg-primary/[0.03] grain"></div>
                    <div className="container-custom relative z-10 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-widest animate-maskReveal">
                            Trusted Digital Excellence <span className="text-primary"></span>
                        </h2>

                        <p className="text-lg text-blue-100/50 leading-relaxed mb-12 font-light">
                            We combine professional web design and custom software development to deliver powerful
                            digital solutions for businesses across India. Creativity, technology, and strategy meet here.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
                            {[
                                "Scalable enterprise systems built for the future.",
                                "Custom web platforms designed to perform and adapt."
                            ].map((text, i) => (
                                <div key={i} className="glass-premium p-8 rounded-2xl border-white/5 flex gap-4 items-start animate-fadeInUp" style={{ animationDelay: `${i * 0.2}s` }}>
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <p className="text-blue-100/60 font-light italic">{text}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            className="group relative bg-accent-gradient text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-primary/40 overflow-hidden"
                            onClick={() => navigate('/contact')}
                        >
                            <span className="relative z-10 uppercase tracking-widest italic">Get Started Today</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
                        </button>
                    </div>
                </section>
            </div>

            {/* Floating Contact Widgets */}
            <div className="fixed bottom-8 right-8 z-[1000] flex flex-col gap-6">
                {/* WhatsApp Widget */}
                <div className="relative group animate-fluid-drift">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-atomic-ping"></div>
                    <a
                        href="https://wa.me/919384293632"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-125 transition-transform duration-500 hover-jitter"
                        aria-label="Chat on WhatsApp"
                    >
                        <FaWhatsapp className="group-hover:rotate-12 transition-transform" />
                    </a>
                </div>

                {/* Phone Widget */}
                <div className="relative group animate-fluid-drift" style={{ animationDelay: '-4s' }}>
                    <div className="absolute inset-0 bg-blue-600 rounded-full animate-atomic-ping" style={{ animationDelay: '0.7s' }}></div>
                    <a
                        href="tel:+919384293632"
                        className="relative z-10 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-[1.6rem] shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-125 transition-transform duration-500 hover-jitter"
                        aria-label="Call Us"
                    >
                        <FaPhoneAlt className="group-hover:-rotate-12 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
