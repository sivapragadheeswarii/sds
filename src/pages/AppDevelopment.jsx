import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const AppDevelopment = () => {
  const mobileFeatures = [
    {
      id: 'APP_SPEC_01',
      title: "Cross-Platform Power",
      icon: "📱",
      desc: "One codebase for iOS and Android, ensuring consistent experience and faster time-to-market.",
      metric: 'POLY_CODE'
    },
    {
      id: 'APP_SPEC_02',
      title: "Native Performance",
      icon: "⚙️",
      desc: "Optimized architectures that provide seamless, lag-free performance indistinguishable from native apps.",
      metric: 'LOW_MTBF'
    },
    {
      id: 'APP_SPEC_03',
      title: "User-Centric UX",
      icon: "✨",
      desc: "Intuitive mobile interfaces designed to maximize user engagement and retention.",
      metric: 'RETAIN_X'
    }
  ];

  const appStack = [
    { name: 'React Native', icon: "⚛️" },
    { name: 'Firebase', icon: "🔥" },
    { name: 'Javascript', icon: "🟨" },
    { name: 'Rest API', icon: "🔗" },
    { name: 'Git', icon: "📂" }
  ];

  return (
    <div className="relative min-h-screen">
      <BlueprintBackground />
      <div className="relative z-10 text-white overflow-hidden pb-20 grain">


        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-custom text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-[10px] md:text-sm font-medium mb-6 animate-fadeInUp">
              iOS & Android Excellence
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Premium <br />
              <span className="gradient-text">Mobile Experiences</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-base md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We build high-performance mobile applications that empower your business to reach users wherever they are, on any device.
            </p>
          </div>
        </section>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-5xl glass-premium p-8 md:p-16 rounded-3xl md:rounded-[60px] border border-white/10 relative overflow-hidden group bg-slate-900/40 backdrop-blur-3xl shadow-2xl">
              
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ 
                     backgroundImage: 'linear-gradient(rgba(157,80,187,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(157,80,187,0.2) 1px, transparent 1px)',
                     backgroundSize: '40px 40px' 
                   }}></div>
              
              <div className="relative aspect-[4/5] md:aspect-[21/9] w-full flex items-center justify-center">
                {/* SVG Pipeline Layer */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <filter id="neon-glow">
                      <feGaussianBlur stdDeviation="3" result="glow"/>
                      <feMerge>
                        <feMergeNode in="glow"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                 
                  <g className="stroke-secondary/20 fill-none stroke-[0.5] hidden md:block">
                  
                    <path d="M 580 200 L 750 100" />
                 
                    <path d="M 580 200 L 750 300" />
                    
                    <path d="M 250 200 L 420 200" />
                  </g>

                 
                  <circle r="3" fill="var(--secondary)" filter="url(#neon-glow)" className="hidden md:block">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 250 200 L 420 200" />
                  </circle>

                
                  <circle r="2" fill="var(--secondary)" filter="url(#neon-glow)" className="hidden md:block">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 580 200 L 750 100" />
                  </circle>
                  <circle r="2" fill="var(--secondary)" filter="url(#neon-glow)" className="hidden md:block">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 580 200 L 750 300" />
                  </circle>
                </svg>

               
                <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-12 md:gap-0">
                  
              
                  <div className="flex flex-col gap-4 md:gap-6 w-full md:w-48 animate-fadeInLeft text-center md:text-left order-2 md:order-1">
                    <div className="text-[10px] font-mono text-secondary/60 tracking-widest uppercase mb-2">Comp_Library</div>
                    <div className="grid grid-cols-4 md:grid-cols-2 gap-3">
                      {[
                        { icon: "👤", label: "AUTH" },
                        { icon: "📊", label: "DATA" },
                        { icon: "☁️", label: "CLOUD" },
                        { icon: "⚙️", label: "LOGIC" }
                      ].map((item, i) => (
                        <div key={i} className="p-2 md:p-3 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center gap-1 hover:border-secondary/40 transition-all cursor-pointer group/comp">
                           <span className="text-lg md:text-xl group-hover/comp:scale-110 transition-transform">{item.icon}</span>
                           <span className="text-[6px] md:text-[7px] font-mono text-white/40">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                
                  <div className="relative order-1 md:order-2 scale-75 md:scale-100">
                    <div className="w-40 h-80 rounded-[2.5rem] border-4 border-secondary/20 bg-black/40 backdrop-blur-xl relative overflow-hidden flex flex-col p-4 animate-float">
                     
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--secondary) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                      
                     
                      <div className="relative z-10 flex flex-col gap-4">
                         <div className="w-full h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <div className="w-12 h-1 bg-secondary/40 rounded-full animate-pulse"></div>
                         </div>
                         <div className="flex-1 flex flex-col gap-3">
                            <div className="w-full h-24 rounded-xl bg-secondary/5 border border-secondary/20 border-dashed flex items-center justify-center overflow-hidden">
                               <div className="text-2xl opacity-20 animate-spin-slow">📱</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                               <div className="h-16 rounded-xl bg-white/5 border border-white/5"></div>
                               <div className="h-16 rounded-xl bg-white/5 border border-white/5"></div>
                            </div>
                         </div>
                      </div>

                      
                      <div className="mt-auto h-12 rounded-xl bg-black/60 border border-white/10 p-2 flex flex-col justify-center">
                         <div className="flex justify-between text-[6px] font-mono text-secondary mb-1">
                            <span>ASSEMBLING...</span>
                            <span>92%</span>
                         </div>
                         <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-[92%] animate-growWidth"></div>
                         </div>
                      </div>
                    </div>
                   
                    <div className="absolute -inset-10 border border-secondary/5 rounded-full animate-spin-slow opacity-30"></div>
                  </div>

                 
                  <div className="flex flex-col gap-6 md:gap-12 w-full md:w-48 animate-fadeInRight order-3">
                    <div className="text-[10px] font-mono text-secondary/60 tracking-widest uppercase mb-4 text-center md:text-right">Deployment_Nodes</div>
                    
                    <div className="flex flex-row md:flex-row-reverse items-center justify-center md:justify-start gap-4 md:gap-4 group/ios">
                       <div className="flex flex-col items-start md:items-end">
                          <span className="text-[8px] font-mono text-secondary tracking-widest">ios_v.14.2</span>
                          <span className="text-[10px] font-bold text-white uppercase">Ready_Build</span>
                       </div>
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl md:text-3xl group-hover/ios:border-secondary/50 group-hover/ios:bg-secondary/10 transition-all">🍎</div>
                    </div>

                    <div className="flex flex-row md:flex-row-reverse items-center justify-center md:justify-start gap-4 md:gap-4 group/and">
                       <div className="flex flex-col items-start md:items-end">
                          <span className="text-[8px] font-mono text-secondary tracking-widest">and_v.12.0</span>
                          <span className="text-[10px] font-bold text-white uppercase">Optimized</span>
                       </div>
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl md:text-3xl group-hover/and:border-secondary/50 group-hover/and:bg-secondary/10 transition-all">🤖</div>
                    </div>
                  </div>

                </div>

                
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 md:gap-10 text-[6px] md:text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] md:tracking-[0.3em] w-full px-4">
                   <span className="flex items-center gap-1 md:gap-2"><div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500 animate-pulse"></div> UI_SYNC_OK</span>
                   <span className="flex items-center gap-1 md:gap-2"><div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-secondary animate-pulse"></div> DATA_BIND_ACTIVE</span>
                   <span className="flex items-center gap-1 md:gap-2"><div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/30 animate-pulse"></div> DEPLOY_PENDING</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {mobileFeatures.map((feature, i) => (
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
{/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <section className="py-24 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Solutions for <span className="text-secondary">Every Industry</span></h2>
              <p className="text-muted max-w-2xl mx-auto">We specialize in developing high-performance applications tailored to the unique needs of diverse sectors.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "Social Media", icon: "👥" },
                { name: "Gaming Apps", icon: "🏆" },
                { name: "Productivity", icon: "📊" },
                { name: "Entertainment", icon: "▶️" },
                { name: "E-commerce", icon: "🛍️" },
                { name: "Health & Fitness", icon: "❤️" },
                { name: "Education", icon: "🎓" },
                { name: "Finance & Banking", icon: "🏦" },
                { name: "Travel & Navigation", icon: "🗺️" },
                { name: "Utility Apps", icon: "🔧" }
              ].map((category, i) => (
                <div key={i} className="glass-premium p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/5 transition-all">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-wider">{category.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-16 text-center uppercase tracking-[0.3em] opacity-50">Mobile Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {appStack.map((tech, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="text-5xl mb-4 drop-shadow-[0_0_10px_rgba(157,80,187,0.2)] grayscale transition-all group-hover:grayscale-0">
                    {tech.icon}

                  </div>
                  <span className="text-xs font-mono text-muted group-hover:text-secondary">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <section className="py-24">
          <div className="container-custom text-center">
            <div className="glass-premium p-12 rounded-[50px] text-center border border-primary/20 bg-primary/[0.02]">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl font-bold">Launch Your App Today</h2>

              <p className="text-muted text-lg leading-relaxed">
                Whether you're a startup looking for an MVP or an enterprise needing a complex mobile solution, our experts are ready to turn your vision into a featured app.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-4 px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-lg">
                    Build My App
                  </button>

                </Link>
                <Link to="/services">
                  <button className="border border-white/20 py-4 px-12 rounded-full font-bold hover:bg-white/5 transition-all text-lg">
                    Back to Services
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

export default AppDevelopment;