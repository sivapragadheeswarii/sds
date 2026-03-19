import React, { useState } from 'react';
import BlueprintBackground from '../components/BlueprintBackground';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: 'Contact Form Submission',
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setStatus('success');
                setTimeout(() => {
                    setSubmitted(false);
                    setStatus('');
                }, 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="relative min-h-screen grain pt-20">
            <BlueprintBackground />

            <div className="pt-20 pb-32 container-custom relative z-10">
                <header className="mb-20 md:mb-32 animate-fadeIn max-w-4xl text-center md:text-left px-4">
                    <h1 className="text-[clamp(2.2rem,8vw,4rem)] font-black leading-tight tracking-tighter uppercase select-none animate-maskReveal mb-8">
                        <span className="bg-accent-gradient bg-clip-text text-transparent drop-shadow-2xl">
                            Contact  <span className="text-white "> Our Team</span>
                        </span>
                    </h1>
                    <p className="text-blue-100/40 text-base md:text-xl font-light max-w-2xl leading-relaxed animate-fadeInUp mx-auto md:mx-0" style={{ animationDelay: '0.2s' }}>
                        Let’s bring your digital vision to life. Contact us to build modern websites, mobile apps, and custom software.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8 md:gap-12 items-start px-4">
                    <div className="space-y-4 md:space-y-6 animate-fadeInLeft" style={{ animationDelay: '0.4s' }}>
                        {[
                            { icon: '📍', label: 'Global Headquarters', value: 'Red Cross Road,Shanmugapuram,Palani - 642601,Dindigul', color: 'primary' },
                            { icon: '✉️', label: 'Technical Inquiries', value: 'sdspalani@gmail.com', color: 'primary' },
                            { icon: '📞', label: 'Priority Line', value: '+91 9384293632', color: 'primary' }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-6 md:p-8 rounded-3xl md:rounded-[32px] glass-premium border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                            >
                                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center text-center sm:text-left">
                                    <div className="text-3xl md:text-4xl w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-gradient group-hover:rotate-[360deg] transition-all duration-700 border border-white/10 group-hover:border-transparent">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-primary text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black mb-1 opacity-60">{item.label}</h4>
                                        <p className="text-white font-bold text-base md:text-lg tracking-tight uppercase">{item.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="p-6 md:p-8 rounded-3xl md:rounded-[32px] border border-white/5 bg-white/[0.02] mt-8 md:mt-12">
                            <h4 className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-black mb-6">Network Availability</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-blue-100/40 uppercase tracking-widest">Support Core</span>
                                    <span className="text-green-400 font-black">ONLINE</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-400/50 w-[95%] animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-fadeInRight mt-8 lg:mt-0" style={{ animationDelay: '0.6s' }}>
                        <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px] opacity-20 -z-10" />
                        <div className="glass-premium rounded-3xl md:rounded-[4rem] p-8 md:p-20 border border-white/10 relative overflow-hidden group">
                            {submitted ? (
                                <div className="text-center py-20 animate-blurIn">
                                    <div className="text-8xl mb-12 animate-float">🚀</div>
                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">Transmission Successful</h3>
                                    <p className="text-blue-100/40 text-base md:text-lg font-light max-w-xs mx-auto">Our architects have received your data packet and will respond briefly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.5em] font-black text-primary ml-1 block">Deployer Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-primary/50 transition-all font-medium placeholder:text-white/10"
                                            placeholder="Enter full name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.5em] font-black text-primary ml-1 block">Synchronous Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-primary/50 transition-all font-medium placeholder:text-white/10"
                                            placeholder="architect@domain.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.5em] font-black text-primary ml-1 block">Requirements Brief</label>
                                        <textarea
                                            required
                                            rows="5"
                                            className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-white outline-none focus:border-primary/50 transition-all font-medium resize-none placeholder:text-white/10"
                                            placeholder="Describe your digital blueprint..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full group relative bg-accent-gradient text-white py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-lg md:text-xl transition-all shadow-2xl shadow-primary/30 overflow-hidden hover:scale-[1.02] disabled:opacity-50"
                                    >
                                        <span className="relative z-10 uppercase tracking-[0.2em] font-black text-base md:text-xl">
                                            {status === 'sending' ? 'Transmitting Data...' : 'Initiate Protocol'}
                                        </span>
                                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
                                    </button>

                                    {status === 'error' && <p className="text-red-400 text-center text-sm font-bold animate-fadeInUp">Transmission Failed. Please check parameters.</p>}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
