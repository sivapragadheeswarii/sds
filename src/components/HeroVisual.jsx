import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiMongodb, SiTypescript } from 'react-icons/si';

// This defines the sequence of text along with its specific styling class
// The structure helps maintain syntax highlighting while iterating characters
const CODE_LINES = [
    { text: '// Architecting elite digital ecosystems for the future\n', class: 'text-white/30' },
    
    { text: 'import ', class: 'text-[#ff7b72]' },
    { text: 'React ', class: 'text-[#c9d1d9]' },
    { text: 'from ', class: 'text-[#ff7b72]' },
    { text: "'react'", class: 'text-[#a5d6ff]' },
    { text: ';\n', class: 'text-[#c9d1d9]' },
    
    { text: 'import ', class: 'text-[#ff7b72]' },
    { text: '{ QuantumCore } ', class: 'text-[#c9d1d9]' },
    { text: 'from ', class: 'text-[#ff7b72]' },
    { text: "'@sds/engine'", class: 'text-[#a5d6ff]' },
    { text: ';\n', class: 'text-[#c9d1d9]' },

    { text: 'const ', class: 'text-[#ff7b72]' },
    { text: 'EnterpriseApp ', class: 'text-[#d2a8ff]' },
    { text: '= () => {\n', class: 'text-[#ff7b72]' },
    
    { text: '  const { system } = ', class: 'text-[#c9d1d9]' },
    { text: 'useQuantumCore', class: 'text-[#d2a8ff]' },
    { text: '();\n\n', class: 'text-[#c9d1d9]' },

    { text: '  return (\n', class: 'text-[#ff7b72]' },
    
    { text: '    <GlobalEcosystem>\n', class: 'text-[#7ee787]' },
    
    { text: '      <ScalableArchitecture ', class: 'text-[#7ee787]' },
    { text: 'resilience=', class: 'text-[#79c0ff]' },
    { text: '{"maximum"}', class: 'text-[#a5d6ff]' },
    { text: ' />\n', class: 'text-[#7ee787]' },

    { text: '      <SecurityLayer ', class: 'text-[#7ee787]' },
    { text: 'zeroTrust=', class: 'text-[#79c0ff]' },
    { text: '{true}', class: 'text-[#a5d6ff]' },
    { text: ' />\n', class: 'text-[#7ee787]' },

    { text: '      <AIIntelligence ', class: 'text-[#7ee787]' },
    { text: 'status=', class: 'text-[#79c0ff]' },
    { text: '{"active"}', class: 'text-[#a5d6ff]' },
    { text: ' />\n', class: 'text-[#7ee787]' },

    { text: '    </GlobalEcosystem>\n', class: 'text-[#7ee787]' },
    { text: '  );\n', class: 'text-[#c9d1d9]' },
    { text: '};\n', class: 'text-[#c9d1d9]' }
];

