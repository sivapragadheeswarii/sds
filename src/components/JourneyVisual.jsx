import React from 'react';

const JourneyVisual = () => {
    const steps = [
        { label: "INIT", status: "COMPLETED", color: "bg-green-500" },
        { label: "BUILD", status: "COMPLETED", color: "bg-green-500" },
        { label: "DEPLOY", status: "ACTIVE", color: "bg-primary animate-pulse" },
        { label: "SCALE", status: "PENDING", color: "bg-white/10" }
    ];

    return (
        <div className="relative h-[450px] w-full bg-slate-950/40 rounded-[3rem] overflow-hidden border border-white/5 group select-none pointer-events-none">
           
            <div className="absolute inset-0 opacity-[0.03] font-mono text-[10px] text-primary grid grid-cols-12 gap-2 p-4">
                {[...Array(144)].map((_, i) => (
                    <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}>
                        {Math.floor(Math.random() * 2)}
                    </div>
                ))}
            </div>

          
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                <div className="w-full max-w-2xl relative">

                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary/50 to-transparent w-full animate-pipeline-flow"></div>
                    </div>

               
                    <div className="relative flex justify-between">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center gap-6 relative z-10">
                              
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center glass-premium border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-110`}>
                                    <div className={`w-3 h-3 rounded-full ${step.color} shadow-[0_0_15px_currentColor]`}></div>
                                </div>

                             
                                <div className="text-center">
                                    <span className="block text-[10px] font-black text-white/40 tracking-[0.2em] mb-1">{step.label}</span>
                                    <span className={`text-[8px] font-mono tracking-widest ${step.status === 'ACTIVE' ? 'text-primary' : 'text-white/20'}`}>
                                        {step.status}
                                    </span>
                                </div>

                               
                                {i < steps.length - 1 && (
                                    <div className="absolute top-6 left-12 w-[calc(100%-48px)] h-px">
                                        <div className="absolute top-0 w-1 h-1 bg-primary rounded-full blur-[1px] animate-particle-flow" style={{ animationDelay: `${i * 0.8}s` }}></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-3 gap-8 w-full max-w-xl">
                    {[
                        { label: "Build Integrity", value: "99.9%" },
                        { label: "Nodes Active", value: "1,240" },
                        { label: "Sync Latency", value: "0.4ms" }
                    ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                            <span className="block text-[8px] text-white/30 uppercase tracking-widest mb-1">{stat.label}</span>
                            <span className="text-sm font-mono text-primary font-bold">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>

          
            <div className="absolute top-8 left-8 font-mono text-[9px] text-primary/30 uppercase tracking-[0.3em]">
                System.Pipeline.v2.0
            </div>
            <div className="absolute bottom-8 right-8 font-mono text-[9px] text-primary/30 uppercase tracking-[0.3em]">
                Architectural_Blueprint
            </div>

        </div>
    );
};

export default JourneyVisual;
