import React from "react";

const EnterpriseCodeVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center group select-none pointer-events-none" 
    style={{ perspective: '2000px' }}>
   
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] scale-150 animate-pulse"></div>

    
      <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        {[
          { label: "Cloud Infra", color: "from-blue-600/20", offset: "-translate-y-24", delay: "0s", icon: "☁️" },

          { label: "API Layer", color: "from-primary/20", offset: "-translate-y-8", delay: "0.2s", icon: "🔗" },
          { label: "Core Logic", color: "from-indigo-600/20", offset: "translate-y-8", delay: "0.4s", icon: "⚙️" },

          { label: "Data Mesh", color: "from-cyan-600/20", offset: "translate-y-24", delay: "0.6s", icon: "📊" }

        ].map((layer, i) => (
          <div
            key={i}
            className={`absolute w-[80%] max-w-[400px] aspect-[2/1] bg-gradient-to-br ${layer.color} to-transparent backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-1000 group-hover:scale-105 ${layer.offset} animate-float flex flex-col p-6 overflow-hidden`}
            style={{
              animationDelay: layer.delay,
              transform: 'rotateX(45deg) rotateZ(-20deg)'
            }}>
          
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40">{layer.label}</span>
              <span className="text-xl opacity-50">{layer.icon}</span>
            </div>

         
            <div className="flex-1 border-t border-white/5 pt-4">
              <div className="w-full h-1 bg-white/5 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-primary/40 animate-progress-bar" 
                style={{ width: `${40 + i * 15}%`, animationDelay: `${i * 0.5}s` }}></div>
              </div>
              <div className="space-y-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-0.5 bg-white/5 rounded-full" style={{ width: `${60 + Math.random() * 30}%` }}></div>
                ))}
              </div>
            </div>

          
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full"></div>

      
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-2 left-2 w-10 h-10 border-t border-l border-white/20"></div>
              <div className="absolute bottom-2 right-2 w-10 h-10 border-b border-r border-white/20"></div>
            </div>
          </div>
        ))}
      </div>

     
      {/* <div className="absolute inset-0 font-mono text-[8px] text-primary/30 uppercase tracking-[0.2em]">
        <div className="absolute top-10 right-10 flex flex-col items-end">
          <span>Scale: Auto.Optimize</span>
          <span>Latency: 2ms</span>
        </div>
        <div className="absolute bottom-10 left-10 flex flex-col">
          <span>Stack: SDS_V4.8</span>
          <span>Status: Synchronized</span>
        </div> */}
      {/* </div> */}

    </div>
  );
};

export default EnterpriseCodeVisual;
