import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const features = [
    {
      title: "Scalable Architecture",
      icon: "🏗️",
      desc: "We build web systems designed to handle massive traffic while maintaining peak performance."
    },
    {
      title: "SEO Optimized",
      icon: "🚀",
      desc: "Every line of code is written with search engines in mind, ensuring high visibility from launch."
    },
    {
      title: "Modern Tech Stack",
      icon: "⚡",
      desc: "Using MongoDB, Express.js, React, and Node.js to deliver fast, secure, and scalable web applications."
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
            <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 animate-fadeInUp">
              Frontend & Backend Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Next-Gen <br />
              <span className="gradient-text">Web Platforms</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-lg md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We engineer high-performance web applications that combine stunning UI with robust backend systems to drive your digital success.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="glass-premium p-10 rounded-3xl hover:-translate-y-4 transition-all duration-500 group border border-white/5">
                  <div className="text-5xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-dark transition-colors duration-500">
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
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-bold">From Concept to <span className="text-primary">Cloud</span></h2>
                <p className="text-muted text-lg leading-relaxed">
                  Our web development workflow is built on agile principles, ensuring rapid delivery without compromising on quality or security. Every project undergoes rigorous testing and optimization before it hits production.
                </p>


                <Link to="/services" className="inline-block border border-primary/30 py-4 px-10 rounded-full font-bold hover:bg-primary/5 transition-all text-primary">
                  EXPLORE OTHER SERVICES
                </Link>
              </div>
              <div className="flex-1 w-full flex justify-center">
                <div className="glass-premium p-8 rounded-[40px] transform rotate-3 hover:rotate-0 transition-transform duration-700 max-w-md">
                  <div className="aspect-square bg-dark/50 rounded-[30px] border border-white/10 flex items-center justify-center text-8xl animate-float">
                    ⚡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-20">
          <div className="container-custom">
            <div className="glass-premium p-12 rounded-[50px] text-center border border-primary/20 bg-primary/[0.02]">
              <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to launch your <br /> web presence?</h2>
              <p className="text-blue-100/40 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                From high-performance MVPs to enterprise-scale systems, we engineer the digital foundations of your business success.
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;