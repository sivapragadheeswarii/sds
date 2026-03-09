import React from 'react';

const BlueprintBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#030712]">
            
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div
                className="absolute inset-0 opacity-[0.05] animate-pulse"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '160px 160px'
                }}
            ></div>

            
            <svg className="absolute inset-0 w-full h-full opacity-20">
                <pattern id="dotPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(0, 208, 255, 0.34)" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dotPattern)" />

              
                <line x1="10%" y1="0" x2="10%" y2="100%" stroke="rgba(221, 233, 236, 0.05)" strokeWidth="1" />
                <line x1="90%" y1="0" x2="90%" y2="100%" stroke="rgba(0,210,255,0.05)" strokeWidth="1" />
                <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(0,210,255,0.05)" strokeWidth="1" />
            </svg>

           
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute flex items-center gap-4 text-[10px] font-mono text-primary/20 whitespace-nowrap animate-float"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 5}%`,
                            animationDelay: `${i * 2}s`,
                            animationDuration: `${15 + i * 5}s`
                        }}
                    >
                        {/* <span>[ SDS Technologies{i + 1} : Y{i * 10} ]</span>
                        <div className="w-24 h-px bg-primary/20"></div>
                        <span></span> */}
                    </div>
                ))}
            </div>

          
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>

           
            <div className="absolute inset-0 grain opacity-20"></div>
        </div>
    );
};

export default BlueprintBackground;
