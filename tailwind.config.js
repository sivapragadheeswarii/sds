/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        
    ],
    
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00d2ff',
                },
                secondary: {
                    DEFAULT: '#9d50bb',
                },
                dark: {
                    DEFAULT: '#0a0a0f',
                },
                card: {
                    DEFAULT: '#16161f',
                },
                muted: {
                    DEFAULT: '#a0a0b0',
                },
            },
            backgroundImage: {
                'accent-gradient': 'linear-gradient(135deg, #00d2ff, #9d50bb)',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                morph: {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                    '50%': { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%' },
                    '75%': { borderRadius: '70% 30% 40% 60% / 40% 70% 60% 30%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)' },
                    '50%': { transform: 'translateY(-20px) scale(1.05)' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                pulseCustom: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
                    '50%': { transform: 'scale(1.1)', opacity: '0.3' },
                },
                rotateCustom: {
                    '0%': { transform: 'rotate(0deg) scale(1)', borderColor: '#00d2ff' },
                    '50%': { transform: 'rotate(180deg) scale(1.2)', borderColor: '#9d50bb' },
                    '100%': { transform: 'rotate(360deg) scale(1)', borderColor: '#00d2ff' },
                },
                heroPulse: {
                    'from': { transform: 'scale(1) translate(0, 0)' },
                    'to': { transform: 'scale(1.2) translate(50px, 30px)' },
                },
                growLine: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
                charReveal: {
                    '0%': { opacity: '0', transform: 'scale(0.5) rotate(-10deg)', filter: 'blur(10px)' },
                    '100%': { opacity: '1', transform: 'scale(1) rotate(0)', filter: 'blur(0)' },
                },
                textShimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                glowPulse: {
                    '0%, 100%': { textShadow: '0 0 10px rgba(0, 210, 255, 0.5), 0 0 20px rgba(0, 210, 255, 0.2)' },
                    '50%': { textShadow: '0 0 20px rgba(157, 80, 187, 0.8), 0 0 40px rgba(157, 80, 187, 0.4)' },
                },
                codeScroll: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                cursorBlink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },

            
            animation: {
                fadeIn: 'fadeIn 0.8s ease forwards',
                slideInRight: 'slideInRight 0.8s ease forwards',
                morph: 'morph 8s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',
                gradientShift: 'gradientShift 10s linear infinite',
                pulseCustom: 'pulseCustom 4s ease-in-out infinite',
                rotateCustom: 'rotateCustom 4s linear infinite',
                heroPulse: 'heroPulse 10s infinite alternate',
                heroPulseReverse: 'heroPulse 15s infinite alternate-reverse',
                growLine: 'growLine 1s ease-out forwards',
                charReveal: 'charReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                textShimmer: 'textShimmer 3s linear infinite',
                glowPulse: 'glowPulse 3s ease-in-out infinite',
                codeScroll: 'codeScroll 40s linear infinite',
                cursorBlink: 'cursorBlink 1s step-end infinite',
            }


            
        },
    },
    plugins: [],
}
