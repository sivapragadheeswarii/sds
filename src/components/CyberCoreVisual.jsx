import React from 'react';

const CyberCoreVisual = () => {
    return (
        <div className="relative w-full aspect-square max-w-md mx-auto group select-none pointer-events-none" style={{ perspective: '1200px' }}>
        
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute inset-10 bg-secondary/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '-2s' }}></div>

          
            <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-primary/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
            <div className="absolute inset-12 border border-dashed border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}></div>

          
            <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative w-48 h-48 flex items-center justify-center">
                  
                    <div className="absolute inset-0 bg-dark border-4 border-primary/40 rounded-[2rem] rotate-45 animate-pulse-glow shadow-[0_0_50px_rgba(0,210,255,0.3)]"></div>
                    <div className="absolute inset-4 bg-primary/5 border border-primary/20 rounded-[1.5rem] rotate-45"></div>
                    
                   
                    <div className="relative z-10 text-6xl font-black text-white tracking-tighter animate-logo-shimmer">
                        SDS
                    </div>

                   
                    <div className="absolute inset-0 overflow-hidden rounded-[2rem] rotate-45">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/60 animate-scan opacity-50"></div>
                    </div>
                </div>
            </div>

           
            {[...Array(6)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full blur-[1px] shadow-[0_0_10px_#00d2ff]"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 60}deg) translateX(120px)`,
                        animation: 'orbit-data 4s linear infinite',
                        animationDelay: `${i * 0.5}s`
                    }}
                >
                    <div className="absolute -top-4 -left-4 text-[8px] text-white/20 font-mono tracking-tighter rotate-[inherit]">
                        0x{Math.floor(Math.random() * 256).toString(16).toUpperCase()}
                    </div>
                </div>
            ))}

          
            <div className="absolute top-0 right-0 glass-premium p-4 rounded-xl border-white/10 animate-float-slow shadow-2xl scale-75 origin-top-right opacity-80">
                <div className="text-[10px] font-mono text-primary mb-2 tracking-widest uppercase">Encryption_Active</div>
                <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1 h-3 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-primary animate-progress-bar" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-4 left-0 glass-premium p-4 rounded-xl border-white/10 animate-float shadow-2xl scale-75 origin-bottom-left opacity-80" style={{ animationDelay: '-2s' }}>
                <div className="text-[10px] font-mono text-secondary mb-2 tracking-widest uppercase">System_Load</div>
                <div className="text-xl font-black text-white">99.9%</div>
            </div>

     
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                <path d="M 100 200 L 150 200 M 250 200 L 300 200 M 200 100 L 200 150 M 200 250 L 200 300" stroke="var(--primary)" strokeWidth="1" fill="none" strokeDasharray="10 10" />
                <circle cx="200" cy="200" r="160" stroke="var(--primary)" strokeWidth="0.5" fill="none" opacity="0.5" />
            </svg>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes orbit-data {
                    from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
                }
            `}} />
        </div>
    );
};

export default CyberCoreVisual;
