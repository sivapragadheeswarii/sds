import React from 'react';

const AnimatedTitle = ({ text }) => {
    const words = text.split(' ');
    let globalCharIndex = 0;

    return (
        <div className="relative flex flex-col items-start w-fit max-w-full py-6 overflow-visible">

            <h1 className="text-[clamp(2rem,7vw,5rem)] font-black flex flex-wrap items-center leading-[1.1] text-white uppercase  select-none tracking-tighter">
              
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
                        {word.split('').map((char, charIndex) => {
                            const delay = globalCharIndex * 0.05;
                            globalCharIndex++;

                            return (
                                <span
                                    key={charIndex}
                                    className="inline-block opacity-0 animate-charReveal"
                                    style={{
                                        animationDelay: `${delay}s`,
                                        animationFillMode: 'forwards',
                                        textShadow: char !== ' ' ? '0 5px 15px rgba(0,0,0,0.3)' : 'none'
                                    }}
                                >

                                    <span className="inline-block hover:animate-glowPulse transition-transform duration-300">
                                        {char}
                                    </span>


                                </span>
                            );
                        })}
                    </span>
                ))}

            </h1>
            <div className="h-[4px] md:h-1 w-full bg-accent-gradient mt-4 animate-growLine shadow-[0_4px_15px_rgba(0,210,255,0.4)]" style={{ animationDelay: '1s' }}></div>
        </div>
    );
};

export default AnimatedTitle;
