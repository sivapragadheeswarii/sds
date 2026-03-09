import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const CustomSoftware = () => {
  const softwareFeatures = [
    {
      title: "Enterprise Solutions",
      icon: "🏢",
      desc: "We build robust, multi-layered software systems designed to solve complex business operations and scale globally."
    },
    {
      title: "Agile Development",
      icon: "🔄",
      desc: "Iterative development cycles that allow for flexibility, rapid prototyping, and continuous improvement."
    },
    {
      title: "Security First",
      icon: "🛡️",
      desc: "Security is built into every layer of our solutions. Following best practices from OWASP, we ensure your systems and sensitive data remain protected from modern cyber threats."
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
            <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 animate-fadeInUp">
              Architecture & Scalability
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Bespoke <br />
              <span className="gradient-text">Software Engineering</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-lg md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We design and develop custom software solutions that streamline business operations, improve efficiency, and help companies scale faster.
            </p>
          </div>
        </section>

      
        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-4xl glass-premium p-10 rounded-[50px] border border-white/10 relative overflow-hidden group">
              <div className="flex flex-col items-center gap-8 py-10">
              
                <div className="w-32 h-32 rounded-3xl bg-accent-gradient flex items-center justify-center text-5xl shadow-[0_0_50px_rgba(0,210,255,0.3)] animate-float">
                  ⚙️
                </div>
             
                <div className="grid grid-cols-3 gap-12 w-full max-w-lg">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 group-hover:bg-primary/10 transition-colors">
                    <div className="text-3xl">🗄️</div>
                    <span className="text-[10px] font-mono opacity-50">DATABASE</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 group-hover:bg-secondary/10 transition-colors">
                    <div className="text-3xl">⚡</div>
                    <span className="text-[10px] font-mono opacity-50">API LAYER</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 group-hover:bg-primary/10 transition-colors">
                    <div className="text-3xl">🛡️</div>
                    <span className="text-[10px] font-mono opacity-50">SECURITY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {softwareFeatures.map((feature, i) => (
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

      
        <section className="py-24">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl font-bold">Build Your Vision With Us</h2>
              <p className="text-muted text-lg leading-relaxed">
                From technical consulting to final deployment, we are your partner in engineering excellence. Let's discuss how we can build the software that powers your business.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact">
                  <button className="bg-accent-gradient py-4 px-12 rounded-full font-bold hover:scale-105 transition-all shadow-lg text-lg">
                    Request Consultation
                  </button>
                </Link>
                <Link to="/services">
                  <button className="border border-white/20 py-4 px-12 rounded-full font-bold hover:bg-white/5 transition-all text-lg">
                    Return to Services
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