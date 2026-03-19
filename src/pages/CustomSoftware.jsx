import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const CustomSoftware = () => {
  const softwareFeatures = [
    {
      id: 'CORE_SPEC_01',
      title: "Enterprise Solutions",
      icon: "🏢",
      desc: "We build robust, multi-layered software systems designed to solve complex business operations and scale globally.",
      metric: 'BEYOND_SCALE'
    },
    {
      id: 'CORE_SPEC_02',
      title: "Agile Development",
      icon: "🔄",
      desc: "Iterative development cycles that allow for flexibility, rapid prototyping, and continuous improvement.",
      metric: 'RAPID_INIT'
    },
    {
      id: 'CORE_SPEC_03',
      title: "Security First",
      icon: "🛡️",
      desc: "Security is built into every layer of our solutions. Following best practices from OWASP, we ensure your systems and sensitive data remain protected.",
      metric: 'HARDEN_CORE'
    }
  ];

  const softwareStack = [
    { name: 'MongoDB', icon: "🍃" },
    { name: 'Express.js', icon: "🚂" },
    { name: 'React.js', icon: "⚛️" },
    { name: 'Node.js', icon: "🟢" },
    { name: 'Tailwind CSS', icon: "🌊" },
    { name: 'AWS Cloud', icon: "☁️" }
  ];

  return (
    <div className="relative min-h-screen">
      <BlueprintBackground />
      <div className="relative z-10 text-white overflow-hidden pb-20 grain">

      
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-custom text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-[10px] md:text-sm font-medium mb-6 animate-fadeInUp">
              Enterprise Grade Bespoke Solutions
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Bespoke <br />
              <span className="gradient-text">Software Engineering</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-base md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We build custom software solutions that are tailored to your business needs, helping you streamline operations and drive growth.
            </p>
          </div>
        </section>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      
        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-4xl glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] border border-white/10 relative overflow-hidden group bg-slate-900/40 backdrop-blur-2xl shadow-2xl">
              <div className="relative aspect-[4/5] md:aspect-[21/9] w-full flex items-center justify-center">
                {/* Technical Node Layout */}
                <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-6 md:px-20 items-center">
                  
                  {/* Left: Data Source */}
                  <div className="flex flex-col gap-4 md:gap-6 animate-fadeInLeft">
                    {[
                      { icon: "📦", label: "LEGACY_DATA" },
                      { icon: "☁️", label: "CLOUD_API" }
                    ].map((node, i) => (
                      <div key={i} className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 md:gap-4 hover:border-secondary/40 transition-all group/node">
                         <span className="text-xl md:text-2xl group-hover/node:scale-110 transition-transform">{node.icon}</span>
                         <div className="flex flex-col">
                            <span className="text-[6px] md:text-[8px] font-mono text-secondary/60">SOURCE_0{i+1}</span>
                            <span className="text-[10px] md:text-xs font-bold text-white/80">{node.label}</span>
                         </div>
                      </div>
                    ))}
                  </div>

                  {/* Center: Logic Core */}
                  <div className="relative flex justify-center scale-75 md:scale-100">
                     <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] bg-secondary/5 border border-secondary/20 flex items-center justify-center relative animate-pulse shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border border-secondary/10 border-dashed animate-spin-slow absolute"></div>
                        <div className="text-center group/core cursor-crosshair">
                           <span className="text-3xl md:text-4xl block mb-1 group-hover/core:scale-125 transition-transform duration-500">⚙️</span>
                           <span className="text-[6px] md:text-[8px] font-mono text-secondary tracking-widest uppercase">Logic_Matrix_Core</span>
                        </div>
                     </div>
                  </div>

                  {/* Right: Output Nodes */}
                  <div className="flex flex-col gap-4 md:gap-6 animate-fadeInRight">
                    {[
                      { icon: "🛡️", label: "SECURE_GATE" },
                      { icon: "📊", label: "ANALYTICS" }
                    ].map((node, i) => (
                      <div key={i} className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 md:gap-4 hover:border-secondary/40 transition-all group/node">
                         <span className="text-xl md:text-2xl group-hover/node:scale-110 transition-transform">{node.icon}</span>
                         <div className="flex flex-col">
                            <span className="text-[6px] md:text-[8px] font-mono text-secondary/60">ENDPOINT_0{i+1}</span>
                            <span className="text-[10px] md:text-xs font-bold text-white/80">{node.label}</span>
                         </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Status Bar */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-4 md:gap-10 text-[6px] md:text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap px-4 w-full justify-center">
                   <span className="flex items-center gap-1 md:gap-2"><div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500"></div> CORE_ONLINE</span>
                   <span className="flex items-center gap-1 md:gap-2"><div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-secondary animate-pulse"></div> DATA_FLUX: 42GB/S</span>
                   <span className="flex items-center gap-1 md:gap-2"><div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/10"></div> UPTIME: 99.9%</span>
                </div>

                </div>

                {/* Technical Overlay Elements */}
                <div className="absolute top-6 right-8 flex gap-3">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/40 border border-white/5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[8px] font-mono text-green-500/80 uppercase">Systems_Online</span>
                  </div>
                </div>
              </div>
            </div>
        </section>

       {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {softwareFeatures.map((feature, i) => (
                <div 
                  key={i} 
                  className="stagger-reveal animate-stagger"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="glass-premium rounded-3xl p-0 overflow-hidden border border-white/5 hover:border-primary/40 shadow-2xl transition-all duration-700 card-3d bg-slate-900/40 backdrop-blur-xl group">
                    {/* Technical Top Bar */}
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
                      <p className="text-muted leading-relaxed text-sm h-12 overflow-hidden line-clamp-3">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

  {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------     */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-16 text-center uppercase tracking-[0.3em] opacity-50">The Engineering Stack</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {softwareStack.map((tech, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="text-5xl mb-4 grayscale transition-all group-hover:grayscale-0 drop-shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-mono text-muted group-hover:text-primary">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

  {/* --------------------------------------------------------------------------------------------------------------------------------------------------------     */}
        <section className="py-20 md:py-24">
          <div className="container-custom">
            <div className="glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] text-center border border-secondary/20 bg-secondary/[0.02]">
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight">Ready to build your <br /> software foundation?</h2>
              <p className="text-blue-100/40 text-base md:text-xl mb-8 md:text-12 max-w-2xl mx-auto font-light leading-relaxed">
                From high-performance MVPs to enterprise-scale systems, we engineer the digital foundations of your business success.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-base md:text-lg">
                    Start Your Project
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

export default CustomSoftware;