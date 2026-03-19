import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const EcommerceManagement = () => {
  const ecommerceFeatures = [
    {
      id: 'ECOM_OPEN_01',
      title: "Account Setup & Launch",
      icon: "🔑",
      desc: "End-to-end seller registration, GST/Business verification, and brand registry across all major marketplaces.",
      metric: 'ACCESS_GRANTED'
    },
    {
      id: 'ECOM_CATALOG_02',
      title: "Cataloging & Taxonomy",
      icon: "📋",
      desc: "SEO-optimized product listings, keyword-rich descriptions, and accurate marketplace category mapping.",
      metric: 'LIST_SYNC'
    },
    {
      id: 'ECOM_MAINTAIN_03',
      title: "Store Maintenance",
      icon: "⚙️",
      desc: "Daily inventory tracking, seamless order processing, returns management, and account health monitoring.",
      metric: 'OPS_ACTIVE'
    },
    {
      id: 'ECOM_GROWTH_04',
      title: "PPC & Rank Boosting",
      icon: "🚀",
      desc: "Data-driven sponsored advertising and organic ranking strategies to maximize product visibility and ROI.",
      metric: 'SALES_MAX'
    }
  ];

  const platforms = [
    { name: 'Amazon', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-[120%] object-contain brightness-0 invert" /> },
    { name: 'Flipkart', icon: <img src="https://logosmarken.com/wp-content/uploads/2020/11/Flipkart-Emblem-650x366.png" alt="Flipkart" className="h-full object-contain scale-[1.5]" /> },
    { name: 'Shopify', icon: <img src="https://www.citypng.com/public/uploads/preview/-11597191865bgutdi1fsu.png" alt="Shopify" className="h-full object-contain" /> },
    { name: 'WooCommerce', icon: <img src="https://www.emizainc.com/wp-content/uploads/2021/02/Screenshot-2021-02-09-at-6.25.05-PM@2x.png" alt="WooCommerce" className="h-full object-contain scale-[2] md:scale-[2.5]" /> },
    { name: 'Meesho', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png" alt="Meesho" className="h-full object-contain scale-[1.5]" /> },
    { name: 'Myntra', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png" alt="Myntra" className="h-[120%] object-contain" /> },
    { name: 'AJIO', icon: <img src="https://cdn.brandfetch.io/idr5xgDFc2/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1740602852553" alt="AJIO" className="h-[120%] object-contain" /> },
    { name: 'BigBasket', icon: <img src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*kqElrV8y9kt64NDnfwqf6g.png" alt="BigBasket" className="h-full object-contain scale-[1.4]" /> },
 
 { name: 'JioMart', icon: <img src="https://vectorseek.com/wp-content/uploads/2023/06/JioMart-beta-Logo-Vector-300x300.jpg " alt="JioMart" className="h-full object-contain scale-[1.4]" /> }
 
 ]; 

  return (
    <div className="relative min-h-screen">
      <BlueprintBackground />
     <div className="relative z-10 text-white overflow-hidden pb-20 grain">

        
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-custom text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] md:text-sm font-medium mb-6 animate-fadeInUp">
              E-Commerce Seller Account Management
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Dominate The <br />
              <span className="gradient-text">Digital Marketplace</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-base md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We handle everything from account opening to daily maintenance and targeted ad campaigns. Focus on your product, we will handle the platform algorithms.
            </p>
          </div>
        </section>

      
        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-4xl glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] border border-white/10 relative overflow-hidden group bg-slate-900/40 backdrop-blur-2xl shadow-2xl">
              <div className="relative aspect-[4/5] md:aspect-[21/9] w-full flex items-center justify-center">
              
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 300">
                  <defs>
                    <pattern id="grid-dots-ecom" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="var(--primary)" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-dots-ecom)" />
                  <g className="stroke-primary/10 fill-none stroke-px">
                    <path d="M 0 150 L 800 150" />
                    <path d="M 200 0 L 200 300" />
                    <path d="M 400 0 L 400 300" />
                    <path d="M 600 0 L 600 300" />
                  </g>
                </svg>

                <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-10 items-center">
                  <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 text-center group/metric hover:border-primary/30 transition-all backdrop-blur-md">
                    <div className="text-[10px] font-mono text-primary/60 mb-2 uppercase tracking-widest">ONBOARDING</div>
                    <div className="text-2xl md:text-3xl font-black text-white">100%</div>
                    <div className="mt-2 md:mt-3 flex gap-1 justify-center">
                      <div className="w-1 h-3 bg-primary/40 animate-pulse"></div>
                      <div className="w-1 h-3 bg-primary/40 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-3 bg-primary/40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>

                  <div className="md:col-span-2 relative flex flex-col items-center">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] bg-primary/5 border border-primary/20 flex flex-center items-center justify-center relative animate-pulse shadow-[0_0_50px_rgba(0,210,255,0.1)]">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-primary/10 border-dashed animate-spin-slow absolute"></div>
                      <div className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl mb-2">🛒</span>
                        <span className="text-[6px] md:text-[8px] font-mono text-primary tracking-widest uppercase">E_Commerce_Sync</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 text-center group/metric hover:border-primary/30 transition-all backdrop-blur-md">
                    <div className="text-[10px] font-mono text-primary/60 mb-2 uppercase tracking-widest">SALES_GROWTH</div>
                    <div className="text-2xl md:text-3xl font-black text-primary">3.5x</div>
                    <div className="mt-1 text-[8px] font-mono text-green-500 uppercase tracking-widest animate-pulse">OPTIMIZED</div>
                  </div>
                </div>

               
                <div className="absolute bottom-4 md:bottom-6 right-6 md:right-10 flex flex-wrap justify-end gap-3 md:gap-6 text-[6px] md:text-[8px] font-mono text-white/30 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                  <span>API_SYNC: ACTIVE</span>
                  <span>STOCK_PULL: AUTOMATED</span>
                  <span>STATUS: HEALTHY</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container-custom">
            <div className="mb-12 md:mb-20 text-center px-4">
              <h2 className="section-title text-3xl md:text-5xl font-black">How We <span className="gradient-text">Manage</span> It</h2>
            </div>
            <div className="space-y-32">
              <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 px-4">
                <div className="flex-1 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                  <span className="text-primary text-[10px] md:text-xs font-mono tracking-widest uppercase">Phase 1: Registration</span>
                  <h3 className="text-3xl md:text-4xl font-bold">Account Opening & Verification</h3>
                  <p className="text-muted text-sm md:text-base leading-relaxed">
                    Opening a seller account is just the beginning. We manage the entire onboarding pipeline including business details structuring, GST documentation, and brand registry protocols to ensure your store goes live without any policy violations.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 uppercase text-xs tracking-widest font-bold">Documentation & KYC</div>
                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 uppercase text-xs tracking-widest font-bold">Brand Verification</div>
                  </div>
                </div>
                <div className="flex-1 order-1 lg:order-2 relative group w-full max-w-lg mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                  <div className="glass-premium p-4 rounded-[40px] transform rotate-3 transition-transform group-hover:rotate-0 duration-700">
                    <div className="aspect-video bg-dark/50 rounded-[30px] border border-white/10 overflow-hidden flex items-center justify-center">
                      <div className="text-6xl animate-float">🆔</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 px-4">
                <div className="flex-1 order-1 lg:order-2 relative group w-full max-w-lg mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-secondary/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                  <div className="glass-premium p-4 rounded-3xl md:rounded-[40px] transform -rotate-3 transition-transform group-hover:rotate-0 duration-700">
                    <div className="aspect-video bg-dark/50 rounded-2xl md:rounded-[30px] border border-white/10 overflow-hidden flex items-center justify-center">
                      <div className="text-6xl animate-float" style={{ animationDelay: '1s' }}>📈</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                  <span className="text-secondary text-[10px] md:text-xs font-mono tracking-widest uppercase">Phase 2: Operations</span>
                  <h3 className="text-3xl md:text-4xl font-bold">Daily Maintenance & Optimization</h3>
                  <p className="text-muted text-sm md:text-base leading-relaxed">
                     An inactive store leads to rank drops. We maintain daily operations, syncing inventory across platforms, responding to buyer queries, updating rich media content, and running aggressive but cost-effective PPC ads.
                  </p>
                  <ul className="space-y-4 text-left inline-block mx-auto lg:mx-0">
                    <li className="flex items-center gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm md:text-base">01</div>
                      <span className="text-sm md:text-base">Inventory Synchronization</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm md:text-base">02</div>
                      <span className="text-sm md:text-base">PPC Bid Adjustments</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm md:text-base">03</div>
                      <span className="text-sm md:text-base">Account Health Monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

   
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ecommerceFeatures.map((feature, i) => (
                <div 
                  key={i} 
                  className="stagger-reveal animate-stagger"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="glass-premium rounded-3xl p-0 overflow-hidden border border-white/5 hover:border-primary/40 shadow-2xl transition-all duration-700 card-3d bg-slate-900/40 backdrop-blur-xl group h-full">
                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-black/20">
                      <span className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">{feature.id}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-primary animate-pulse rounded-full"></div>
                        <span className="text-[9px] font-mono text-white/30 tracking-tighter uppercase">{feature.metric}</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="text-4xl mb-6 bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-primary/20 transition-colors duration-500">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-16 text-center uppercase tracking-[0.3em] opacity-50">Marketplaces We Manage</h2>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center">
              {platforms.map((platform, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="h-8 md:h-12 mb-6 transition-all duration-500 drop-shadow-[0_0_15px_rgba(0,210,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(0,210,255,0.4)] flex items-center justify-center">
                    {platform.icon}
                  </div>
                  <span className="text-sm font-mono text-muted group-hover:text-primary font-bold tracking-wider">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

    
        <section className="py-24">
          <div className="container-custom text-center">
            <div className="glass-premium p-8 md:p-12 rounded-3xl md:rounded-[50px] text-center border border-primary/20 bg-primary/[0.02]">
              <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold">Start Selling Globally</h2>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  Ready to launch your e-commerce store or optimize your existing seller accounts? Let our experts build your marketplace empire.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <Link to="/contact">
                    <button className="bg-accent-gradient py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-base md:text-lg">
                      Start Your Store
                    </button>
                  </Link>
                  <Link to="/services">
                    <button className="border border-white/20 py-3 md:py-4 px-8 md:px-12 rounded-full font-bold hover:bg-white/5 transition-all text-base md:text-lg">
                      View Other Services
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

export default EcommerceManagement;
