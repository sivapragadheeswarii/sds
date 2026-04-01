import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const features = [
    {
      id: 'SPEC_01',
      title: "Scalable Architecture",
      icon: "🏗️",
      desc: "We build web systems designed to handle massive traffic while maintaining peak performance.",
      metric: 'ELASTIC_GRID'
    },
    {
      id: 'SPEC_02',
      title: "SEO Optimized",
      icon: "🚀",
      desc: "Every line of code is written with search engines in mind, ensuring high visibility from launch.",
      metric: 'INDEX_PRIO'
    },
    {
      id: 'SPEC_03',
      title: "Modern Tech Stack",
      icon: "⚡",
      desc: "Using MongoDB, Express.js, React, and Node.js to deliver fast, secure, and scalable web applications.",
      metric: 'MERN_CORE'
    }
  ];

  const techStack = [
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Redux", icon: "🟣" },
    { name: "AWS Cloud", icon: "☁️" },
    { name: "Firebase", icon: "🔥" }
  ];

  return (
    <div className="relative min-h-screen">
      <BlueprintBackground />
      <div className="relative z-10 text-white overflow-hidden pb-20 grain">


        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-custom text-center">
            <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] md:text-sm font-medium mb-6 animate-fadeInUp">
              Frontend & Backend Excellence
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Next-Gen <br />
              <span className="gradient-text">Web Platforms</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-base md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We engineer high-performance web applications that combine stunning UI with robust backend systems to drive your digital success.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature, i) => (
                
                <div 
                  key={i} 
                  className="stagger-reveal animate-stagger"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="glass-premium rounded-3xl p-0 overflow-hidden border border-white/5 hover:border-primary/40 shadow-2xl transition-all duration-700 card-3d bg-slate-900/40 backdrop-blur-xl group">
                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-black/20">
                      <span className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">{feature.id}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-primary animate-pulse rounded-full"></div>
                        <span className="text-[9px] font-mono text-white/30 tracking-tighter uppercase">{feature.metric}</span>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="text-5xl mb-8 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary/20 transition-colors duration-500">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted leading-relaxed text-sm h-10 overflow-hidden line-clamp-2">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  {/* -------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-16 text-center uppercase tracking-[0.3em] opacity-50">Our Web Stack</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {techStack.map((tech, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="text-5xl mb-4 drop-shadow-[0_0_10px_rgba(0,210,255,0.2)] grayscale transition-all group-hover:grayscale-0">
                    {tech.icon}


                  </div>
                  <span className="text-xs font-mono text-muted group-hover:text-primary">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

  {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <section className="py-24 relative overflow-hidden">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
              <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">

                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">From Concept to <span className="text-primary">Cloud</span></h2>
               
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  Our web development workflow is built on agile principles, ensuring rapid delivery without compromising on quality or security. Every project undergoes rigorous testing and optimization before it hits production.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <Link to="/services" className="inline-block border border-primary/30 py-3 md:py-4 px-8 md:px-10 rounded-full font-bold hover:bg-primary/5 transition-all text-primary text-sm md:text-base">
                    EXPLORE OTHER SERVICES
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center">
                <div className="w-full max-w-lg aspect-square glass-premium rounded-3xl md:rounded-[3rem] border border-white/10 relative overflow-hidden group bg-slate-900/40 backdrop-blur-2xl shadow-2xl flex items-center justify-center p-6 md:p-8">
                 <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                    <defs>
                      <filter id="webGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    <g className="stroke-primary/20 fill-none stroke-px">
                      <path d="M 200 200 L 100 100" />
                      <path d="M 200 200 L 300 100" />
                      <path d="M 200 200 L 100 300" />
                      <path d="M 200 200 L 300 300" />
                    </g>
 
                    <circle r="2" fill="var(--primary)" filter="url(#webGlow)">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M 200 200 L 100 100" />
                    </circle>
                    <circle r="2" fill="var(--primary)" filter="url(#webGlow)">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200 200 L 300 100" />
                    </circle>
                    <circle r="2" fill="var(--primary)" filter="url(#webGlow)">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M 200 200 L 100 300" />
                    </circle>
                    <circle r="2" fill="var(--primary)" filter="url(#webGlow)">
                      <animateMotion dur="1.8s" repeatCount="indefinite" path="M 200 200 L 300 300" />
                    </circle>
                  </svg>

 
                  <div className="relative z-10 w-full h-full flex items-center justify-center scale-75 md:scale-100">

                    <div className="relative">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center relative animate-pulse shadow-[0_0_50px_rgba(0,210,255,0.2)]">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-primary/10 border-dashed animate-spin-slow absolute"></div>
                        <span className="text-3xl md:text-4xl">☁️</span>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[6px] md:text-[8px] font-mono text-white/30 tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">PLATFORM_CORE</div>
                    </div>
                  
                    <div className="absolute top-0 left-0 group/node text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg md:text-xl group-hover/node:border-primary/50 transition-colors">🌐</div>
                      <span className="text-[6px] md:text-[7px] font-mono text-primary/60 mt-1 md:mt-2 block">CDN</span>
                    </div>

                    <div className="absolute top-0 right-0 group/node text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg md:text-xl group-hover/node:border-primary/50 transition-colors">🏗️</div>
                      <span className="text-[6px] md:text-[7px] font-mono text-primary/60 mt-1 md:mt-2 block">EDGE</span>
                    </div>

                    <div className="absolute bottom-0 left-0 group/node text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg md:text-xl group-hover/node:border-primary/50 transition-colors">🔐</div>
                      <span className="text-[6px] md:text-[7px] font-mono text-primary/60 mt-1 md:mt-2 block">AUTH</span>
                    </div>

                    <div className="absolute bottom-0 right-0 group/node text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg md:text-xl group-hover/node:border-primary/50 transition-colors">🗄️</div>
                      <span className="text-[6px] md:text-[7px] font-mono text-primary/60 mt-1 md:mt-2 block">COMPUTE</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 md:right-6 flex items-center gap-1 md:gap-2">
                    <div className="w-0.5 md:w-1 h-2 md:h-3 bg-primary/40 animate-pulse"></div>
                    <div className="w-0.5 md:w-1 h-4 md:h-5 bg-primary/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-0.5 md:w-1 h-3 md:h-4 bg-primary/40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span className="text-[6px] md:text-[8px] font-mono text-white/20 ml-1 uppercase">Live_Flux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-20">
          <div className="container-custom">
            <div className="glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] text-center border border-primary/20 bg-primary/[0.02]">
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8">Ready to launch your <br /> web presence?</h2>
              <p className="text-blue-100/40 text-base md:text-xl mb-8 md:text-12 max-w-2xl mx-auto font-light leading-relaxed">
                From high-performance MVPs to enterprise-scale systems, we engineer the digital foundations of your business success.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-base md:text-lg">
                    Build My App
                  </button>
                </Link>
                <Link to="/services">
                  <button className="border border-white/20 py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:bg-white/5 transition-all text-base md:text-lg">
                    Back to Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;