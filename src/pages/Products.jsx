import React, { useState, useEffect } from 'react';
import BlueprintBackground from "../components/BlueprintBackground";
import { Link } from "react-router-dom";
import { FaPrint, FaHotel, FaFileInvoiceDollar, FaBriefcase, FaUsers, FaHospital, FaGraduationCap, FaShieldAlt, FaRocket } from 'react-icons/fa';

const Products = () => {
    const products = [
        {
            id: 'SDS_PRINT_001',
            title: 'PrintFlow Elite',
            version: '3.5.0',
            status: 'STABLE_DEPLOY',
            icon: <FaPrint className="text-primary text-3xl" />,
            description: "High-fidelity print ecosystem designed for industrial-scale operations. Real-time job queue management and comprehensive supplier logistics.",
            image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800&auto=format&fit=crop',
            specs: {
                arch: 'Distributed Print-Flow',
                security: 'Encrypted Job Queue',
                scalability: 'Massive Output Capacity'
            },
            features: ["Automated Pre-flight Checks", "Stock Inventory Sync", "Dynamic Cost Estimator"]
        },
        {
            id: 'SDS_HOTEL_002',
            title: 'GrandStay PMS',
            version: '2.1.4',
            status: 'ENTERPRISE_CORE',
            icon: <FaHotel className="text-secondary text-3xl" />,
            description: "Cloud-native hospitality workstation. Unifies reservations, housekeeping status, and guest billing into a single high-performance dashboard.",
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
            specs: {
                arch: 'Multi-Tenant Cloud',
                security: 'PCI-DSS Compliant',
                scalability: 'Global Chain Ready'
            },
            features: ["Smart Booking Matrix", "Housekeeping Dispatch", "Integrated Billing Engine"]
        },
        {
            id: 'SDS_HMS_006',
            title: 'CarePulse HMS',
            version: '4.1.0',
            status: 'CLINICAL_STABLE',
            icon: <FaHospital className="text-primary text-3xl" />,
            description: "Advanced Healthcare Information System (HIS) for hospitals and clinics. Digital patient records and automated pharmacy inventory.",
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
            specs: {
                arch: 'HL7 Compliant Core',
                security: 'Biometric Access Control',
                scalability: 'Multi-Department Sync'
            },
            features: ["Electronic Medical Records (EMR)", "Live Bed Availability Matrix", "In-patient/Out-patient Billing"]
        },
        {
            id: 'SDS_SMS_007',
            title: 'EduSync Pro',
            version: '2.4.5',
            status: 'CAMPUS_STABLE',
            icon: <FaGraduationCap className="text-secondary text-3xl" />,
            description: "All-in-one educational ecosystem for schools and colleges. Streamline admissions and academic performance tracking in real-time.",
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop',
            specs: {
                arch: 'Edu-LMS Framework',
                security: 'Student Data Encryption',
                scalability: 'Multi-Campus Ready'
            },
            features: ["Smart Attendance System", "Parent-Teacher Connect Portal", "Automated Fee Management"]
        },
        {
            id: 'SDS_BILL_003',
            title: 'AccuBill Pro',
            version: '5.0.1',
            status: 'HIGH_PRECISION',
            icon: <FaFileInvoiceDollar className="text-primary text-3xl" />,
            description: "Ultra-fast billing engine for retail and enterprise sectors. GST-ready invoicing with real-time tax auditing and reconciliation.",
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
            specs: {
                arch: 'Atomic Transactional',
                security: 'Audit-Trail Enabled',
                scalability: 'Infinite SKU Capacity'
            },
            features: ["GST Auto-Compliance", "Multi-Warehouse Sync", "Predictive Sales Analytics"]
        },
        {
            id: 'SDS_OFFICE_004',
            title: 'Nexus Office Core',
            version: '1.8.2',
            status: 'PRODUCTION_READY',
            icon: <FaBriefcase className="text-secondary text-3xl" />,
            description: "The digital nervous system for modern organizations. Integrated attendance tracking, document vaulting, and workflow orchestrations.",
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
            specs: {
                arch: 'Micro-Service Mesh',
                security: 'Biometric Handshake',
                scalability: 'Multi-Branch Sync'
            },
            features: ["Ai-Driven Rostering", "Secure Document Vault", "Employee Lifecycle Tracking"]
        },
        {
            id: 'SDS_CRM_005',
            title: 'ClientSphere CRM',
            version: '3.2.0',
            status: 'ACTIVE_INTELLIGENCE',
            icon: <FaUsers className="text-primary text-3xl" />,
            description: "Strategic CRM platform for high-velocity sales teams. Track lead lifecycles and interactions with advanced behavioral analytics.",
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
            specs: {
                arch: 'Event-Driven Arch',
                security: 'Encrypted Lead Data',
                scalability: 'Elastic Client Base'
            },
            features: ["Lead Pipeline Control", "Omnichannel Messaging", "Conversion Heatmaps"]
        }
    ];

    return (
        <div className="relative min-h-screen grain pt-20 overflow-hidden">
            <BlueprintBackground />
            
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
                <div className="absolute top-1/4 left-10 text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] rotate-90 origin-left">
                    Product_Manifest // Unit_4
                </div>
            </div>

            <div className="container-custom relative z-10 pt-10">
                <header className="mb-20 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-6 opacity-60">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">Arsenal</span>
                        <span className="text-white/20">/</span>
                        <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Digital_Products</span>
                        <div className="h-px w-20 bg-gradient-to-r from-primary/30 to-transparent"></div>
                        <div className="flex items-center gap-2 ml-auto">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse-glow"></div>
                            <span className="text-[10px] font-mono text-secondary uppercase tracking-tighter">System_Registry_Active</span>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent animate-maskReveal leading-[0.9] md:leading-[0.85] mb-6">
                        DIGITAL <span className="gradient-text">ARSENAL.</span>
                    </h1>
                    
                    <p className="text-muted text-base md:text-lg max-w-2xl border-l border-primary/30 pl-6 py-2 leading-relaxed">
                        Precision-engineered software frameworks designed to accelerate growth and stabilize digital infrastructure for modern enterprises.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                    {products.map((product, i) => (
                        <div 
                            key={product.id}
                            className="group relative rounded-3xl overflow-hidden glass-premium border border-white/5 hover:border-primary/40 transition-all duration-700 animate-fadeInUp flex flex-col bg-slate-900/40 backdrop-blur-xl h-full"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Top Side: Image & Version */}
                            <div className="relative w-full h-56 overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                                    <span className="text-[8px] font-mono text-primary uppercase font-bold tracking-widest">{product.id}</span>
                                    <span className="text-[10px] font-mono text-white/40 uppercase">v_{product.version}</span>
                                </div>
                            </div>

                            {/* Bottom Side: Content */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors">
                                            {product.icon}
                                        </div>
                                        <span className="text-[9px] font-mono text-secondary border border-secondary/20 px-2 py-1 rounded bg-secondary/5 uppercase tracking-tighter">
                                            {product.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight mb-4 uppercase">{product.title}</h3>
                                    <p className="text-white/40 text-[13px] leading-relaxed mb-6 font-light">{product.description}</p>
                                    
                                    <div className="space-y-3">
                                        <h4 className="text-[10px] font-mono text-primary uppercase tracking-widest border-b border-primary/20 pb-1 w-fit">Tech Specs</h4>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-white/60 font-mono italic">
                                            <div className="flex items-center gap-1"><span className="w-1 h-1 bg-primary rounded-full"></span> {product.specs.arch}</div>
                                            <div className="flex items-center gap-1"><span className="w-1 h-1 bg-secondary rounded-full"></span> {product.specs.security}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <Link to="/contact" className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors uppercase tracking-[0.2em] group/btn">
                                        Inquire System <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </Link>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
                                        <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="pb-32">
                    <div className="glass-premium p-12 rounded-[50px] text-center border border-primary/20 bg-primary/[0.02] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/5 uppercase">Ref_Node_77</div>
                        <div className="max-w-3xl mx-auto space-y-10">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">Need a custom software engine?</h2>
                            <p className="text-muted text-base md:text-lg leading-relaxed font-light">
                                If our standard modules don't fit your unique mission profile, we'll architect a high-performance system from the ground up.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact">
                                    <button className="bg-accent-gradient py-4 px-12 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-lg active:scale-95 flex items-center gap-3">
                                        <FaRocket /> Request Custom Build
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Products;
