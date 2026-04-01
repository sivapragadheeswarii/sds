import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const marketingFeatures = [
    {
      id: 'MKT_SPEC_01',
      title: "Social Media Dominance",
      icon: "📢",
      desc: "Strategic social campaigns that build community, increase brand awareness, and drive engagement.",
      metric: 'REACH_MAX'
    },
    {
      id: 'MKT_SPEC_02',
      title: "ROI-Focused PPC",
      icon: "💰",
      desc: "Precision-targeted paid advertising that maximizes your budget and delivers measurable results.",
      metric: 'CONV_OPT'
    },
    {
      id: 'MKT_SPEC_03',
      title: "Content Excellence",
      icon: "✍️",
      desc: "Compelling storytelling and multimedia content that resonates with your audience and builds trust.",
      metric: 'ENGAGE_X'
    }
  ];

  const platforms = [
    { name: 'Meta / FB', icon: "🔵" },
    { name: 'Instagram', icon: "📸" },
    { name: 'LinkedIn', icon: "💼" },
    { name: 'Google Ads', icon: "🔍" },
    { name: 'YouTube', icon: "📺" }
  ];

  return (
    <div className="relative min-h-screen">
      <BlueprintBackground />
      <div className="relative z-10 text-white overflow-hidden pb-20 grain">


        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-custom text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-[10px] md:text-sm font-medium mb-6 animate-fadeInUp">
              Precision Marketing & Growth
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Scale Your <br />
              <span className="gradient-text">Digital Presence</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-base md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We combine data analytics with creative strategy to deliver high-impact digital marketing solutions that convert visitors into loyal customers.
            </p>
          </div>
        </section>

{/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-4xl glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] border border-white/10 relative overflow-hidden group bg-slate-900/40 backdrop-blur-2xl shadow-2xl">
              <div className="relative aspect-[4/5] md:aspect-[21/9] w-full flex items-center justify-center">

     <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 300">
   <defs>
  <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
  <circle cx="1" cy="1" r="1" fill="var(--secondary)" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-dots)" />
                  
               
     <g className="stroke-secondary/10 fill-none stroke-px">
   <path d="M 0 150 L 800 150" />
  <path d="M 200 0 L 200 300" />
   <path d="M 400 0 L 400 300" />
  <path d="M 600 0 L 600 300" />
                  </g>

             
    <rect x="0" y="148" width="4" height="4" fill="var(--secondary)" filter="url(#hologram-glow)">
   <animate attributeName="x" from="0" to="800" dur="4s" repeatCount="indefinite" />
                  </rect>
     <rect x="0" y="148" width="4" height="4" fill="var(--secondary)" filter="url(#hologram-glow)">
  <animate attributeName="x" from="0" to="800" dur="4s" repeatCount="indefinite" begin="2s" />
  </rect>
    </svg>

  <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-10 items-center">
    <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 text-center group/metric hover:border-secondary/30 transition-all backdrop-blur-md">
    <div className="text-[10px] font-mono text-secondary/60 mb-2 uppercase tracking-widest">AWARE_IN</div>
     <div className="text-2xl md:text-3xl font-black text-white">100%</div>
    <div className="mt-2 md:mt-3 flex gap-1 justify-center">
  <div className="w-1 h-3 bg-secondary/40 animate-pulse"></div>
    <div className="w-1 h-3 bg-secondary/40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
   </div>

   <div className="md:col-span-2 relative flex flex-col items-center">
  <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] bg-secondary/5 border border-secondary/20 flex flex-center items-center justify-center relative animate-pulse shadow-[0_0_50px_rgba(157,80,187,0.1)]">
  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-secondary/10 border-dashed animate-spin-slow absolute"></div>
   <div className="flex flex-col items-center">
    <span className="text-3xl md:text-4xl mb-2">⚙️</span>
                        <span className="text-[6px] md:text-[8px] font-mono text-secondary tracking-widest uppercase">Growth_Engine_V.3</span>
                      </div>
                    </div>
                    
                    <div className="absolute left-0 top-1/2 -translate-x-full h-px w-10 bg-gradient-to-r from-transparent to-secondary/20 hidden md:block"></div>
                    <div className="absolute right-0 top-1/2 translate-x-full h-px w-10 bg-gradient-to-l from-transparent to-secondary/20 hidden md:block"></div>
                  </div>

                  <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 text-center group/metric hover:border-secondary/30 transition-all backdrop-blur-md">
                    <div className="text-[10px] font-mono text-secondary/60 mb-2 uppercase tracking-widest">CONV_EXIT</div>
  <div className="text-2xl md:text-3xl font-black text-secondary">4.8x</div>
                    <div className="mt-1 text-[8px] font-mono text-green-500 uppercase tracking-widest animate-pulse">ROI_STABLE</div>
                  </div>
                </div>

              
                <div className="absolute bottom-4 md:bottom-6 right-6 md:right-10 flex flex-wrap justify-end gap-3 md:gap-6 text-[6px] md:text-[8px] font-mono text-white/30 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                  <span>REMARKET: ACTIVE</span>
                  <span>SYNC_MODE: DYNAMIC</span>
                  <span>LATENCY: 12ms</span>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {marketingFeatures.map((feature, i) => (
                <div 
                  key={i} 
                  className="stagger-reveal animate-stagger"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="glass-premium rounded-3xl p-0 overflow-hidden border border-white/5 hover:border-secondary/40 shadow-2xl transition-all duration-700 card-3d bg-slate-900/40 backdrop-blur-xl group">
                 
                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-black/20">
                      <span className="text-[10px] font-mono text-secondary/60 tracking-widest uppercase">{feature.id}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-secondary animate-pulse rounded-full"></div>
                        <span className="text-[9px] font-mono text-white/30 tracking-tighter uppercase">{feature.metric}</span>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="text-5xl mb-8 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-secondary/20 transition-colors duration-500">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-secondary transition-colors">{feature.title}</h3>
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
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-16 text-center uppercase tracking-[0.3em] opacity-50">Our Channel Expertise</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {platforms.map((platform, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="text-5xl mb-4 grayscale transition-all group-hover:grayscale-0 drop-shadow-[0_0_15px_rgba(157,80,187,0.3)]">
                    {platform.icon}
                  </div>
                  <span className="text-xs font-mono text-muted group-hover:text-secondary">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <section className="py-24">
          <div className="container-custom text-center">
            <div className="glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] text-center border border-primary/20 bg-primary/[0.02]">
            <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold">Grow Your ROI Today</h2>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Stop guessing and start growing. Our team will help you build a marketing engine that consistently delivers results and scales your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-base md:text-lg">
                    Book Strategy Session
                  </button>
                </Link>
                <Link to="/services">
                  <button className="border border-white/20 py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:bg-white/5 transition-all text-base md:text-lg">
                    View Other Services
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

export default DigitalMarketing;