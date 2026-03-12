import React from 'react';

const HeroVisual = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none select-none mt-40" style={{ perspective: '3000px' }}>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse-slow"></div>


            <div className="relative w-full h-full flex items-center justify-center shrink-0" 
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(55deg) rotateZ(-25deg) translateX(50px)' }}>


                <div className="absolute w-full max-w-[450px] aspect-video glass-premium border-primary/30 rounded-3xl translate-z-40 -translate-y-32 flex flex-col p-8 shadow-[0_50px_100px_rgba(0,0,0,0.5),0_0_50px_rgba(59,130,246,0.2)] animate-float-slow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="space-y-1">
                            <span className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">System.Intelligence</span>
                            <div className="h-1 w-20 bg-primary/40 rounded-full"></div>
                        </div>


                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-3 gap-3">


                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <div className="w-6 h-1 bg-white/10 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-accent-gradient w-3/4 animate-shimmer"></div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-xs text-primary font-bold">AI</div>
                        <div className="flex-1 h-0.5 bg-white/5 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#3b82f6]"></div>
                        </div>
                    </div>
                </div>


                <div className="absolute w-full max-w-[480px] aspect-video border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl translate-z-20 -translate-y-12 shadow-2xl animate-float" style={{ animationDelay: '-1s' }}>
                    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-10 grid-rows-10">
                            {[...Array(100)].map((_, i) => (
                                <div key={i} className="border-[0.5px] border-white/10"></div>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 flex flex-col h-full justify-between">
                        <span className="text-[9px] text-white/30 font-bold uppercase tracking-[0.4em]">Core_Logic</span>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">⚡</div>
                            <div className="flex-1 space-y-2 py-2">
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                
                                    <div className="h-full bg-indigo-500/40 w-1/2 animate-progress-bar"></div>
                                </div>
                                <div className="h-1 w-2/3 bg-white/5 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="absolute w-full max-w-[510px] aspect-video border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-3xl translate-z-0 translate-y-8 shadow-xl animate-float-slow" style={{ animationDelay: '-2s' }}>
                    <div className="absolute top-4 left-6 text-[8px] text-white/20 font-mono tracking-widest">ENCRYPTED_DATA_SECTOR</div>
                    <div className="absolute bottom-6 right-8 w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-primary/10 border-dashed animate-spin-slow"></div>
                        <div className="absolute w-2 h-2 rounded-full bg-primary/40"></div>
                    </div>
                </div>

                <div className="absolute w-full max-w-[550px] aspect-video border-t border-white/5 bg-gradient-to-b from-white/5 to-transparent rounded-3xl -translate-z-20 translate-y-28 opacity-60">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0b1e_100%)]"></div>
                </div>


                <div className="absolute h-80 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-32 -translate-y-20 blur-[1px]"></div>
                <div className="absolute h-60 w-px bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent translate-x-40 -translate-y-10 blur-[1px]"></div>


                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full blur-[1px] animate-particle"
                        style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    ></div>
                ))}
            </div>


            <div className="absolute bottom-20 -left-10 w-64 glass-premium border-white/5 rounded-xl p-4 shadow-2xl animate-fadeInUp animate-float-slow select-none opacity-80" style={{ animationDelay: '0.5s' }}>
                <div className="flex gap-1.5 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                </div>
                <div className="font-mono text-[9px] space-y-1.5">
                    <div className="text-emerald-400/80">$ initialize system</div>
                    <div className="text-white/40">Searching core modules... [OK]</div>
                    <div className="text-white/40">Binding API endpoints... [LIVE]</div>
                    <div className="flex items-center gap-1 text-primary">
                        <span>$</span>
                        <span className="w-1 h-3 bg-primary animate-pulse"></span>
                    </div>
                </div>
            </div>


            <div className="absolute top-20 right-0 glass-premium border-white/5 px-4 py-2 rounded-full flex items-center gap-3 animate-fadeInRight shadow-xl" style={{ animationDelay: '1s' }}>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Global Cloud Active</span>
            </div>
        </div>
    );
};

export default HeroVisual;


