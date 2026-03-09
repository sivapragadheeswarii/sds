import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  const designServices = [
    {
      title: "Brand Identity",
      icon: "🎨",
      desc: "We craft unique logos, color palettes, and typography that define and elevate your brand's visual voice."
    },
    {
      title: "UI/UX Prototyping",
      icon: "💻",
      desc: "High-fidelity prototypes and interface designs that are as beautiful as they are functional."
    },
    {
      title: "Digital Creatives",
      icon: "🖼️",
      desc: "Engaging social media graphics, ad banners, and marketing materials that capture attention instantly."
    }
  ];

  const designTools = [
    { name: "Canva", icon: "🎨" },
    { name: "Adobe Photoshop", icon: "📸" },
    { name: "Adobe Illustrator", icon: "🖋️" },
    { name: "CorelDRAW", icon: "✏️" },
    { name: "Inkscape", icon: "🖋️" },
    { name: "Figma", icon: "🎨" }
  ];
  return (
    <div className="relative min-h-screen">
      <BlueprintBackground />
      <div className="relative z-10 text-white overflow-hidden pb-20 grain">


        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container-custom text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-medium mb-6 animate-fadeInUp">
              Visual Storytelling & Identity
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Design That <br />
              <span className="gradient-text">Speaks Louder</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-lg md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Our creative team blends art and technology to build memorable visual experiences that resonate with your audience and strengthen your market presence.
            </p>
          </div>
        </section>


        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-4xl glass-premium p-12 rounded-[50px] border border-white/10 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6 border border-primary/40 flex items-end p-4 font-mono text-[10px] opacity-40"></div>
                  <div className="absolute inset-4 bg-secondary/20 rounded-2xl transform -rotate-3 border border-secondary/40 flex items-end p-4 font-mono text-[10px] opacity-60"></div>
                  <div className="absolute inset-8 glass-premium rounded-2xl border border-white/20 shadow-2xl flex flex-col p-6 gap-4">
                    <div className="w-1/2 h-2 bg-primary/40 rounded-full"></div>
                    <div className="w-full h-8 bg-white/5 rounded-lg border border-white/10 flex items-center px-3">
                      <div className="w-3 h-3 rounded-full bg-accent-gradient"></div>
                    </div>
                    <div className="mt-auto flex justify-between">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                </div>


                <div className="flex flex-col gap-4 font-mono text-[11px] text-muted p-6 bg-dark/50 rounded-2xl border border-white/5">
                  <div className="flex justify-between gap-20">
                    <span>BORDER_RADIUS</span>
                    <span className="text-primary">24px</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COLOR_PRIMARY</span>
                    <span className="text-secondary">#9D50BB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FONTS_LOADED</span>
                    <span className="text-green-400">TRUE</span>
                  </div>
                  <div className="h-px bg-white/10 my-2"></div>
                  <div className="animate-pulse">_REFRESHING_VARIANTS...</div>
                </div>
              </div>


              <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,210,255,1)]"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </section>


        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designServices.map((service, i) => (
                <div key={i} className="glass-premium p-10 rounded-3xl hover:-translate-y-4 transition-all duration-500 group border border-white/5">
                  <div className="text-5xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-accent-gradient group-hover:text-dark transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-16 text-center uppercase tracking-[0.3em] opacity-50">Our Creative Arsenal</h2>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {designTools.map((tool, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110">
                  <div className="text-5xl mb-4 grayscale transition-all group-hover:grayscale-0 drop-shadow-[0_0_15px_rgba(157,80,187,0.3)]">
                    {tool.icon}
                  </div>
                  <span className="text-xs font-mono text-muted group-hover:text-secondary">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-24">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl font-bold">Elevate Your Brand Visuals</h2>
              <p className="text-muted text-lg leading-relaxed">
                First impressions matter. Let's create a visual identity that captures your brand's essence and leaves a lasting impact on your customers.
              </p>

              
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-4 px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-lg">
                    Start Designing
                  </button>
                </Link>


                <Link to="/services">
                  <button className="border border-white/20 py-4 px-12 rounded-full font-bold hover:bg-white/5 transition-all text-lg">
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

export default GraphicDesign;