import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const SEO = () => {
  const seoFeatures = [
    {
      title: "Data-Driven Strategy",
      icon: "📊",
      desc: "We use advanced analytics and keyword research to craft strategies that align with your business goals."
    },
    {
      title: "Technical SEO",
      icon: "⚙️",
      desc: "Optimizing site architecture, speed, and mobile responsiveness to satisfy search engine algorithms."
    },
    {
      title: "Content Growth",
      icon: "📝",
      desc: "Creating high-value content that attracts organic traffic and builds authority in your industry."
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
            <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 animate-fadeInUp">
              Organic Growth & ROI
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Mastering the <br />
              <span className="gradient-text">Search Landscape</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-lg md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We don't just increase traffic; we drive qualified leads and boost rankings using proven, white-hat SEO techniques and data-driven marketing.
            </p>
          </div>
        </section>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-4xl glass-premium p-8 rounded-[40px] border border-white/10 relative group overflow-hidden">
              <div className="flex items-end justify-between h-64 gap-2">
                {[40, 60, 45, 80, 70, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-accent-gradient rounded-t-lg transition-all duration-1000 group-hover:opacity-100 opacity-60" style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }}></div>
                ))}
              </div>
              <div className="mt-8 flex justify-between text-muted font-mono text-xs uppercase tracking-widest">
                <span>Research</span>
                <span>Optimization</span>
                <span>Growth</span>
                <span>Dominance</span>
              </div>
             
              <div className="absolute top-10 right-10 flex gap-4">
                <div className="bg-primary/20 p-2 rounded-lg border border-primary/30 text-[10px] animate-float">+140% Traffic</div>
                <div className="bg-secondary/20 p-2 rounded-lg border border-secondary/30 text-[10px] animate-float" style={{ animationDelay: '1s' }}>#1 Rankings</div>
              </div>
            </div>
          </div>
        </section>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seoFeatures.map((feature, i) => (
                <div key={i} className="glass-premium p-10 rounded-3xl hover:-translate-y-4 transition-all duration-500 group border border-white/5">
                  <div className="text-5xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-accent-gradient group-hover:text-dark transition-colors duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {feature.desc}
                  </p>
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
            <div className="glass-premium p-12 rounded-[50px] text-center border border-primary/20 bg-primary/[0.02]">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl font-bold">Ready to Dominate Search?</h2>
              <p className="text-muted text-lg leading-relaxed">
                Unlock the full potential of your business with our data-backed SEO and digital marketing services. Let's build your organic empire together.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-4 px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-lg">
                    Get Free Audit
                  </button>
                </Link>
                <Link to="/services">
                  <button className="border border-white/20 py-4 px-12 rounded-full font-bold hover:bg-white/5 transition-all text-lg">
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