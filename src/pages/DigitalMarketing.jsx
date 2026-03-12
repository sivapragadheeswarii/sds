import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const marketingFeatures = [
    {
      title: "Social Media Dominance",
      icon: "📢",
      desc: "Strategic social campaigns that build community, increase brand awareness, and drive engagement."
    },
    {
      title: "ROI-Focused PPC",
      icon: "💰",
      desc: "Precision-targeted paid advertising that maximizes your budget and delivers measurable results."
    },
    {
      title: "Content Excellence",
      icon: "✍️",
      desc: "Compelling storytelling and multimedia content that resonates with your audience and builds trust."
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
            <span className="inline-block py-1 px-4 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-medium mb-6 animate-fadeInUp">
              Precision Marketing & Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Scale Your <br />
              <span className="gradient-text">Digital Presence</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-lg md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We combine data analytics with creative strategy to deliver high-impact digital marketing solutions that convert visitors into loyal customers.
            </p>
          </div>
        </section>

{/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-4xl glass-premium p-10 rounded-[50px] border border-white/10 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row items-center gap-12">

                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <div className="h-12 bg-primary/20 rounded-xl border border-primary/30 flex items-center justify-center text-[10px] font-mono tracking-widest group-hover:bg-primary/30 transition-all">AWARENESS (100%)</div>
                  <div className="h-12 bg-primary/15 rounded-xl border border-primary/20 flex items-center justify-center text-[10px] font-mono tracking-widest w-[80%] mx-auto">INTEREST (60%)</div>
                  <div className="h-12 bg-primary/10 rounded-xl border border-primary/10 flex items-center justify-center text-[10px] font-mono tracking-widest w-[40%] mx-auto">DECISION (20%)</div>
                  <div className="h-12 bg-primary/10 rounded-xl border border-primary/15 flex items-center justify-center text-[10px] font-mono tracking-widest w-[20%] mx-auto">ACTION (5%)</div>
                  {/* <div className="h-12 bg-primary/05 rounded-xl flex items-center justify-center text-[10px] font-mono tracking-widest w-[15%] mx-auto shadow-[0_0_20px_rgba(0,210,255,0.4)]">ACTION (5%)</div> */}
                </div>

                <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <div className="text-2xl font-bold gradient-text">+250%</div>
                    <div className="text-[10px] text-muted uppercase mt-1">Lead Gen</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <div className="text-2xl font-bold text-primary">4.8x</div>
                    <div className="text-[10px] text-muted uppercase mt-1">ROAS</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center col-span-2">
                    <div className="text-xl font-mono text-green-400">ACTIVE_REMARKETING...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {marketingFeatures.map((feature, i) => (
                <div key={i} className="glass-premium p-10 rounded-3xl hover:-translate-y-4 transition-all duration-500 group border border-white/5">
                  <div className="text-5xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-accent-gradient transition-colors duration-500">
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
            <div className="glass-premium p-12 rounded-[50px] text-center border border-primary/20 bg-primary/[0.02]">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl font-bold">Grow Your ROI Today</h2>
              <p className="text-muted text-lg leading-relaxed">
                Stop guessing and start growing. Our team will help you build a marketing engine that consistently delivers results and scales your business.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-4 px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-lg">
                    Book Strategy Session
                  </button>
                </Link>
                <Link to="/services">
                  <button className="border border-white/20 py-4 px-12 rounded-full font-bold hover:bg-white/5 transition-all text-lg">
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