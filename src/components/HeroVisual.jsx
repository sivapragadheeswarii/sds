import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaRocket, FaGlobe, FaCode, FaChartBar } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiFramer } from 'react-icons/si';

const HeroVisual = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 30;
            const y = (clientY / innerHeight - 0.5) * 30;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-[2500px] overflow-visible ml-20">
            {/* Background Glows & Environment */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full animate-pulse opacity-40"></div>
            
            {/* Dark Floor / Reflection Surface */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-gradient-to-t from-black/40 to-transparent blur-3xl opacity-60"></div>

            {/* The 3D Laptop Meta-Container */}
            <div 
                className="relative z-10 w-full max-w-[700px] transition-transform duration-700 ease-out transform-gpu animate-laptop-3d"
                style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${10 - mousePos.y * 0.5}deg) rotateY(${-10 + mousePos.x * 0.5}deg)`
                }}
            >
                {/* 1. Laptop Screen (Top Lid) */}
                <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-t-2xl border-x-[10px] border-t-[10px] border-slate-800 shadow-2xl overflow-hidden" 
                     style={{ transformStyle: 'preserve-3d' }}>
                    
                    <div className="absolute inset-0 border border-white/5 rounded-t-xl z-20 pointer-events-none"></div>
                    
                    {/* The Display Area */}
                    <div className="absolute inset-2 bg-[#050508] rounded-lg overflow-hidden flex flex-col">
                        
                        {/* Status Bar */}
                        <div className="h-6 w-full bg-white/[0.03] border-b border-white/5 flex items-center justify-between px-3">
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 opacity-60"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-60"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-60"></div>
                            </div>
                            <div className="text-[7px] text-white/30 tracking-[0.3em] font-black">SDS_WORKSTATION_PRO</div>
                            <div className="text-[7px] text-primary/60 font-bold">LIVE_SESSION</div>
                        </div>

                        {/* Screen Content: Live Metrics Visualization */}
                        <div className="flex-1 p-5 overflow-hidden relative">
                            <div className="grid grid-cols-12 gap-4 h-full">
                                <div className="col-span-1 space-y-3 pt-2 opacity-30">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-full aspect-square bg-white/10 rounded-md"></div>
                                    ))}
                                </div>
                                
                                <div className="col-span-11 space-y-4">
                                    <div className="flex gap-4 h-24">
                                        <div className="flex-1 glass-premium rounded-xl p-3 border-white/5 bg-white/[0.01]">
                                            <div className="text-[7px] text-white/30 mb-2 uppercase tracking-widest">Network Performance</div>
                                            <div className="flex items-end gap-1 h-10">
                                                {[...Array(15)].map((_, i) => (
                                                    <div key={i} className="flex-1 bg-primary/40 rounded-t-[1px]" style={{ height: `${Math.random() * 100}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-24 glass-premium rounded-xl p-3 border-white/5 bg-white/[0.01] flex flex-col justify-center items-center">
                                            <div className="text-[7px] text-white/30 mb-1">HEALTH</div>
                                            <div className="text-xl font-black text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.3)]">99%</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 h-full pb-10">
                                        <div className="glass-premium rounded-xl p-4 border-white/5 bg-white/[0.01] font-mono text-[8px] text-primary/60 overflow-hidden leading-relaxed">
                                            <div className="text-white/40 mb-2">// sds_init_handshake.js</div>
                                            {[
                                                "const node = await sds.connect();",
                                                "if (node.secure) {",
                                                "  global.sync(protocol_v2);",
                                                "  console.log('Core Active');",
                                                "}"
                                            ].map((line, i) => (
                                                <div key={i} className="h-3 overflow-hidden whitespace-nowrap">{line}</div>
                                            ))}
                                            <div className="w-1 h-3 bg-primary/40 animate-pulse inline-block"></div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            {[
                                                { label: "Deployment", val: "ACTIVE", color: "text-blue-400" },
                                                { label: "Security", val: "ULTRA_SECURE", color: "text-emerald-400" },
                                                { label: "Cloud Node", val: "SYNCED", color: "text-purple-400" }
                                            ].map((m, i) => (
                                                <div key={i} className="glass-premium flex-1 rounded-lg px-4 flex items-center justify-between border-white/5 bg-white/[0.01]">
                                                    <span className="text-[7px] text-white/30 uppercase">{m.label}</span>
                                                    <span className={`text-[8px] font-black ${m.color}`}>{m.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                            <div className="absolute top-0 h-full w-full bg-white/[0.02] animate-screen-glimmer"></div>
                        </div>
                    </div>
                </div>

                {/* 2. Laptop Keyboard Body (Bottom Case) */}
                <div className="relative w-full h-24 bg-slate-800 border-x-4 border-b-8 border-slate-700 rounded-b-3xl shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
                     style={{ transform: 'rotateX(-65deg) translateY(-30px)', transformOrigin: 'top center', transformStyle: 'preserve-3d' }}>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-14 bg-white/[0.02] border border-white/5 rounded-lg"></div>
                    
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4/5 h-16 grid grid-cols-12 gap-1.5 opacity-40">
                        {[...Array(36)].map((_, i) => (
                            <div key={i} className="bg-white/10 rounded-[1px] animate-key-glow" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                    </div>

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-2xl -z-10"></div>
                </div>
            </div>

            {/* Orbiting App Shards & Tech Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
                <div className="absolute top-10 left-0 md:left-10 lg:left-20 animate-window-drift z-20">
                    <div className="glass-premium p-6 rounded-2xl border-white/10 shadow-2xl backdrop-blur-3xl hover:border-primary/50 transition-all cursor-default bg-slate-900/40">
                        <FaChartBar className="text-primary text-3xl mb-4" />
                        <div className="text-xl font-black text-white">99.9%</div>
                        <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Uptime Matrix</div>
                    </div>
                </div>

                <div className="absolute bottom-20 right-0 md:right-10 lg:right-20 animate-window-drift z-20" style={{ animationDelay: '-4s' }}>
                    <div className="glass-premium p-6 rounded-2xl border-white/10 shadow-2xl backdrop-blur-3xl hover:border-secondary/50 transition-all cursor-default bg-slate-900/40">
                        <FaShieldAlt className="text-secondary text-3xl mb-4" />
                        <div className="text-xl font-black text-white">Encrypted</div>
                        <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Neural Shield</div>
                    </div>
                </div>

                <div className="absolute top-1/4 right-32 animate-pulse transition-opacity delay-300 opacity-60">
                    <SiReact className="text-primary text-4xl" />
                </div>
                <div className="absolute bottom-1/4 left-32 animate-pulse transition-opacity delay-700 opacity-60">
                    <SiNodedotjs className="text-green-500 text-4xl" />
                </div>
            </div>

            <div className="absolute bottom-0 right-[15%] glass-premium px-6 py-3 rounded-full border-white/10 flex items-center gap-4 animate-fadeIn shadow-2xl z-40 transform-gpu hover:bg-white/5 transition-all">
                <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-[10px] font-black text-white/60 tracking-[0.2em] uppercase italic">Secure_Environment: Identified</span>
            </div>
        </div>
    );
};

export default HeroVisual;
