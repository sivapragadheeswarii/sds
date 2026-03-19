import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const SEO = () => {
  const seoFeatures = [
    {
      id: 'SEO_SPEC_01',
      title: "Data-Driven Strategy",
      icon: "📊",
      desc: "We use advanced analytics and keyword research to craft strategies that align with your business goals.",
      metric: 'ALPHA_KERN'
    },
    {
      id: 'SEO_SPEC_02',
      title: "Technical SEO",
      icon: "⚙️",
      desc: "Optimizing site architecture, speed, and mobile responsiveness to satisfy search engine algorithms.",
      metric: 'CRAWL_MAX'
    },
    {
      id: 'SEO_SPEC_03',
      title: "Content Growth",
      icon: "📝",
      desc: "Creating high-value content that attracts organic traffic and builds authority in your industry.",
      metric: 'RANK_BOOST'
    }
  ];

  const tools = [
    { name: 'Google Analytics', icon: "📈" },
    { name: 'Search Console', icon: "🔍" },
    { name: 'SEMrush', icon: "🦊" },
    { name: 'Ahrefs', icon: "🔗" },
    { name: 'Hotjar', icon: "🔥" },
    { name: 'Screaming Frog', icon: "🐸" }
  ];

  return (
    <div className="relative min-h-screen">
      <BlueprintBackground />
      <div className="relative z-10 text-white overflow-hidden pb-20 grain">

      
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-custom text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] md:text-sm font-medium mb-6 animate-fadeInUp">
              Organic Growth & ROI
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Mastering the <br />
              <span className="gradient-text">Search Landscape</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-base md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We don't just increase traffic; we drive qualified leads and boost rankings using proven, white-hat SEO techniques and data-driven marketing.
            </p>
          </div>
        </section>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-4xl glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] border border-white/10 relative overflow-hidden group bg-slate-900/40 backdrop-blur-2xl shadow-2xl">
              <div className="relative aspect-[4/5] md:aspect-[21/9] w-full flex items-center justify-center">
                {/* SVG Node Network layer */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 300">
                  <defs>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Network Links */}
                  <g className="stroke-primary/20 fill-none stroke-[0.5]">
                    <path d="M 150 150 L 400 60" />
                    <path d="M 150 150 L 400 240" />
                    <path d="M 400 60 L 650 150" />
                    <path d="M 400 240 L 650 150" />
                    <path d="M 400 60 L 400 240" />
                  </g>

                  {/* Nodes */}
                  <circle cx="150" cy="150" r="4" fill="var(--primary)" filter="url(#glow)" />
                  <circle cx="400" cy="60" r="4" fill="var(--primary)" filter="url(#glow)" />
                  <circle cx="400" cy="240" r="4" fill="var(--primary)" filter="url(#glow)" />
                  <circle cx="650" cy="150" r="4" fill="var(--primary)" filter="url(#glow)" />

                  {/* Traveling index pulses */}
                  <circle r="3" fill="var(--primary)" filter="url(#glow)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 150 150 L 400 60" />
                  </circle>
                  <circle r="3" fill="var(--primary)" filter="url(#glow)">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 400 60 L 650 150" />
                  </circle>
                  <circle r="3" fill="var(--primary)" filter="url(#glow)">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M 150 150 L 400 240" />
                  </circle>
                </svg>

                {/* Technical Node Cards */}
                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between px-6 md:px-16 items-center gap-10 md:gap-0">
                   <div className="p-3 md:p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md animate-fadeInLeft w-full md:w-auto text-center md:text-left">
                      <span className="text-[6px] md:text-[7px] font-mono text-primary/60 block mb-1">NODE_INIT</span>
                      <div className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter">RESEARCH_PHASE</div>
                      <div className="mt-2 h-1 w-full bg-white/5 rounded-full">
                        <div className="h-full bg-primary/40 w-full animate-pulse"></div>
                      </div>
                   </div>

                   <div className="relative scale-75 md:scale-100">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center animate-pulse">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-primary/10 border-dashed animate-spin-slow absolute"></div>
                        <div className="text-center">
                          <span className="text-3xl md:text-4xl block mb-1">📈</span>
                          <span className="text-[6px] md:text-[8px] font-mono text-primary tracking-[0.4em] uppercase">Auth_Core</span>
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 px-2 md:py-1 rounded bg-primary/20 border border-primary/40 text-[8px] md:text-[9px] font-mono text-white animate-float">#1 RANKING</div>
                   </div>

                   <div className="p-3 md:p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md animate-fadeInRight w-full md:w-auto text-center md:text-left">
                      <span className="text-[6px] md:text-[7px] font-mono text-primary/60 block mb-1">NODE_EXIT</span>
                      <div className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter">GROWTH_STABLE</div>
                      <div className="flex gap-1 mt-2 justify-center md:justify-start">
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-sm bg-primary/20 animate-pulse"></div>
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-sm bg-primary/40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-sm bg-primary/60 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                   </div>
                </div>

                {/* Sub-layer Metrics */}
                <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 flex gap-4 md:gap-8 w-full justify-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[6px] md:text-[8px] font-mono text-white/20 uppercase tracking-widest">Index_Flux</span>
                    <span className="text-[10px] md:text-xs font-bold text-primary">1,240 pk/s</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[6px] md:text-[8px] font-mono text-white/20 uppercase tracking-widest">Authority_Level</span>
                    <span className="text-[10px] md:text-xs font-bold text-primary">98.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {seoFeatures.map((feature, i) => (
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

       {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-16 text-center uppercase tracking-[0.3em] opacity-50">SEO & Marketing Arsenal</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {tools.map((tool, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="text-5xl mb-4 grayscale transition-all group-hover:grayscale-0 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {tool.icon}
                  </div>
                  <span className="text-xs font-mono text-muted group-hover:text-primary">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

    {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------    */}
        <section className="py-24">
          <div className="container-custom text-center">
            <div className="glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] text-center border border-primary/20 bg-primary/[0.02]">
            <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Ready to Dominate Search?</h2>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Unlock the full potential of your business with our data-backed SEO and digital marketing services. Let's build your organic empire together.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-base md:text-lg">
                    Get Free Audit
                  </button>
                </Link>
                <Link to="/services">
                  <button className="border border-white/20 py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:bg-white/5 transition-all text-base md:text-lg">
                    Other Services
                  </button>
                </Link>
              </div>
            </div>
          </div></div>
        </section>
      </div>
    </div>
  );
};

export default SEO;