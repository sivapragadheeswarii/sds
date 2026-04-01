import React from 'react';

const TrustVisual = () => {
    const securityNodes = [
        { label: 'NETWORK_SHIELD', val: 'ACTIVE', pos: 'top-4 left-4', delay: '0s', color: 'text-primary' },
        { label: 'DATA_INTEGRITY', val: 'VERIFIED', pos: 'top-10 right-4', delay: '1.2s', color: 'text-secondary' },
        { label: 'THREAT_SCAN', val: '0_RISK', pos: 'bottom-16 left-6', delay: '2.4s', color: 'text-primary' },
        { label: 'GLOBAL_SYNC', val: '99.9%_UP', pos: 'bottom-4 right-6', delay: '3.6s', color: 'text-white' }
    ];

    return (
        <div className="relative w-full aspect-square max-w-lg mx-auto group select-none pointer-events-none perspective-[2000px] overflow-visible">
            
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute inset-20 bg-secondary/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '-2s' }}></div>

            {/* The Nexus Core - 3D Vertical Pillar */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* 1. Main Core Column */}
                <div className="relative w-24 h-4/5 flex items-center justify-center" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(5deg)' }}>
                    
                    {/* Inner Core Glow */}
                    <div className="absolute inset-0 w-2 h-full bg-primary/40 blur-md rounded-full shadow-[0_0_40px_rgba(0,210,255,0.6)]"></div>
                    
                    {/* Floating Geometric Orbs (Moving up/down) */}
                    {[...Array(3)].map((_, i) => {
                        const icons = [
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-secondary fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                        ];
                        const labels = ['SECURE', 'ENGINE', 'DATA'];
                        return (
                            <div 
                                key={i}
                                className="absolute w-14 h-14 bg-dark/90 border border-white/10 hover:border-primary/50 rounded-2xl flex flex-col items-center justify-center transform rotate-45 animate-float-core transition-all duration-300"
                                style={{ 
                                    animationDelay: `${i * 2}s`,
                                    top: `${20 + (i * 25)}%`,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                }}
                            >
                                <div className="-rotate-45 flex flex-col items-center">
                                    {icons[i]}
                                    <span className="text-[6px] font-black text-white/30 uppercase tracking-[0.2em] mt-1">{labels[i]}</span>
                                </div>
                            </div>
                        );
                    })}

                    {/* Data Flow Particles (moving up/down) */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-[2px] h-4 bg-primary/60 rounded-full animate-data-stream"
                            style={{
                                left: '50%',
                                animationDelay: `${Math.random() * 5}s`,
                                transform: `translateX(${(Math.random() - 0.5) * 40}px)`
                            }}
                        ></div>
                    ))}
                </div>

                {/* 2. Holographic Rotating Rings */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                    
                    {/* Large Outer Ring */}
                    <div className="absolute w-[440px] h-[440px] border border-white/5 rounded-full animate-spin-slow-nexus" 
                         style={{ transform: 'rotateX(75deg)' }}>
                        <div className="absolute inset-0 border-t-2 border-primary/20 rounded-full border-dashed"></div>
                    </div>

                    {/* Mid Dynamic Ring */}
                    <div className="absolute w-80 h-80 border-2 border-primary/10 rounded-full animate-spin-nexus-reverse" 
                         style={{ transform: 'rotateX(75deg)' }}>
                        <div className="absolute inset-2 border border-secondary/20 rounded-full border-dotted"></div>
                        
                        {/* Ring Nodes */}
                        {[...Array(4)].map((_, i) => (
                            <div 
                                key={i}
                                className="absolute w-2 h-2 bg-primary rounded-full blur-[1px]"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: `rotate(${i * 90}deg) translateY(160px)`
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Inner Fast Ring */}
                    <div className="absolute w-40 h-40 border border-primary/40 rounded-full animate-spin-fast-nexus" 
                         style={{ transform: 'rotateX(75deg)', boxShadow: '0 0 40px rgba(0,210,255,0.1)' }}></div>
                </div>

                {/* 3. Connection Poly-Grid (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                    <defs>
                        <linearGradient id="nexus-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M 200 50 L 350 200 L 200 350 L 50 200 Z" stroke="url(#nexus-grad)" strokeWidth="0.5" fill="none" className="animate-pulse" />
                    <circle cx="200" cy="200" r="120" stroke="var(--primary)" strokeWidth="0.5" fill="none" strokeDasharray="5 5" className="animate-spin-slow-nexus" />
                </svg>
            </div>

            {/* 4. Security HUD Clusters */}
            {securityNodes.map((node, i) => (
                <div 
                    key={i} 
                    className={`absolute ${node.pos} glass-premium p-4 rounded-2xl border border-white/10 animate-float-nexus z-50 group-hover:scale-110 transition-all duration-700 shadow-2xl`}
                    style={{ animationDelay: node.delay }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#00d2ff]"></div>
                        <span className="text-[8px] font-mono text-white/40 tracking-[0.3em] uppercase">{node.label}</span>
                    </div>
                    <div className={`text-xs font-black ${node.color} tracking-widest flex items-center gap-2`}>
                        {node.val}
                        <span className="text-[10px] opacity-20">_OK</span>
                    </div>
                    
                    {/* Tiny visual chart in HUD */}
                    <div className="mt-2 flex gap-1 h-3 opacity-30">
                        {[...Array(6)].map((_, j) => (
                            <div 
                                key={j} 
                                className="flex-1 bg-white/20 rounded-full overflow-hidden"
                            >
                                <div 
                                    className="h-full bg-primary animate-progress-bar-nexus" 
                                    style={{ animationDelay: `${i * 0.5 + j * 0.1}s`, animationDuration: '3s' }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* 5. Terminal Bitstream Overflow */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-32 h-20 overflow-hidden font-mono text-[6px] text-primary/10 flex flex-col items-center leading-tight">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="animate-marquee-nexus whitespace-nowrap">
                        {Math.random().toString(36).substring(2, 30).toUpperCase()}
                    </div>
                ))}
            </div>

            {/* Custom Animations for Security Nexus */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin-slow-nexus {
                    0% { transform: rotateX(75deg) rotateZ(0deg); }
                    100% { transform: rotateX(75deg) rotateZ(360deg); }
                }

                @keyframes spin-nexus-reverse {
                    0% { transform: rotateX(75deg) rotateZ(360deg); }
                    100% { transform: rotateX(75deg) rotateZ(0deg); }
                }

                @keyframes spin-fast-nexus {
                    0% { transform: rotateX(75deg) rotateZ(0deg); }
                    100% { transform: rotateX(75deg) rotateZ(-360deg); }
                }

                @keyframes float-core {
                    0%, 100% { transform: scale(1) translateY(0) rotate(45deg); opacity: 0.8; }
                    50% { transform: scale(1.1) translateY(-20px) rotate(45deg); opacity: 1; }
                }

                @keyframes float-nexus {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-10px) translateX(5px); }
                    75% { transform: translateY(10px) translateX(-5px); }
                }

                @keyframes data-stream {
                    0% { top: 0%; opacity: 0; height: 0; }
                    10% { opacity: 1; height: 10px; }
                    90% { opacity: 1; height: 10px; }
                    100% { top: 100%; opacity: 0; height: 0; }
                }

                @keyframes progress-bar-nexus {
                    0% { height: 0%; opacity: 0.2; }
                    50% { height: 100%; opacity: 1; }
                    100% { height: 30%; opacity: 0.5; }
                }

                @keyframes marquee-nexus {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }

                .animate-spin-slow-nexus { animation: spin-slow-nexus 15s linear infinite; }
                .animate-spin-nexus-reverse { animation: spin-nexus-reverse 20s linear infinite; }
                .animate-spin-fast-nexus { animation: spin-fast-nexus 8s linear infinite; }
                .animate-float-nexus { animation: float-nexus 12s ease-in-out infinite; }
                .animate-float-core { animation: float-core 5s ease-in-out infinite; }
                .animate-data-stream { animation: data-stream 3s linear infinite; }
                .animate-progress-bar-nexus { animation: progress-bar-nexus 2s ease-in-out infinite; }
                .animate-marquee-nexus { animation: marquee-nexus 10s linear infinite; }
            `}} />
        </div>
    );
};

export default TrustVisual;