const HeroVisual = () => {
    const [typedChunks, setTypedChunks] = useState([]);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        let timeoutId;
        let isActive = true; // Prevents React Strict Mode double-firing

        // Typing effect loop
        if (currentChunkIndex < CODE_LINES.length) {
            const currentChunkData = CODE_LINES[currentChunkIndex];
            
            if (currentCharIndex < currentChunkData.text.length) {
                timeoutId = setTimeout(() => {
                    if (!isActive) return;

                    setTypedChunks(prev => {
                        const newChunks = [...prev];
                        
                        if (!newChunks[currentChunkIndex]) {
                            // First character of a new chunk
                            newChunks[currentChunkIndex] = { 
                                ...currentChunkData, 
                                text: currentChunkData.text[currentCharIndex] 
                            };
                        } else {
                            // Append next character immutably
                            newChunks[currentChunkIndex] = {
                                ...newChunks[currentChunkIndex],
                                text: newChunks[currentChunkIndex].text + currentChunkData.text[currentCharIndex]
                            };
                        }
                        
                        return newChunks;
                    });
                    
                    if (isActive) setCurrentCharIndex(prev => prev + 1);
                }, Math.random() * 50 + 30); // Random typing speed (30ms - 80ms per char)

            } else {
                // Move to next line/chunk after a tiny pause
                timeoutId = setTimeout(() => {
                    if (!isActive) return;
                    setCurrentChunkIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }, 100);
            }
        } else {
            // Loop code after completion
            timeoutId = setTimeout(() => {
                if (!isActive) return;
                setTypedChunks([]);
                setCurrentChunkIndex(0);
                setCurrentCharIndex(0);
            }, 5000); // Wait 5 seconds before restarting
        }

        return () => {
            isActive = false;
            clearTimeout(timeoutId);
        };
    }, [currentChunkIndex, currentCharIndex]);

    return (
        <div className="relative w-full flex items-center justify-center pointer-events-none select-none mt-20 pl-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full animate-pulse-slow"></div>

            {/* Main IDE Window */}
            <div className="relative w-full max-w-[600px] h-auto pb-10 glass-premium bg-[#0d1117]/90 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden animate-float z-20">
                {/* IDE Header */}
                <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="mx-auto flex items-center gap-2 bg-black/40 px-3 py-1 rounded-md">
                        <FaReact className="text-[#61DAFB] text-xs animate-[spin_4s_linear_infinite]" />
                        <span className="text-[10px] text-white/50 font-mono">App.tsx — SDS Technologies</span>
                    </div>
                </div>

                {/* IDE Code Area */}
                <div className="p-5 md:p-6 font-mono text-[9px] md:text-xs leading-relaxed overflow-hidden h-[320px]">
                    <pre className="whitespace-pre-wrap font-inherit tracking-tight">
                        {typedChunks.map((chunk, index) => (
                            <span key={index} className={chunk.class}>{chunk.text}</span>
                        ))}
                        {/* Blinking Cursor */}
                        <span className="inline-block w-2.5 h-[14px] bg-white/80 animate-pulse ml-0.5 align-middle"></span>
                    </pre>
                </div>

                {/* IDE Status Bar */}
                <div className="absolute bottom-0 w-full px-4 py-1.5 bg-blue-500/10 border-t border-blue-500/20 flex justify-between items-center text-[9px] text-blue-300 font-mono">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div> SYNCED</span>
                        <span>main*</span>
                        <span className="text-white/30 hidden md:inline">UTF-8</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>TypeScript React</span>
                        <span>Prettier</span>
                    </div>
                </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute w-14 h-14 glass-premium rounded-xl bg-slate-900/80 backdrop-blur-md flex items-center justify-center shadow-lg -top-20 -right-4 md:-right-16 animate-float border border-white/5 mt-40" style={{ animationDelay: '0.2s' }}>
                <FaReact className="text-[#61DAFB] text-3xl animate-[spin_6s_linear_infinite]" />
            </div>
            <div className="absolute w-14 h-14 glass-premium rounded-xl bg-slate-900/80 backdrop-blur-md flex items-center justify-center shadow-lg top-1/4 -left-6 md:-left-0 animate-float-slow border border-white/5" style={{ animationDelay: '0.7s' }}>
                <FaNodeJs className="text-[#339933] text-2xl" />
            </div>
            <div className="absolute w-14 h-14 glass-premium rounded-xl bg-slate-900/80 backdrop-blur-md flex items-center justify-center shadow-lg bottom-1/4 -right-2 md:-right-14 animate-float border border-white/5 ml-40" style={{ animationDelay: '1.2s' }}>
                <FaAws className="text-[#FF9900] text-3xl" />
            </div>
            <div className="absolute w-12 h-12 glass-premium rounded-xl bg-slate-900/80 backdrop-blur-md flex items-center justify-center shadow-lg -bottom-6 left-10 md:left-4 animate-float-slow border border-white/5" style={{ animationDelay: '0.4s' }}>
                <SiTypescript className="text-[#3178C6] text-2xl" />
            </div>
            <div className="absolute w-10 h-10 glass-premium rounded-xl bg-slate-900/80 backdrop-blur-md flex items-center justify-center shadow-lg -bottom-16 left-1/4 animate-float border border-white/5" style={{ animationDelay: '1.5s' }}>
                <SiMongodb className="text-[#47A248] text-xl" />
            </div>

       
            <div className="absolute -top-16 right-0 glass-premium border-white/5 px-4 py-2 rounded-full flex items-center gap-3 animate-fadeInRight shadow-xl z-30" style={{ animationDelay: '1s' }}>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                <span className="text-[9px] font-bold text-white/70 tracking-[0.2em] uppercase">Build: Success</span>
            </div>

            <div className="absolute bottom-10 -left-6 md:-left-10 glass-premium border-white/5 px-4 py-2 rounded-full flex items-center gap-2 animate-fadeInLeft shadow-xl z-30" style={{ animationDelay: '1.5s' }}>
                <span className="text-[10px] text-blue-400">⚡</span>
                <span className="text-[9px] font-bold text-white/50 tracking-widest uppercase">99.9% Uptime</span>
            </div>

        </div>
    );
};

export default HeroVisual;
