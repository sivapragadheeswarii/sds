import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedTitle from '../components/AnimatedTitle';
import EnterpriseCodeVisual from '../components/EnterpriseCodeVisual';
import HeroVisual from '../components/HeroVisual';
import BlueprintBackground from '../components/BlueprintBackground';
import Counter from '../components/Counter';
import { Link } from "react-router-dom";
import CyberCoreVisual from '../components/CyberCoreVisual';

const Home = () => {
    const navigate = useNavigate();

  const featuredServices = [
 { title: 'Custom Web Development', icon: '💻', desc: 'Scalable web applications using modern MERN stack.', link:'/services/web-development'},
 { title: 'Mobile App Development', icon: '📱', desc: 'Cross-platform mobile apps for Android and iOS.', link:'/services/app-development'},
 { title: 'E-commerce Development', icon: '🛒', desc: 'Secure and scalable online stores with payment integration.', link:'/services/ecommerce'},
 { title: 'Digital Marketing', icon: '📈', desc: 'SEO and marketing strategies to grow your business online.', link:'/services/digital-marketing'}
]

   const featuredProjects = [
  {
    title: 'Guruvappa School Website',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&h=400&auto=format&fit=crop',
    link: 'https://guruvappaschool.com/'
  },
  {
    title: 'Surabhi Fencing',
    category: 'Construction',
    image: 'https://www.expandedmetalcompany.com/media/wysiwyg/link_fencing_2.jpg',
    link: 'https://sds-surabhi.vercel.app/'
  },
  {
    title: 'RR Hair & Skin Clinic',
    category: 'Healthcare',
    image: 'https://www.baylaser.ca/wp-content/uploads/2018/12/Finding-The-Right-Laser-Treatment-For-You-Image-2.jpg',
    link: 'https://www.rrhairskinclinic.com/'
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
 { name: 'Surabhi Fencing', logo: '🏗️' },
 { name: 'RR Hair & Skin Clinic', logo: '💊' }
]

   const stats = [
  { end: 30, label: "Projects Delivered", suffix: "+" },
  { end: 25, label: "Happy Clients", suffix: "+" },
  { end: 5, label: "Years Experience", suffix: "+" },
  { end: 5, label: "Industry Domains", suffix: "+" }
];

   const techStack = [
 { name:'MongoDB', icon:'🍃' },
 { name:'Express.js', icon:'⚡' },
 { name:'React.js', icon:'⚛️' },
 { name:'Node.js', icon:'🟢' },
 { name:'Firebase', icon:'🔥' },
 { name:'AWS', icon:'☁️' }
]

    const reasons = [
        { title: 'Vectorized Operations', desc: 'Parallel execution models that minimize computational overhead.' },
        { title: 'Hardened Security', desc: 'Zero-trust architecture integrated at the hardware abstraction layer.' },
        { title: 'Elastic Resilience', desc: 'Self-healing systems that adapt to catastrophic network failures.' }
    ];

    return (
        <div className="relative min-h-screen grain">
            <BlueprintBackground />

            <div className="pb-20 relative z-10 ">
                <section className="min-h-[90vh] flex items-center relative overflow-x-clip overflow-y-visible">
                    <div className="absolute top-0 right-0 w-full h-full -z-[1] bg-[radial-gradient(circle_at_top_right,_#1a0b3b,_transparent_60%)]">
                        <div className="absolute w-[500px] h-[500px] bg-accent-gradient blur-[120px] rounded-full opacity-10 -z-[1] -top-[100px] -right-[100px] animate-float"></div>
                    </div>

                    <div className="container-custom w-full">
                        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
                            <div className="max-w-[900px] z-10">
                                <div className="inline-block px-4 py-1.5 mb-10 text-[11px] font-semibold tracking-[0.4em] text-primary underline decoration-primary/30 underline-offset-8 uppercase animate-fadeIn ">
                                    Legacy since 2021
                                </div>

                                <div className="mb-8 overflow-visible animate-pulse">
                                    <AnimatedTitle text="SDS TECHNOLOGIES" />
                                </div>

                                <p className="max-w-[650px] text-lg md:text-xl text-blue-100/60 leading-relaxed mb-12 font-light animate-fadeIn" style={{ animationDelay: '0.0s' }}>
                                    Architecting <span className="text-white font-medium">elite digital ecosystems</span> through precision engineering and creative intelligence. We transform complexity into seamless performance.
                                </p>

                                <div className="flex flex-wrap gap-6 animate-fadeIn" style={{ animationDelay: '0.0s' }}>
                                    <button
                                        className="group relative bg-accent-gradient hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30"
                                        onClick={() => navigate('/services')}
                                    >
                                        <span className="relative z-10 uppercase tracking-widest">Explore Services</span>
                                        <div className="absolute inset-0 bg-white/10 rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                                    </button>

                                    <button
                                        className="glass-premium border-white/5 text-white py-4 px-10 rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-300 uppercase tracking-widest"
                                        onClick={() => navigate('/projects')}
                                    >
                                        View Projects
                                    </button>
                                </div>
                            </div>

                            <div className="hidden lg:block relative h-full min-h-[500px] animate-fadeIn">
                                <HeroVisual />
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------------------------------------------------------------------------- */}



                </section>


                <section className="py-32 container-custom relative">
                    <div className="absolute inset-0 bg-primary/5 opacity-20 animate-grid-pulse -z-10 rounded-[4rem]"></div>
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10 animate-fadeInLeft">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight typewriter-text">
                                Computational <span className="text-primary">Sovereignty</span>
                            </h2>
                            <div className="space-y-6 text-blue-100/50 text-lg leading-relaxed font-light">
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
                                className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 group border-b border-primary/20 pb-2 w-fit hover:border-primary transition-all duration-500"
                                onClick={() => navigate('/about')}
                            >
                                Interface with our Core DNA
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </button>
                        </div>

                        <div className="relative group animate-fadeInRight">
                            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
                            <div className="glass-premium rounded-[3rem] p-8 border-glow-primary overflow-hidden relative">
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
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                            {stats.map((stat, i) => (
                                <div key={i} className="group animate-blurIn relative" style={{ animationDelay: `${0.15 * (i + 1)}s` }}>
                                    <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors"></div>
                                    <Counter end={stat.end} label={stat.label} suffix={stat.suffix} />
                                    <div className="mt-4 flex justify-center gap-1">
                                        {[...Array(5)].map((_, j) => (
                                            <div key={j} className="w-4 h-1 bg-white/5 group-hover:bg-primary/40 transition-colors" style={{ transitionDelay: `${j * 0.1}s` }}></div>
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
                        <div className="text-center mb-24 relative">
                            <span className="text-primary font-mono text-sm tracking-[0.5em] mb-4 block uppercase animate-fadeIn">Exploration Modules</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
                                Domain <span className="text-primary">Execution</span>
                            </h2>
                            <div className="w-40 h-[1px] bg-accent-gradient mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
                            {featuredServices.map((service, i) => (
                                <div key={i} className="bg-dark/80 backdrop-blur-3xl p-10 hover:bg-primary/[0.03] transition-all duration-700 group relative overflow-hidden animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <div className="absolute top-0 left-0 w-full h-full border border-primary/0 group-hover:border-primary/20 transition-all duration-700"></div>
                                    <div className="text-5xl mb-12 bg-accent-gradient bg-clip-text text-transparent w-fit group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{service.title}</h3>
                                    <p className="text-blue-100/40 text-sm mb-10 leading-relaxed font-light">
                                        {service.desc}
                                    </p>
                                    <button
                                        className="inline-flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.3em] uppercase group-hover:gap-4 transition-all"
                                        onClick={() => navigate(service.link)}
                                    >
                                        Access Module <span className="text-lg">→</span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <button
                                className="group relative px-12 py-5 rounded-full font-black text-xs tracking-[0.4em] uppercase text-white overflow-hidden border border-white/10 hover:border-primary transition-all"
                                onClick={() => navigate('/services')}
                            >
                                <span className="relative z-10">Expand Registry</span>
                                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                        </div>
                    </div>
                </section>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className="py-32 bg-primary/[0.01] relative border-y border-white/5">
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div>
                                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
                                    Operational <span className="text-primary">Proofs</span>
                                </h2>
                                <p className="text-blue-100/30 font-mono text-sm tracking-widest uppercase">Verified system deployments in production environments.</p>
                            </div>
                            <button
                                className="glass-premium px-10 py-4 rounded-2xl font-black text-xs tracking-[0.4em] uppercase hover:bg-white/5 transition-all text-white border border-white/10"
                                onClick={() => navigate('/projects')}
                            >
                                All Deployments
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {featuredProjects.map((project, i) => (
                                <div
                                    key={i}
                                    className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 border border-white/5 animate-fadeInUp"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                    onClick={() => window.open(project.link, "_blank")}
                                >
                                    <div className="relative h-[350px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/20 transition-all duration-700"></div>
                                        <div className="absolute inset-0 border-[20px] border-white/5 group-hover:border-[0px] transition-all duration-700"></div>

                                        <div className="absolute bottom-10 left-10 right-10">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-3 block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{project.category}</span>
                                            <h3 className="text-2xl font-black text-white tracking-tight uppercase translate-y-2 group-hover:translate-y-0 transition-all duration-500">{project.title}</h3>
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
                                    <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">Optimization Protocols</span>
                                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
                                        System <span className="text-primary underline decoration-primary/20">Superiority</span>
                                    </h2>
                                    <p className="text-blue-100/40 text-lg font-light leading-relaxed max-w-2xl">
                                        We don't just develop; we optimize at the machine level. Our internal protocols ensure
                                        unprecedented reliability and deterministic performance across the entire stack.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {reasons.map((item, i) => (
                                        <div key={i} className="flex gap-8 p-10 rounded-2xl glass-premium hover:bg-primary/[0.05] transition-all duration-700 border-l-4 border-l-white/10 hover:border-l-primary group animate-fadeInLeft" style={{ animationDelay: `${0.2 * (i + 1)}s` }}>
                                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-dark border border-white/5 flex items-center justify-center font-black text-white/20 text-3xl group-hover:text-primary group-hover:border-primary/40 transition-all duration-500">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-black text-white mb-2 tracking-tight uppercase group-hover:text-primary transition-colors">{item.title}</h4>
                                                <p className="text-blue-100/30 text-base font-light leading-relaxed">{item.desc}</p>
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
                        <div className="text-center mb-16">
                            <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">Trusted Network</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
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
        </div>
    );
};

export default Home;
