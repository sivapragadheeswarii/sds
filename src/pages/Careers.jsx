import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlueprintBackground from '../components/BlueprintBackground';

const Careers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");
    
    // Form state
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', coverLetter: '' });
    const [resume, setResume] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleApply = (role) => {
        setSelectedJob(role);
        setIsModalOpen(true);
    };

    const handleCareerSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('position', selectedJob);
        data.append('coverLetter', formData.coverLetter);
        if (resume) {
            data.append('resume', resume);
        } else {
            alert("Please upload a resume");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/career', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                alert('Application Submitted Successfully!');
                setIsModalOpen(false);
                setFormData({ name: '', phone: '', email: '', coverLetter: '' });
                setResume(null);
            } else {
                alert('Failed to submit application. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Error submitting application. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const perks = [
        { icon: "🚀", title: "Cutting-Edge Tech", desc: "Work with the latest modern stacks like React, Node, AWS, and AI integration." },
        { icon: "🌍", title: "Remote Flexibility", desc: "Work from anywhere or join us in our high-tech hybrid office setup." },
        { icon: "💡", title: "Continuous Learning", desc: "Dedicated budget and time for courses, certifications, and conferences." },
        { icon: "❤️", title: "Health & Wellness", desc: "Comprehensive health coverage and wellness programs for all employees." },
        { icon: "🔥", title: "High Impact", desc: "Build systems that reach millions and directly impact our clients' bottom line." },
        { icon: "🎮", title: "Great Culture", desc: "Weekly game nights, hackathons, and a collaborative, ego-free environment." }
    ];

    const positions = [
        { id: 'JOB_01', role: "Senior Full Stack Engineer", type: "Full-Time", location: "Remote / Hybrid", exp: "4+ Years", isHot: true },
        { id: 'JOB_02', role: "UI/UX Designer", type: "Full-Time", location: "On-Site", exp: "2+ Years", isHot: false },
        { id: 'JOB_03', role: "DevOps Engineer", type: "Contract", location: "Remote", exp: "3+ Years", isHot: true },
        { id: 'JOB_04', role: "Digital Marketing Specialist", type: "Full-Time", location: "Hybrid", exp: "1+ Years", isHot: false }
    ];

    return (
        <div className="relative min-h-screen">
            <BlueprintBackground />
            <div className="relative z-10 text-white overflow-hidden pb-20 grain">
             

                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="container-custom text-center relative z-10">
                        <span className="inline-block py-1 px-4 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-[10px] md:text-sm font-medium mb-6 animate-fadeInUp">
                            Join the SDS Core Team
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            Build the <br />
                            <span className="gradient-text">Future of Software</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-muted text-base md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            We are looking for passionate builders, thinkers, and innovators to join our mission of crafting world-class digital solutions.
                        </p>
                    </div>
                </section>

               
                <section className="py-20 relative">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-mono text-primary/80 uppercase tracking-widest mb-2">System Advantages</h2>
                            <h3 className="text-3xl md:text-4xl font-bold">Why Join <span className="text-primary">SDS?</span></h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {perks.map((perk, i) => (
                                <div key={i} className="stagger-reveal animate-stagger" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <div className="glass-premium rounded-2xl p-6 border border-white/5 hover:border-primary/40 shadow-xl transition-all duration-300 bg-slate-900/40 backdrop-blur-md group">
                                        <div className="text-4xl mb-6 bg-white/5 w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-primary/20 transition-colors duration-500">
                                            {perk.icon}
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{perk.title}</h4>
                                        <p className="text-muted text-sm leading-relaxed">{perk.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

             
                <section className="py-24 border-t border-white/5 bg-black/20 relative">
                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-mono text-secondary/80 uppercase tracking-widest mb-2">Active Protocols</h2>
                            <h3 className="text-3xl md:text-4xl font-bold">Open <span className="gradient-text">Positions</span></h3>
                        </div>
                        
                        <div className="max-w-4xl mx-auto flex flex-col gap-6">
                            {positions.map((pos, i) => (
                                <div key={i} className="animate-fadeInUp glass-premium rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-white/10 hover:border-primary/50 transition-all duration-300 group bg-slate-900/60" style={{ animationDelay: `${i * 0.15}s` }}>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">{pos.id}</span>
                                            {pos.isHot && (
                                                <span className="text-[10px] font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded border border-red-400/20">URGENT</span>
                                            )}
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white transition-colors text-white/90">{pos.role}</h4>
                                        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                                            <span className="flex items-center gap-1"><span className="text-secondary">#</span> {pos.type}</span>
                                            <span className="hidden md:inline text-white/20">|</span>
                                            <span className="flex items-center gap-1"><span className="text-secondary">@</span> {pos.location}</span>
                                            <span className="hidden md:inline text-white/20">|</span>
                                            <span className="flex items-center gap-1"><span className="text-secondary">&gt;</span> {pos.exp}</span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-auto mt-4 md:mt-0">
                                        <button onClick={() => handleApply(pos.role)} className="w-full md:w-auto px-8 py-3 rounded-full font-bold text-sm bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 uppercase tracking-wider text-white">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                   
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+DQogIDxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idHJhbnNwYXJlbnQiLz4NCiAgPHBhdGggZD0iTTAgNDBINDBWMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4NCjwvc3ZnPg==')] opacity-30 z-0"></div>
                </section>

               
                <section className="py-20 md:py-24 relative">
                    <div className="container-custom">
                        <div className="glass-premium p-8 md:p-12 rounded-3xl md:rounded-[40px] text-center border border-secondary/20 bg-secondary/[0.02] relative overflow-hidden group">
                            
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-colors duration-700"></div>
                            
                            <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10 tracking-tight">Don't see a perfect fit?</h2>
                            <p className="text-blue-100/40 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
                                We are always looking for exceptional talent to join our network. Send us your open application and let's see how our paths align.
                            </p>
                            <Link to="/contact" className="relative z-10">
                                <button className="bg-white text-black py-3 md:py-4 px-8 md:px-10 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm md:text-base">
                                    Send Open Application
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

           
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
                    <div className="glass-premium w-full max-w-lg p-8 rounded-2xl border border-white/10 relative overflow-hidden bg-slate-900/90 shadow-2xl">
                       
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gradient"></div>
                        
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors text-xl font-bold"
                        >
                            ✕
                        </button>
                        
                        <h3 className="text-2xl font-bold mb-2 pr-6">Apply for <span className="text-primary">{selectedJob || "Position"}</span></h3>
                        <p className="text-sm text-white/50 mb-6 font-mono">Fill out the form below to submit your application.</p>
                        
                        <form className="flex flex-col gap-5" onSubmit={handleCareerSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-white/70 mb-1">NAME</label>
                                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-white/70 mb-1">PHONE NUMBER</label>
                                    <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+91 9876543210" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-white/70 mb-1">EMAIL</label>
                                    <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-white/70 mb-1">RESUME / CV</label>
                                    <div className="w-full h-12 bg-white/5 border border-white/10 border-dashed rounded-lg px-4 flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer relative group">
                                        <input type="file" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />
                                        <span className="text-sm text-white/70 truncate flex-1 block">{resume ? resume.name : "Upload file..."}</span>
                                        <span className="text-lg block group-hover:scale-110 transition-transform">📄</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-white/70 mb-1">COVER LETTER</label>
                                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" rows="3" placeholder="Tell us why you're a good fit..." value={formData.coverLetter} onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}></textarea>
                            </div>
                            
                            <button type="submit" disabled={isSubmitting} className="w-full bg-accent-gradient text-white font-bold py-3 mt-2 rounded-lg hover:shadow-[0_0_20px_rgba(157,80,187,0.4)] transition-all disabled:opacity-50">
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Careers;
