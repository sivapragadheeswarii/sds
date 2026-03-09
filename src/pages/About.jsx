import React from "react";
import Counter from "../components/Counter";
import BlueprintBackground from "../components/BlueprintBackground";
import JourneyVisual from "../components/JourneyVisual";
import { Link } from "react-router-dom";

const About = () => {
  const Values = [
    {
      title: "Innovation",
      desc: "We continuously explore new technologies and ideas to deliver modern, future-ready software solutions.",
      icon: "🚀"
    },
    {
      title: "Quality",
      desc: "Every solution we build follows strict quality standards to ensure reliability, performance, and security.",
      icon: "⭐"
    },
    {
      title: "Client Focus",
      desc: "Our clients are at the center of everything we do, and we tailor every solution to meet their unique needs.",
      icon: "👥"
    },
    {
      title: "Integrity",
      desc: "We believe in transparency, trust, and long-term relationships with our partners and clients.",
      icon: "👍"
    }
  ];

  return (
    <div className="relative min-h-screen grain">
      <BlueprintBackground />

      <div className="pt-24 pb-20 container-custom relative z-10">
        <section className="text-center max-w-[900px] mx-auto mb-32">
          <div className="overflow-hidden mb-8">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent animate-maskReveal leading-[0.9] mt-20">
              SDS <span className="text-primary">TECHNOLOGIES</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-blue-100/60 leading-relaxed max-w-xl mx-auto font-light animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            We engineer <span className="text-white font-medium">bespoke digital solutions</span> that transform complex business logic into seamless human experiences.
          </p>
        </section>

        <section className="grid lg:grid-cols-2 gap-20 items-center mb-40">




          <div className="space-y-10 animate-fadeInLeft">


            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-widest">A Symphony of <br />
              Code and Vision</h2>
            {/* <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div> */}




            {/* <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
              A Symphony of <br />
              <span className="text-primary">Code and Vision</span>
            </h2> */}
            <div className="space-y-6 text-blue-100/50 text-base md:text-lg leading-relaxed font-light">
              <p>
                SDS Technologies emerged from a singular obsession: to bridge the gap between complex
                enterprise requirements and elegant digital experiences.
              </p>
              <p>
                What began as a boutique dev lab has matured into a full-scale technology partner,
                powering digital transformation for visionaries worldwide.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.3em]">Global Standards</span>
            </div>
          </div>
          <div className="relative group animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
            <JourneyVisual />
          </div>
        </section>

        <section className="py-24 mb-40 relative px-4">
          <div className="absolute inset-0 bg-primary/[0.03] rounded-[3rem] glass-premium border-white/5 grain"></div>
          <div className="relative">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-widest">Our Milestones</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { end: 30, label: "Impact Projects", suffix: "+" },
                { end: 20, label: "Happy Clients", suffix: "+" },
                { end: 3, label: "Years Experience" },
                { end: 10, label: "Tech Verticals", suffix: "+" }
              ].map((stat, i) => (
                <div key={i} className="group animate-fadeInUp" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                  <Counter end={stat.end} label={stat.label} suffix={stat.suffix} />
                  <div className="mt-4 w-8 h-[1px] bg-primary/20 mx-auto group-hover:w-16 transition-all duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-40">
          {[
            { title: "Mission", desc: "We engineer limitless possibilities through innovative code, delivering solutions that define new standards.", color: "primary" },
            { title: "Vision", desc: "To be the global epicenter of digital intelligence, where technology meets humanity to create a better technical world.", color: "blue-500" }
          ].map((item, i) => (
            <div key={i} className="group p-10 rounded-3xl glass-premium transition-all duration-700 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${i * 0.2}s` }}>
              <h3 className={`text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3`}>
                <span className={`w-8 h-px bg-${item.color}`}></span>
                {item.title}
              </h3>
              <p className="text-blue-100/50 text-lg leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-40">
          <div className="text-center mb-24 animate-maskReveal">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">OUR <span className="text-primary">DNA</span></h2>
            <p className="text-blue-100/40 text-lg max-w-xl mx-auto font-light">
              The foundational principles that drive our engineering culture and client successes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Values.map((val, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2rem] glass-premium border-white/5 hover:border-primary/20 transition-all duration-700 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 text-primary">
                  {val.icon}
                </div>





                <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {val.title}
                </h4>
                <p className="text-blue-100/40 leading-relaxed font-light text-sm">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative p-16 md:p-24 rounded-[3rem] overflow-hidden text-center animate-blurIn">
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-3xl border border-white/10 grain"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-900/40 opacity-30"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none animate-maskReveal">
              Ready to  <span className="text-primary ">build your
                next big thing?</span>
            </h2>
            <p className="text-blue-100/60 text-lg mb-12 font-light max-w-lg mx-auto">
              Partner with SDS Technologies to engineer your digital masterpiece and take your vision to the next level.
            </p>
            <button className="group relative bg-accent-gradient text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-primary/40 overflow-hidden">
            <Link to="/contact"><span className="relative z-10 uppercase tracking-widest">Get Started Today</span></Link>
              
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;