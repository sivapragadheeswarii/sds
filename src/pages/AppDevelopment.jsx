import React from "react";
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";

const AppDevelopment = () => {
  const mobileFeatures = [
    {
      title: "Cross-Platform Power",
      icon: "📱",
      desc: "One codebase for iOS and Android, ensuring consistent experience and faster time-to-market."
    },
    {
      title: "Native Performance",
      icon: "⚙️",
      desc: "Optimized architectures that provide seamless, lag-free performance indistinguishable from native apps."
    },
    {
      title: "User-Centric UX",
      icon: "✨",
      desc: "Intuitive mobile interfaces designed to maximize user engagement and retention."
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
            <span className="inline-block py-1 px-4 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-medium mb-6 animate-fadeInUp">
              iOS & Android Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Premium <br />
              <span className="gradient-text">Mobile Experiences</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-lg md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              We build high-performance mobile applications that empower your business to reach users wherever they are, on any device.
            </p>
          </div>
        </section>
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="py-12">
          <div className="container-custom flex justify-center">
            <div className="relative w-full max-w-sm aspect-[9/16] glass-premium rounded-[3rem] border-4 border-white/10 p-2 shadow-2xl animate-float">
              <div className="w-full h-full bg-dark rounded-[2.5rem] overflow-hidden flex flex-col p-6 gap-6 relative">

                <div className="flex justify-between items-center w-full">
                  <div className="w-8 h-8 rounded-full bg-accent-gradient"></div>
                  <div className="flex gap-1">
                    
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  </div>
                </div>


                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-muted uppercase font-mono mb-1">TOTAL_REVENUE</div>
                  <div className="text-2xl font-black text-primary">$42,910.00</div>
                  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-gradient animate-growLine" style={{ width: '75%' }}></div>
                  </div>
                </div>


                <div className="flex-1 flex items-end gap-1 px-2">
                  {[30, 50, 40, 80, 60, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-md animate-growLine" style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }}></div>
                  ))}
                </div>


                <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center p-6 cursor-pointer">
                  <div className="font-mono text-[8px] text-green-400 leading-tight">
                    <code>
                      class App {'{'}
                      &nbsp;&nbsp;render() {'{'}
                      &nbsp;&nbsp;&nbsp;&nbsp;return {'<View />'};
                      &nbsp;&nbsp;{'}'}
                      {'}'}
                    </code>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-4 w-full">
                  <div className="h-2 w-full bg-white/5 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-white/5 rounded-full"></div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>


        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {mobileFeatures.map((feature, i) => (
                <div key={i} className="glass-premium p-10 rounded-3xl hover:-translate-y-4 transition-all duration-500 group border border-white/5">
                  <div className="text-5xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
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