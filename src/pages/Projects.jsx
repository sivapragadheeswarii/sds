import React, { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Guruvappa school',
            category: 'Web App',
            description:  "A modern school website and management platform designed to streamline communication between administrators, teachers, students, and parents while showcasing academic programs and school activities.",
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&h=400&auto=format&fit=crop',
           
            tech: ['React', 'Node.js', 'mongoDB'],
            link:"https://guruvappaschool.com/"
        },
        {
            id: 2,
            title: 'Annai educational trust',
            category: 'web App',
            description: "An institutional website developed for an educational trust to present its mission, academic initiatives, and programs while providing easy access to information for students, parents, and the community.",
            image: 'https://speducationaltrust.org/wp-content/uploads/2022/11/0N7A0159-1024x1024.jpg',
          
           tech: ['React', 'Node.js', 'mongoDB'],
            link:"https://annai-edu-sample.vercel.app/"
        },
        {
            id: 3,
            title: 'surabi fencing',
            category: 'Web App',
            description: 'A professional business website built to showcase fencing products and services, helping customers explore offerings, view project work, and easily connect with the company for inquiries.',
            image: 'https://www.expandedmetalcompany.com/media/wysiwyg/link_fencing_2.jpg',
          
    tech: ['React', 'Node.js', 'mongoDB'],
            link:"https://sds-surabhi.vercel.app/"
        },
         {
            id: 3,
            title: 'Vagarai marathon',
            category: 'web App',
            description:  "A dedicated event website created for the Vagarai Marathon, providing participants with event information, registration access, schedules, and updates for a smooth race experience.",
            image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/FbOXaCWxwuI975XgxlDms/1d9bc48af213a35b62fa2dc8a1dbb362/Running_Marathon.jpg',
            
            tech: ['React', 'Node.js', 'mongoDB'],
            link:"https://vagaraimarathon.in/"
        },
          {
            id: 3,
            title: 'RR- HAir and Skin care',
            category: 'web App',
            description:"A healthcare clinic website designed to present hair and skin treatment services, build patient trust, and allow visitors to easily explore treatments and contact the clinic.",
            image: 'https://singhaniaskinclinic.com/wp-content/uploads/2021/05/Facial-Laser-Treatment.jpg',
       
           tech: ['React', 'Node.js', 'mongoDB'],
            link:"https://www.rrhairskinclinic.com/"
        },
            {
            id: 3,
            title: 'Holy cross school',
            category: 'web App',
            description:"A comprehensive school website that highlights the institution’s academic programs, facilities, announcements, and important resources for students and parents.",
            image: 'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-364.jpg?w=2000',
           tech: ['React', 'Node.js', 'mongoDB'],
            link:"https://holycrossschoolpalani.org/"
        },
         
            {
            id: 3,
            title: 'green apple global imports',
            category: 'web App',
            description:"A corporate website developed for an international textile trading company to showcase its product range, global operations, and business capabilities.",
            image: 'https://www.monti.co.in/assets/images/linen-3.jpg',
           tech: ['React', 'Node.js', 'mongoDB'],
            link:"https://greenappleglobal.com/"
        },
           {
            id: 3,
            title: 'Theivaa Academy',
            category: 'web App',
            description: "An educational platform designed to introduce training programs and skill development courses while helping students access learning opportunities and career guidance.",
            image: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/11/21075150/Best-Remote-Jobs-And-How-to-Get-One-Now-1024x512.jpg',
           tech: ['React', 'Node.js', 'mongoDB'],
            link:"https://theivaa.vercel.app/"
        },
    ];

    return (
        <div className="pt-20 pb-20 container-custom">
            <header className="text-center mb-20 animate-fadeIn">
                <h1 className="gradient-text text-[3.5rem] font-bold">Our Recent Works</h1>
                <p className="text-muted">A glimpse into the innovative solutions we've delivered for our global clients.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        className="group rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 glass hover:scale-[1.03] hover:border-primary animate-fadeIn"
                        style={{ animationDelay: `${i * 0.2}s`, animationFillMode: 'forwards' }}
                        onClick={() => window.open(project.link, "_blank")}
                    >
                        <div className="relative h-[220px] overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                                <span className="bg-accent-gradient py-2 px-6 rounded-full font-semibold text-white">View Project</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-[0.8rem] text-primary uppercase font-bold tracking-wider">{project.category}</span>
                            <h3 className="text-2xl font-bold my-2 text-white">{project.title}</h3>
                            <p className="text-muted text-sm">{project.description.substring(0, 80)}...</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-[2000] flex items-center justify-center p-8 animate-fadeIn" onClick={() => setSelectedProject(null)}>
                    <div className="w-full max-w-[1000px] max-h-[90vh] rounded-[30px] relative overflow-y-auto p-12 border border-white/10 glass" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-6 right-6 bg-white/5 text-white text-3xl w-[45px] h-[45px] rounded-full flex items-center justify-center" onClick={() => setSelectedProject(null)}>&times;</button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="modal-image">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full rounded-[20px]" />
                            </div>
                            <div>
                                <span className="text-[0.8rem] text-primary uppercase font-bold tracking-wider">{selectedProject.category}</span>
                                <h2 className="text-[2.5rem] font-bold mt-2 mb-6 text-white">{selectedProject.title}</h2>
                                <p className="text-muted">{selectedProject.description}</p>

                                <div className="mt-8">
                                    <h4 className="mb-4 text-primary font-bold">Key Features</h4>
                                    <ul className="list-none">
                                        {selectedProject.features.map((f, fi) => <li key={fi} className="flex items-center text-white/80 mb-2 before:content-['→'] before:text-primary before:mr-2.5">{f}</li>)}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <h4 className="mb-4 text-primary font-bold">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tech.map((t, ti) => <span key={ti} className="bg-white/5 py-1.5 px-4 rounded-[5px] text-sm border border-white/10 text-white/90">{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
