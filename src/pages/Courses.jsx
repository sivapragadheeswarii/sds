import React, { useState, useRef } from 'react';
import BlueprintBackground from '../components/BlueprintBackground';
import AnimatedTitle from '../components/AnimatedTitle';

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [demoFormData, setDemoFormData] = useState({
        name: '',
        mobile: '',
        year: '',
        course: ''
    });
    const formRef = useRef();

    const handleDemoSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');


        setTimeout(() => {
            setStatus('success');
            setDemoFormData({ name: '', mobile: '', year: '', course: '' });
            setTimeout(() => {
                setIsDemoModalOpen(false);
                setStatus('');
            }, 2000);
        }, 1500);
    };

    const courses = [


        {
            id: 1,
            title: 'Web Development',
            icon: '🌐',
            description: 'Master modern web technologies from frontend to backend. Learn to build scalable and responsive web applications.',
            duration: '4 Months',
            certificate: 'Professional Certificate in Full Stack Web Development',
            highlights: ['React & Node.js', 'Responsive Design', 'Database Management', 'Cloud Deployment']
        },
        {
            id: 2,
            title: 'App Development',
            icon: '📱',
            description: 'Build high-performance mobile apps for iOS and Android using cross-platform frameworks.',
            duration: '4 Months',
            certificate: 'Mobile Application Development Specialist',
            highlights: ['React Native / Flutter', 'Mobile UI/UX', 'API Integration', 'App Store Publishing']
        },
        {
            id: 3,
            title: 'Artificial Intelligence (AI)',
            icon: '⚙️',
            description: 'Explore the future of technology. Learn about neural networks, natural language processing, and advanced AI models.',
            duration: '6 Months',
            certificate: 'Advanced AI & Deep Learning Certification',
            highlights: ['Neural Networks', 'NLP', 'Computer Vision', 'Deep Learning Frameworks']
        },
        {
            id: 4,
            title: 'Diploma in Multimedia Operation',
            icon: '🎨',
            description: 'A comprehensive program covering graphic design, video editing, and digital media production.',
            duration: '4 Months',
            certificate: 'Graduate Diploma in Multimedia',
            highlights: ['Graphic Design', 'Video Editing', '3D Modeling', 'Motion Graphics']
        },
        {
            id: 5,
            title: 'Computer Aided Drafting (CAD)',
            icon: '💻',
            description: 'Learn industry-standard drafting tools for engineering and architecture.',
            duration: '3 Months',
            certificate: 'Certified CAD Professional',
            highlights: ['2D/3D Drafting', 'Architectural Design', 'Mechanical Engineering Drawings']
        },
        {
            id: 6,
            title: 'Machine Learning Program',
            icon: '💡',
            description: 'Dive deep into data science and predictive modeling. Learn to build algorithms that learn from data.',
            duration: '6 Months',
            certificate: 'Machine Learning Engineering Certificate',
            highlights: ['Statistical Modeling', 'Predictive Analytics', 'Python for ML', 'Model Evaluation']
        },
        {
            id: 7,
            title: 'Certificate in Computer Accounting',
            icon: '📊',
            description: 'Master digital accounting tools and financial management software used in modern businesses.',
            duration: '3 Months',
            certificate: 'Computerized Accounting Professional',
            highlights: ['Financial Statements', 'Tally Prime', 'Digital Records', 'Taxation Basics']
        },
        {
            id: 8,
            title: 'Certificate of Office Applications',
            icon: '📎',
            description: 'Essential skills for modern office environments, focusing on productivity software and workflow management.',
            duration: '2 Months',
            certificate: 'Advanced Office Productivity Certificate',
            highlights: ['Advanced Excel', 'Word Processing', 'Presentation Design', 'Email Communication']
        },
        {
            id: 9,
            title: 'Tally',
            icon: '💼',
            description: 'Deep dive into Tally for GST, payroll, and complex financial accounting.',
            duration: '2 Months',
            certificate: 'Certified Tally ERP User',
            highlights: ['GST Compliance', 'Payroll Management', 'Inventory Tracking', 'Financial Analysis']
        }
    ];

 const TechEcosystem = () => {
    const buildLogs = [
        'initializing_project_environment...',
        'loading_react_components...',
        'configuring_node_server...',
        'connecting_mongodb_database...',
        'building_rest_api_services...',
        'optimizing_application_performance...',
        'securing_authentication_system...',
        'deploying_to_cloud_server...'
    ];

        return (
            <div className="relative w-full h-[500px] flex items-center justify-center pointer-events-none perspective-1000">

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[300px] h-[300px] border border-primary/20 rounded-full animate-spin-slow" />
                    <div className="absolute w-[450px] h-[450px] border border-primary/10 rounded-full animate-spin-slow [animation-direction:reverse]" />
                </div>


                {[
                    { icon: '⚛️', color: '#00d2ff', delay: '0s', label: 'REACT' },
                    { icon: '🧠', color: '#9d50bb', delay: '2s', label: 'AI' },
                    { icon: '📱', color: '#00d2ff', delay: '4s', label: 'APP' },
                    { icon: '🌐', color: '#9d50bb', delay: '6s', label: 'WEB' }
                ].map((node, i) => (
                    <div
                        key={i}
                        className="absolute animate-orbit p-4 bg-[#0a0a0f]/80 border border-white/10 rounded-2xl glass-premium backdrop-blur-md shadow-2xl flex flex-col items-center gap-2"
                        style={{
                            animationDelay: node.delay,
                            boxShadow: `0 0 20px ${node.color}20`
                        }}
                    >
                        <span className="text-3xl">{node.icon}</span>
                        <span className="text-[8px] font-black tracking-widest text-white/50">{node.label}</span>
                    </div>
                ))}


                <div className="relative z-20 w-80 h-96 glass-premium rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden animate-float">
                    <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-[10px] text-white/30 font-mono ml-4 uppercase tracking-tighter">SDS_CORE_SYSTEM</span>
                    </div>
                    <div className="p-6 font-mono text-[10px] leading-relaxed">
                        <div className="animate-terminal">
                            {[...buildLogs, ...buildLogs].map((log, i) => (
                                <div key={i} className="mb-4">
                                    <span className="text-primary/100 mr-3">❯</span>
                                    <span className="text-white/60">{log}</span>
                                    <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full bg-primary/30 animate-progress-bar w-1/3" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-20 -translate-y-full animate-pipeline-flow pointer-events-none" />
                </div>


                <div className="absolute bg-primary/10 w-96 h-96 blur-[150px] rounded-full -z-10 animate-pulse-glow" />
            </div>
        );
    };

    return (
        <div className="relative min-h-screen grain pt-20">
            <BlueprintBackground />

            <div className="pt-20 pb-32 container-custom relative z-10">

                <header className="mb-32 animate-fadeIn max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="mb-10 overflow-visible">
                                <h1 className="text-[clamp(2.5rem,8vw,4rem)] font-black leading-[1.1] uppercase select-none animate-maskReveal">
                                    <span className="bg-accent-gradient bg-clip-text text-transparent drop-shadow-2xl">
                                        Cultivate an
                                        <span className="text-white">authentic</span> <br />
                                        experience
                                    </span>
                                </h1>
                                <h2 className="text-3xl md:text-4xl font-bold mt-8 text-white/80 tracking-tight animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                    Join Our Full-Day, 1:1 Training with Industry Experts.
                                </h2>
                            </div>


                            <p className="max-w-[700px] text-lg md:text-xl text-blue-100/60 leading-relaxed mb-12 font-light animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                We don't just teach code; we engineer <span className="text-white font-medium text-glow-soft">professional identities</span>. Experience real-world learning within an active software company ecosystem.
                            </p>

                            <div className="flex flex-wrap gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                                <button
                                    onClick={() => setIsDemoModalOpen(true)}
                                    className="group relative bg-accent-gradient text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 hover:scale-[1.02]"
                                >
                                    <span className="relative z-10 uppercase tracking-widest">Book Your Free Demo</span>
                                    <div className="absolute inset-0 bg-white/10 rounded-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:block animate-blurIn" style={{ animationDelay: '0.8s' }}>
                            <TechEcosystem />
                        </div>
                    </div>
                </header>

                {/* -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------              */}
                <section className="mb-40">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10 animate-fadeInLeft">

                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight uppercase">
                                Why Train inside a <br />
                                <span className="text-primary text-glow">Software House?</span>
                            </h2>

                            <div className="space-y-8 text-blue-100/50 text-lg leading-relaxed font-light">
                                <div className="flex gap-6 animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl border border-primary/20">🚀</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">Active Production Environment</h4>
                                        <p className="text-sm">You aren't in a classroom; you're in a lab. See how enterprise software is actually architected in real-time.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl border border-primary/20">🛠️</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">1:1 Mentorship by Experts</h4>
                                        <p className="text-sm">Learn directly from our senior developers who are currently building digital ecosystems for global clients.</p>
                                    </div>
                                </div>


                                <div className="flex gap-6 animate-fadeInLeft" style={{ animationDelay: '0.3s' }}>
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl border border-primary/20">⚡</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">Accelerated Skill Acquisition</h4>
                                        <p className="text-sm">Full-day immersion ensures you master concepts in weeks that usually take months in traditional institutes.</p>
                                  
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="relative group animate-fadeInRight">
                            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
                            <div className="glass-premium rounded-[3rem] p-12 border border-white/10 relative overflow-hidden group/method">
                                <div className="absolute top-0 right-0 p-8 text-primary/10 font-black text-9xl select-none uppercase tracking-tighter group-hover/method:text-primary/20 group-hover/method:scale-110 transition-all duration-1000">DNA</div>
                                <h3 className="text-3xl font-black text-white mb-8 relative z-10 tracking-widest uppercase">The SDS Methodology</h3>
                                <ul className="space-y-6 relative z-10">

                                    {['Full-day Immersion (9 AM - 6 PM)', 'Live Project Participation', 'Software Lifecycle Training', 'Industry Standards Workflow'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-blue-100/70">
                                            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#00d2ff]"></div>
                                            {item}

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className="mb-40">

                    <div className="text-center mb-24 animate-maskReveal">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Our <span className="text-primary">Tech Stacks</span></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                        
                        <p className="text-blue-100/40 text-lg max-w-xl mx-auto font-light">
                            Select your path into the future of engineering. Each course is tailored for high-performance professional placement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, i) => (
                            <div
                                key={course.id}
                                className="group p-8 rounded-[32px] cursor-pointer transition-all duration-700 relative overflow-hidden glass-premium border border-white/5 hover:border-primary/30 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] animate-fadeInUp bg-white/[0.02]"
                                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
                                onClick={() => setSelectedCourse(course)}
                            >
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-1000 "></div>

                                <div className="text-4xl mb-10 w-20 h-20 bg-white/5 flex items-center justify-center rounded-[2rem] transition-all duration-700 group-hover:bg-accent-gradient group-hover:rotate-[360deg] border border-white/10 group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                                    {course.icon}
                                </div>


                                <div className="relative z-10 ">
                                    <h3 className="text-2xl font-black mb-4 text-white group-hover:text-primary transition-colors tracking-tight uppercase ">{course.title}</h3>
                                    <p className="text-blue-100/40 text-[0.95rem] mb-10 line-clamp-2 leading-relaxed font-light">{course.description}</p>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="flex items-center text-xs text-primary font-black uppercase tracking-widest gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                                            {course.duration}
                                        </div>
                                        <span className="text-white/20 group-hover:text-white transition-all duration-500 font-bold  tracking-widest text-[10px] uppercase">
                                            Explore DNA →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className="mb-40 py-32 relative overflow-hidden px-4 rounded-[4rem]">
                    <div className="absolute inset-0 bg-primary/[0.03] grain border border-white/5"></div>
                    <div className="relative z-10 container-custom">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-widest ">The Engineer's <span className="text-primary text-glow">Roadmap</span></h2>
                            <p className="text-blue-100/40 text-lg font-light max-w-2xl mx-auto">From aspiring talent to industry-ready engineer. Our proven pipeline.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            <div className="hidden md:block absolute top-[15%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>

                            {[
                                { step: '01', title: 'Immersive Learning', desc: 'Full-day absorption of core tech stacks.' },
                                { step: '02', title: 'Live Labs', desc: 'Working on internal prototype modules.' },
                                { step: '03', title: 'Client Shadows', desc: 'Observing real software deployments.' },
                                { step: '04', title: 'The Launchpad', desc: 'Direct placement or freelance mastery.' }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-premium p-10 rounded-[2.5rem] border-white/5 group hover:border-primary/20 transition-all duration-700 animate-fadeInUp" style={{ animationDelay: `${idx * 0.2}s` }}>
                                    <div className="text-4xl font-black text-primary/20 group-hover:text-primary/100 transition-colors duration-700 mb-6  tracking-tighter">{item.step}</div>
                                    <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-blue-100/40 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className="relative p-12 md:p-20 rounded-[4rem] overflow-hidden text-center animate-blurIn">
                    <div className="absolute inset-0 bg-primary/10 backdrop-blur-3xl border border-white/10 grain"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-900/60 opacity-40"></div>



                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none animate-maskReveal ">
                            Become a  <span className="text-primary text-glow">Digital Architect</span>
                        </h2>
                        <p className="text-blue-100/60 text-xl mb-12 font-light max-w-xl mx-auto leading-relaxed">
                            Stop learning in isolation. Join the ecosystem that builds the future. 1:1 training slots are limited.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <button
                                onClick={() => setIsDemoModalOpen(true)}
                                className="group relative bg-accent-gradient text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-primary/40 overflow-hidden hover:scale-110"
                            >
                                <span className="relative z-10 uppercase tracking-widest">Enroll Today</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
                            </button>
                        </div>
                    </div>
                </section>
                {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


                {selectedCourse && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[2000] flex items-center justify-center p-4 md:p-8 animate-fadeIn" onClick={() => setSelectedCourse(null)}>
                        <div className="w-full max-w-2xl max-h-[90vh] rounded-[32px] relative overflow-y-auto p-6 md:p-10 border border-white/10 glass-premium bg-[#0a0a0b]/80 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <button className="fixed top-8 right-8 md:absolute md:top-8 md:right-8 bg-white/5 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors shadow-lg" onClick={() => setSelectedCourse(null)}>&times;</button>

                            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10 mb-12">
                                <span className="text-7xl p-8 bg-white/5 rounded-3xl border border-white/10 transition-transform duration-700">{selectedCourse.icon}</span>
                                <div className="flex-1">
                                    <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">{selectedCourse.title}</h2>
                                    <div className="inline-flex items-center gap-2 bg-primary/20 text-primary py-2 px-5 rounded-xl text-sm font-black uppercase tracking-widest border border-primary/20">
                                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                        {selectedCourse.duration}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <section>

                                    <h4 className="text-primary mb-4 text-[10px] tracking-[0.5em] uppercase font-black opacity-80 underline underline-offset-8">Technical Blueprint</h4>
                                    <p className="text-blue-100/60 text-lg leading-relaxed font-light">{selectedCourse.description}</p>
                                </section>

                                <section>
                                    <h4 className="text-primary mb-4 text-[10px] tracking-[0.5em] uppercase font-black opacity-80 underline underline-offset-8">Credential Standard</h4>
                                    <div className="flex items-center gap-6 p-8 rounded-2xl border border-white/5 glass-premium bg-white/[0.01]">
                                        <div className="text-5xl">📜</div>
                                        <div>
                                            <p className="text-white font-black text-xl uppercase leading-tight">{selectedCourse.certificate}</p>
                                            <p className="text-blue-100/30 text-[10px] mt-2 uppercase tracking-[0.2em] font-bold">SDS Verification Included</p>
                                        </div>
                                    </div>

                                </section>

                                <section>
                                    <h4 className="text-primary mb-8 text-[10px] tracking-[0.5em] uppercase font-black opacity-80 underline underline-offset-8">Training Modules</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedCourse.highlights.map((h, hi) => (
                                            <div key={hi} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 group group-hover:bg-primary/5">
                                                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#00d2ff] opacity-40 group-hover:opacity-100 transition-opacity"></div>
                                                <span className="text-blue-100/50 group-hover:text-white transition-colors font-medium text-md ">{h}</span>
                                            </div>

                                        ))}
                                    </div>
                                </section>


                                <div className="pt-8 border-t border-white/10">
                                    <button
                                        onClick={() => {
                                            setDemoFormData(prev => ({ ...prev, course: selectedCourse.title }));
                                            setSelectedCourse(null);
                                            setIsDemoModalOpen(true);
                                        }}
                                        className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:shadow-[0_20px_40px_rgba(0,210,255,0.4)] hover:scale-[1.01] transition-all" >
                                        Apply for This DNA
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                {isDemoModalOpen && (

                    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[3000] flex items-center justify-center p-4 animate-fadeIn" onClick={() => setIsDemoModalOpen(false)}>
                        <div className="w-full max-w-2xl rounded-[32px] p-6 md:p-10 border border-white/10 glass-premium bg-[#0a0a0b]/90 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
                            <button className="absolute top-6 right-6 text-white/40 hover:text-white text-2xl" onClick={() => setIsDemoModalOpen(false)}>&times;</button>

                            <h2 className="text-2xl font-black text-white mb-1 uppercase tracking-tighter">Free Demo <span className="text-primary">Session</span></h2>
                            <p className="text-blue-100/40 text-xs mb-8 font-light">Fill in your details to book a 1:1 demo session with our experts.</p>

                            <form ref={formRef} onSubmit={handleDemoSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-primary ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50 transition-colors text-sm"
                                            placeholder="Enter your Name"
                                            value={demoFormData.name}
                                            onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-primary ml-1">Mobile number</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50 transition-colors text-sm"
                                            placeholder="+91 00000 00000"
                                            value={demoFormData.mobile}
                                            onChange={(e) => setDemoFormData({ ...demoFormData, mobile: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-primary ml-1">Year of Passing</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50 transition-colors text-sm"
                                            placeholder="2024"
                                            value={demoFormData.year}
                                            onChange={(e) => setDemoFormData({ ...demoFormData, year: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-primary ml-1">Course of Interest</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50 transition-colors text-sm"
                                            placeholder="e.g., Full Stack Web Development"
                                            value={demoFormData.course}
                                            onChange={(e) => setDemoFormData({ ...demoFormData, course: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-accent-gradient text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all disabled:opacity-50"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Schedule Demo'}

                                </button>

                                {status === 'success' && <p className="text-green-400 text-center text-sm font-bold animate-fadeInUp">Booking request sent successfully!</p>}
                                {status === 'error' && <p className="text-red-400 text-center text-sm font-bold animate-fadeInUp">Failed to send request. Please try again.</p>}
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;

