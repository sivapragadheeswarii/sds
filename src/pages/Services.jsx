import React from 'react';
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const Services = () => {
    const services = [
        {
            id: 'NODE_01',
            title: 'Custom Software',
            icon: '⚙️',
            desc: 'Tailored software solutions designed to solve your unique business challenges and scale efficiently.',
            link: "/services/custom-software",
            latency: '< 50ms',
            reliability: '99.99%'
        },
        {
            id: 'NODE_02',
            title: 'Web Platforms',
            icon: '🌐',
            desc: 'High-performance web applications built with modern frameworks for speed, security, and SEO.',
            link: "/services/Web-Development",
            latency: '< 120ms',
            reliability: '99.9%'
        },
        {
            id: 'NODE_03',
            title: 'Mobile Apps',
            icon: '📱',
            desc: 'Native and cross-platform mobile experiences that engage users and drive business growth.',
            link: "/services/App-Development",
            latency: 'OPTIMIZED',
            reliability: 'HIGH_AVAIL'
        },
        {
            id: 'NODE_04',
            title: 'Digital Marketing',
            icon: '📈',
            desc: 'Strategic digital marketing solutions that increase brand visibility, attract the right audience , and drive measurable business growth. ',
            link: "/services/Digital-Marketing",
            latency: 'REAL_TIME',
            reliability: 'ACTIVE'
        },
        {
            id: 'NODE_05',
            title: 'Graphic design',
            icon: '🎨',
            desc: 'Creative Visual designs that strengthen your brand identity and communicate your message effectively across digital and print platforms',
            link: "/Services/Graphic-Design",
            latency: 'RENDER_FAST',
            reliability: 'CREATIVE_CORE'
        },
        {
            id: 'NODE_06',
            title: 'SEO',
            icon: '🔍',
            desc: 'Improve your website visibility on search engines like Google. Our SEO strategies help drive organic traffic, increase rankings, and grow your business online.',
            link: "/services/seo",
            latency: 'DATA_DRIVEN',
            reliability: 'GROWTH_STABLE'
        },
        {
            id: 'NODE_07',
            title: 'E-commerce Management',
            icon: '🛒',
            desc: 'Comprehensive seller account management and optimization across top e-commerce platforms like Amazon, Flipkart, and Shopify.',
            link: "/services/ecommerce-management",
            latency: 'SYNC_FAST',
            reliability: 'SELL_MAX'
        }
    ];

    const techStack = [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚂' },
        { name: 'AWS', icon: '☁️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Tailwind CSS', icon: '🌊' },
        { name: 'Redux', icon: '🟣' }
    ];

    const workflow = [{ step: '01', title: 'Consultation', desc: 'We dive deep into your requirements and business goals.' },
    { step: '02', title: 'Strategy & Ops', desc: 'Crafting the technical roadmap and architecture.' },
    { step: '03', title: 'Agile Dev', desc: 'Rapid prototyping and iterative development cycles.' },
    { step: '04', title: 'Quality QA', desc: 'Rigorous testing to ensure bug-free performance.' },
    { step: '05', title: 'Launch & Support', desc: 'Seamless deployment and ongoing maintenance.' }];


    return (

        <div className="relative min-h-screen">
            <BlueprintBackground />
            <div className="relative z-10 text-white overflow-hidden pb-20 grain">

                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>


                    <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulseCustom"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-heroPulse"></div>

                    <div className="container-custom text-center relative z-10 px-4 md:px-6">
                        {/* <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 animate-fadeInUp">
                            Our Expertise
                        </span> */}
                        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            Transforming Ideas Into <br />
                            
                            <span className="gradient-text">Digital Reality</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-muted text-base md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            We build robust, scalable, and innovative software solutions that empower businesses to thrive in the digital age.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                            <Link to="/contact">
                            
                            
                            <button className="bg-accent-gradient py-4 px-10 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
                                Get Started
                            </button></Link>
                            {/* <button className="border border-white/20 py-4 px-10 rounded-full font-bold hover:bg-white/5 transition-all backdrop-blur-sm">
                                View Portfolio
                            </button> */}



                        </div>




                    </div>

                    {/* ---------------------------------------------------------------------------------------------------- */}


                    {/* Core Service*/}


                    <div className="absolute -bottom-10 left-0 w-full opacity-10 pointer-events-none select-none">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    </div>
                </section>


                <section className="py-16 md:py-24 relative grain">
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 text-center md:text-left">
                            <div className="max-w-xl">
                                <h2 className="section-title text-3xl md:text-5xl mb-4">Service <span className="text-primary">Architectures</span></h2>
                                <p className="text-muted text-sm md:text-base">High-performance operation modules configured for enterprise-grade deployment.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, i) => (
                                <div 
                                    key={i} 
                                    className="stagger-reveal animate-stagger"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className="glass-premium rounded-2xl p-0 overflow-hidden border border-white/5 hover:border-primary/40 shadow-2xl transition-all duration-700 card-3d bg-slate-900/40 backdrop-blur-xl group h-full flex flex-col">
                                        {/* Technical Top Bar */}
                                        <div className="flex items-center justify-between px-6 py-2 border-b border-white/5 bg-black/20">
                                            <span className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">{service.id}</span>
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1 h-1 bg-primary animate-pulse rounded-full"></div>
                                                <span className="text-[9px] font-mono text-white/30 tracking-tighter">NODE_ACTIVE</span>
                                            </div>
                                        </div>

                                        <div className="p-8 flex-grow">
                                            <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary/20 transition-colors duration-500">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">{service.title}</h3>
                                            <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">
                                                {service.desc}
                                            </p>

                                            <Link to={service.link}>
                                                <button className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase flex items-center gap-2 group/btn">
                                                    INITIALIZE MODULE 
                                                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                                </button>
                                            </Link>
                                        </div>

                                        <div className="grid grid-cols-2 bg-black/40 border-t border-white/5">
                                            <div className="p-3 border-r border-white/5 text-center">
                                                <p className="text-[7px] font-mono text-white/20 uppercase tracking-widest mb-1">Target Latency</p>
                                                <p className="text-[9px] font-mono text-primary/60 tracking-tighter">{service.latency}</p>
                                            </div>
                                            <div className="p-3 text-center">
                                                <p className="text-[7px] font-mono text-white/20 uppercase tracking-widest mb-1">Reliability</p>
                                                <p className="text-[9px] font-mono text-white/60 tracking-tighter">{service.reliability}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                    </div>
                </section>
                {/* -------------------------------------------------------------------------------------------------------------------------- */}

                {/* In depth solution */}



                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="container-custom">
                        <div className="mb-12 md:mb-20 text-center px-4">
                            <h2 className="section-title text-3xl md:text-5xl font-black">In-Depth <span className="gradient-text">Solutions</span></h2>
                        </div>

                        <div className="space-y-32">

                            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 px-4">
                                <div className="flex-1 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                                    <span className="text-primary text-[10px] md:text-xs font-mono tracking-widest uppercase">Scalable Infrastructure</span>

                                    <h3 className="text-3xl md:text-4xl font-bold">Cloud-Native Architecture For Global Scale</h3>
                                    <p className="text-muted text-sm md:text-base leading-relaxed">
                                        We design systems that don't just work today, but evolve with your business. Using microservices and serverless paradigms, we ensure 99.9% uptime and seamless scaling.
                                    </p>


                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 uppercase text-xs tracking-widest font-bold">REST APIs</div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 uppercase text-xs tracking-widest font-bold">JWT Authentication</div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 uppercase text-xs tracking-widest font-bold">Scalable Backend</div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 uppercase text-xs tracking-widest font-bold">Database Optimization</div>
                                    </div>

                                </div>

                                <div className="flex-1 order-1 lg:order-2 relative group">
                                    <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                                    <div className="glass-premium p-4 rounded-[40px] transform rotate-3 transition-transform group-hover:rotate-0 duration-700">
                                        <div className="aspect-video bg-dark/50 rounded-[30px] border border-white/10 overflow-hidden flex items-center justify-center">
                                           
                                            <div className="text-6xl animate-float">☁️</div>
                                     
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 px-4">
                                <div className="flex-1 order-1 lg:order-2 relative group w-full max-w-lg mx-auto lg:max-w-none">
                                    <div className="absolute inset-0 bg-secondary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                                    <div className="glass-premium p-4 rounded-3xl md:rounded-[40px] transform -rotate-3 transition-transform group-hover:rotate-0 duration-700">
                                        <div className="aspect-video bg-dark/50 rounded-2xl md:rounded-[30px] border border-white/10 overflow-hidden flex items-center justify-center">
                                         
                                            <div className="text-6xl animate-float" style={{ animationDelay: '1s' }}>🎨</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                                    <span className="text-secondary text-[10px] md:text-xs font-mono tracking-widest uppercase">User-Centric Design</span>
                                    <h3 className="text-3xl md:text-4xl font-bold">UX/UI That Converts and Delights</h3>
                                    <p className="text-muted text-sm md:text-base leading-relaxed">
                                        Design is not just how it looks, but how it works. Our design philosophy centers on the user journey, ensuring every pixel serves a purpose and every interaction feels intuitive.
                                    </p>

                                    <ul className="space-y-4 text-left inline-block mx-auto lg:mx-0">
                                        <li className="flex items-center gap-4">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm md:text-base">01</div>
                                            <span className="text-sm md:text-base">User Path Analysis</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm md:text-base">02</div>
                                            <span className="text-sm md:text-base">High-Fidelity Prototyping</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm md:text-base">03</div>
                                            <span className="text-sm md:text-base">Accessibility (WCAG) Compliance</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------------------------------------------------- */}
                {/* Technoogy*/}


                <section className="py-24 bg-white/[0.02]">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4 uppercase tracking-[0.2em] opacity-50">Our Tech Stack</h2>

                            <div className="h-1 w-20 bg-primary mx-auto"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-60 hover:grayscale-0 transition-all duration-700">
                            {techStack.map((tech, i) => (
                                <div key={i} className="flex flex-col items-center group cursor-pointer">
                                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                        {tech.icon}
                                    </div>
                                    <span className="text-xs font-mono group-hover:text-primary transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------------------------------------------------------------------------- */}

                {/* why partner trust */}



 

                <section className="py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 -z-10"></div>

                    <div className="container-custom">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            <div className="flex-1 text-center lg:text-left px-4">
                                <h2 className="section-title text-3xl md:text-5xl font-black">Why Partners <br /> <span className="gradient-text">Trust Us</span></h2>
                                <p className="text-muted text-sm md:text-base mb-10">
                                    Over the years, we've refined our approach to deliver quality that speaks for itself. We don't just build software; we build long-term success.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Technical Mastery', desc: 'World-class engineers with deep expertise in modern tech.' },
                                        { title: 'Business Minded', desc: 'We align tech goals with your bottom-line business ROI.' },
                                        { title: 'Transparent Progress', desc: 'Real-time updates and weekly demos throughout the project.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 p-6 rounded-2xl glass hover:bg-white/5 transition-colors border border-white/5">

                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center font-bold text-dark">
                                                {i + 1}
                                            </div>
                                            <div>

                                                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                                <p className="text-muted text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">

                                <div className="relative aspect-square max-w-md mx-auto">
                                    <div className="absolute inset-0 border-[20px] border-white/5 rounded-full animate-rotateCustom"></div>
                                    <div className="absolute inset-10 border-[1px] border-primary/20 rounded-full animate-heroPulse"></div>
                              
                                    <div className="absolute inset-20 bg-accent-gradient rounded-full opacity-10 animate-pulse"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">

                                        <div className="text-8xl font-black text-white/10 select-none">SDS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                {/* workflow */}


                <section className="py-24 relative z-10">
                    <div className="container-custom">
                        <div className="text-center mb-12 md:mb-16 relative z-10 px-4">
                            <h2 className="section-title text-3xl md:text-5xl font-black text-white">System <span className="text-primary">Initialization</span></h2>
                            <p className="text-muted text-sm md:text-base font-mono text-[8px] md:text-[10px] tracking-widest uppercase mt-4">Executing standard deployment protocols from node acquisition to launch.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

                            <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-white/5 -z-10">
                                <div className="h-full bg-primary/40 animate-growLine" style={{ animationDelay: '1s' }}></div>
                            </div>

                            {workflow.map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-6 group">
                                    <div className="w-20 h-20 rounded-xl glass border border-white/5 flex flex-col items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] transition-all duration-500 relative z-10 bg-black/40 backdrop-blur-md">
                                        <span className="text-[8px] font-mono text-primary/40 tracking-tighter mb-1">STEP_{item.step}</span>
                                        <div className="w-6 h-[1px] bg-primary/20 mb-1"></div>
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 tracking-tighter uppercase group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-muted text-[10px] leading-relaxed font-mono uppercase tracking-tighter opacity-60">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ----------------------------------------------------------------------------------------------------------------------------- */}






                {/* <section className="py-24">
                <div className="container-custom">
                    <div className="glass-premium p-12 md:p-20 rounded-[60px] text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-accent-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-1000"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to build your <br /> <span className="text-primary">next big thing?</span></h2>
                            <p className="text-muted text-lg mb-12">
                                Let's collaborate and create something extraordinary. Our team is ready to turn your vision into a reality.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button className="bg-white text-dark py-4 px-12 rounded-full font-bold hover:scale-105 transition-all text-xl">
                                    Start a Project
                                </button>
                                <button className="border border-white/20 py-4 px-12 rounded-full font-bold hover:bg-white/5 transition-all backdrop-blur-sm text-xl">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                    
                        <div className="absolute -bottom-10 right-10 text-[10rem] font-black text-white/[0.02] select-none uppercase pointer-events-none">
                            Success
                        </div>
                    </div>
                </div>
            </section> */}
            </div>

        </div>
    );
};

export default Services;
