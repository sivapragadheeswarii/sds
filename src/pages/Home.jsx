import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedTitle from '../components/AnimatedTitle';
import EnterpriseCodeVisual from '../components/EnterpriseCodeVisual';
import HeroVisual from '../components/HeroVisual';
import BlueprintBackground from '../components/BlueprintBackground';
import { Link } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen grain">
            <BlueprintBackground />

            <div className="pb-20 relative z-10 ">
                <section className="min-h-[90vh] flex items-center relative overflow-x-clip overflow-y-visible">
                    <div className="absolute top-0 right-0 w-full h-full -z-[1] bg-[radial-gradient(circle_at_top_right,_#1a0b3b,_transparent_60%)]">
                        <div className="absolute w-[500px] h-[500px] bg-accent-gradient blur-[120px] rounded-full opacity-10 -z-[1] -top-[100px] -right-[100px] animate-float"></div>
                    </div>

                    <div className="container-custom w-full">
                        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
                            <div className="max-w-[900px] z-10">
                                <div className="inline-block px-4 py-1.5 mb-10 text-[11px] font-semibold tracking-[0.4em] text-primary underline decoration-primary/30 underline-offset-8 uppercase animate-fadeIn ">
                                    Legacy since 2021
                                </div>

                                <div className="mb-8 overflow-visible">
                                    <AnimatedTitle text="SDS TECHNOLOGIES" />
                                </div>

                                <p className="max-w-[650px] text-lg md:text-xl text-blue-100/60 leading-relaxed mb-12 font-light animate-fadeIn" style={{ animationDelay: '0.0s' }}>
                                    Architecting <span className="text-white font-medium">elite digital ecosystems</span> through precision engineering and creative intelligence. We transform complexity into seamless performance.
                                </p>

                                <div className="flex flex-wrap gap-6 animate-fadeIn" style={{ animationDelay: '0.0s' }}>
                                    <button
                                        className="group relative bg-accent-gradient hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30"
                                        onClick={() => navigate('/services')}
                                    >
                                        <span className="relative z-10 uppercase tracking-widest">Explore Services</span>
                                        <div className="absolute inset-0 bg-white/10 rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                                    </button>

                                    <button
                                        className="glass-premium border-white/5 text-white py-4 px-10 rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-300 uppercase tracking-widest"
                                        onClick={() => navigate('/projects')}
                                    >
                                        View Projects
                                    </button>
                                </div>
                            </div>

                            <div className="hidden lg:block relative h-full min-h-[500px] animate-fadeIn">
                                <HeroVisual />
                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------------------------------------------------------------------------------------------- */}



                </section>


                <section className="py-32 container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10 animate-fadeInLeft">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                                Engineering for <br />
                                <span className="text-primary">Modern Enterprises</span>
                            </h2>
                            <div className="space-y-6 text-blue-100/50 text-lg leading-relaxed font-light">
                                <p>
                                    At SDS Technologies, we create purpose-driven software systems designed specifically
                                    around your organization’s structure and operational needs.
                                </p>
                                <p>
                                    From advanced enterprise applications to intelligent automation systems,
                                    we build technology that grows and evolves with your business.
                                </p>
                            </div>

                            {/* <div className="flex items-center gap-4 pt-4">
                                <div className="w-12 h-px bg-primary"></div>
                                <span className="text-[11px] font-bold text-primary uppercase tracking-[0.3em]">Precision Driven</span>
                            </div> */}
                        </div>

                        <div className="relative group animate-fadeInRight">
                            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
                            <div className="glass-premium rounded-[3rem] p-8">
                                <EnterpriseCodeVisual />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/[0.03] grain"></div>
                    <div className="container-custom relative z-10 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-widest animate-maskReveal">
                            Trusted Digital Excellence <span className="text-primary"></span>
                        </h2>

                        <p className="text-lg text-blue-100/50 leading-relaxed mb-12 font-light">
                            We combine professional web design and custom software development to deliver powerful
                            digital solutions for businesses across India. Creativity, technology, and strategy meet here.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
                            {[
                                "Scalable enterprise systems built for the future.",
                                "Custom web platforms designed to perform and adapt."
                            ].map((text, i) => (
                                <div key={i} className="glass-premium p-8 rounded-2xl border-white/5 flex gap-4 items-start animate-fadeInUp" style={{ animationDelay: `${i * 0.2}s` }}>
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <p className="text-blue-100/60 font-light italic">{text}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            className="group relative bg-accent-gradient text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-primary/40 overflow-hidden"
                            onClick={() => navigate('/contact')}
                        >
                            <span className="relative z-10 uppercase tracking-widest italic">Get Started Today</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
