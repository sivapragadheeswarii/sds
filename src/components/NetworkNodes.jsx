// import React, { useEffect, useRef } from 'react';

// const NetworkNodes = () => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         let animationFrameId;

//         let particles = [];
//         const particleCount = 100;
//         const connectionDistance = 150;
//         const mouse = { x: null, y: null, radius: 150 };

//         const resize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };

//         class Particle {
//             constructor() {
//                 this.x = Math.random() * canvas.width;
//                 this.y = Math.random() * canvas.height;
//                 this.vx = (Math.random() - 0.5) * 0.5;
//                 this.vy = (Math.random() - 0.5) * 0.5;
//                 this.size = Math.random() * 2 + 1;
//             }

//             update() {
//                 this.x += this.vx;
//                 this.y += this.vy;

//                 if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//                 if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

//                 // Mouse interaction
//                 if (mouse.x && mouse.y) {
//                     const dx = mouse.x - this.x;
//                     const dy = mouse.y - this.y;
//                     const distance = Math.sqrt(dx * dx + dy * dy);
//                     if (distance < mouse.radius) {
//                         const force = (mouse.radius - distance) / mouse.radius;
//                         this.x -= dx * force * 0.02;
//                         this.y -= dy * force * 0.02;
//                     }
//                 }
//             }

//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//                 ctx.fillStyle = 'rgba(100, 150, 255, 0.5)';
//                 ctx.fill();
//             }
//         }

//         const init = () => {
//             particles = [];
//             for (let i = 0; i < particleCount; i++) {
//                 particles.push(new Particle());
//             }
//         };

//         const drawLines = () => {
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     const dx = particles[i].x - particles[j].x;
//                     const dy = particles[i].y - particles[j].y;
//                     const distance = Math.sqrt(dx * dx + dy * dy);

//                     if (distance < connectionDistance) {
//                         ctx.beginPath();
//                         ctx.strokeStyle = `rgba(100, 150, 255, ${1 - distance / connectionDistance})`;
//                         ctx.lineWidth = 0.5;
//                         ctx.moveTo(particles[i].x, particles[i].y);
//                         ctx.lineTo(particles[j].x, particles[j].y);
//                         ctx.stroke();
//                     }
//                 }
//             }
//         };

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             particles.forEach(p => {
//                 p.update();
//                 p.draw();
//             });
//             drawLines();
//             animationFrameId = requestAnimationFrame(animate);
//         };

//         window.addEventListener('resize', resize);
//         window.addEventListener('mousemove', (e) => {
//             mouse.x = e.clientX;
//             mouse.y = e.clientY;
//         });

//         resize();
//         init();
//         animate();

//         return () => {
//             window.removeEventListener('resize', resize);
//             cancelAnimationFrame(animationFrameId);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40"
//         />
//     );
// };

// export default NetworkNodes;
