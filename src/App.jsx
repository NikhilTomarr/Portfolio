import React, { useEffect } from 'react';

// --- Custom SVG Icons ---
const CodeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const SmartphoneIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
const GithubIcon = ({size=20}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const GraduationCapIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>;
const AwardIcon = ({className}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
const MailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const DownloadIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const BriefcaseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const TrophyIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>;

export default function Portfolio() {
  
  // Advanced Intersection Observer for Premium Apple-like smooth reveals
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skillsData = {
    "Languages": [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" }
    ],
    "Android & Mobile": [
      { name: "Android SDK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
      { name: "Jetpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
      { name: "Retrofit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
      { name: "Gradle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" },
      { name: "XML UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" },
      { name: "ExoPlayer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" }
    ],
    "Backend & Web": [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
    ],
    "Tools & Plateforms": [
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
      { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" }
    ]
  };

  const projectsData = [
    {
      title: "NetX Player",
      role: "Network Streaming Player",
      desc: "Architected a scalable Android app and published on Play Store. Integrated ExoPlayer for 4K/1080p playback with all video player custom controls and support all types media & streaming url formates and Firebase backend.",
      tags: ["Java", "Firebase", "ExoPlayer", "AdMob"],
      link: "https://play.google.com/store/apps/details?id=com.nikstudios.netxplayer&hl=en_IN",
      image: "https://i.ibb.co/LDmnKM99/logo.png"
    },
    {
      title: "DrKisan",
      role: "AI-Powered Crop App",
      desc: "Native Android app integrating ML models for crop disease detection (>95% accuracy) with agricultural ecosystem, marketplace, and AI chatbot for support. Selected for the Smart India Hackathon.",
      tags: ["Java", "Machine Learning", "Firebase", "Python"],
      link: "https://github.com/NikhilTomarr/DrKisan",
      image: "https://i.ibb.co/tPkJXMSz/68747470733a4tGivfoTd1JcbeBFeCdvSfpkXerv7c6575736572636f6e74656e742e636f6d2f696d672f622f523239765a32.png"
    },
    {
      title: "Earnity",
      role: "Student Career & Skill Platform",
      desc: "Engineered a task marketplace with a Firebase-based wallet and real-time transactions. Integrated Gemini API for AI-Enhanced career enablement tools including a dynamic resume builder and job alerts. Architected a scalable backend to manage both a peer marketplace and campus recruitment ecosystem.",
      tags: ["Kotlin", "Gemini API", "Firebase"],
      link: "https://github.com/NikhilTomarr/Earnity",
      image: "https://i.ibb.co/wFZ0BRd0/logoo.png"
    }
  ];

  const achievementsData = [
    "Winner (1st Position) - Smart India Hackathon 2023.",
    "Successfully built and published a commercial app on Google Play Store with 6,000+ active downloads.",
    "Cleared multi-stage competitive coding assessments focusing on DSA, Dynamic Programming, and Greedy Algorithms."
  ];

  const certificationsData = [
    {
      title: "Oracle OCI AI Foundations",
      issuer: "Oracle Associate (2025)",
      image: "https://i.ibb.co/Q3STNrK7/oracle.png"
    },
    {
      title: "Application Developer (Web/Mobile)",
      issuer: "SSC NASSCOM (NCVET)",
      image: "https://i.ibb.co/Fk9zzgjW/6190311182791545349.jpg"
    },
    {
      title: "Database Management Systems",
      issuer: "NPTEL, IIT Kharagpur",
      image: "https://i.ibb.co/bgbBvFcP/Data-Base-Management-System-page-0001.jpg"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur",
      image: "https://i.ibb.co/q3hMM35p/Cloud-Computing-page-0001.jpg"
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL, IIT Kharagpur",
      image: "https://i.ibb.co/Fk8xN9Xn/Introduction-to-Internet-of-Things-page-0001.jpg"
    }
  ];

  const experienceData = [
    {
      role: "Web Application & Product Development Intern",
      company: "Lenovo (LEAP NextGen Scholar Program) & AICTE",
      duration: "June 2026 – July 2026",
      desc: "During my 6-week internship under the Lenovo LEAP NextGen Scholar Program in association with AICTE, I focused on 'AI-Driven Web Application & Product Development'. I gained practical experience in building user-centric web applications and integrating AI functionalities to enhance overall product capabilities. This role provided me with hands-on exposure to the complete product development lifecycle, allowing me to apply modern tech-stacks to solve real-world problems and create scalable web solutions."
    },
    {
      role: "Independent Android Developer",
      company: "Freelance / Self-Employed",
      duration: "2025 - Present",
      desc: "Independently architected, developed, and published the 'NetX Player' Android application on the Google Play Store, managing the complete product lifecycle to achieve over 6,000 organic downloads and successfully implement AdMob monetization. Built natively using Java and XML with Firebase integration for database operations. Engineered advanced core features including robust M3U playlist parsing, local Wi-Fi video transfer to TVs via QR code, and a dynamic OTT-style guide interface utilizing the TMDB API."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* High-Performance Custom CSS Animations */}
      <style>
        {`
          /* Smooth Floating */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
          
          /* Hero Section Initial Load Fade-in */
          @keyframes heroFade {
            from { opacity: 0; transform: translateY(30px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .hero-animate {
            animation: heroFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          /* Reveal on Scroll Core Engine */
          .reveal-on-scroll {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
          }
          .reveal-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
            Nikhil Tomar
          </span>
          {/* Hidden on mobile, visible on tablet/desktop */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          </div>
        </div>
      </nav>

      {/* 1. About Section (Auto-animates on load) */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center min-h-[95vh] relative hero-animate">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-[120%] h-[80%] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0"></div>
        
        <div className="space-y-6 w-full lg:w-3/5 relative z-10 text-center lg:text-left mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.15)] mb-2 hover:bg-green-500/20 transition-colors cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-green-400 tracking-wide">
              Open to Work & Freelance
            </span>
          </div>

          <p className="text-cyan-400 font-mono text-sm md:text-base tracking-wide mt-4">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight pb-2 tracking-tight">
            Nikhil Tomar.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-400 leading-tight pb-2 tracking-tight">
            Software, Android, Web & Full Stack Developer.
          </h2>
          <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-slate-400 leading-relaxed mt-6">
            I specialize in transforming complex technical problems into elegant, scalable software solutions. 
            From building high-performance Android & Web applications with thousands of active users to architecting 
            robust backend systems, I deliver production-ready code.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <a href="#contact" className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95 text-center">
              Hire Me
            </a>
            <a href="https://drive.google.com/file/d/1gwx_dD3Y6ZH6StLKEM8EJpQNU3b-kdVj/view?usp=drivesdk" className="px-8 py-3.5 flex items-center justify-center gap-2 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all bg-slate-900/50 active:scale-95">
              <DownloadIcon /> Download Resume
            </a>
          </div>
        </div>

        <div className="w-4/5 sm:w-2/3 lg:w-2/5 relative z-10 flex justify-center lg:justify-end animate-float">
          <img 
            src="https://i.ibb.co/3YFGfnpT/Pngtree-3d-cartoon-programmer-male-coder-24205367.png" 
            alt="3D Coder Avatar" 
            className="w-full lg:scale-125 object-contain drop-shadow-[0_20px_45px_rgba(6,182,212,0.45)]"
          />
        </div>
      </section>

      {/* 2. Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <CodeIcon /> Technical Skills
            </h3>
          </div>
          {/* Responsive Grid: 1 col on mobile, 2 on small tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(skillsData).map(([category, skills], idx) => (
              <div 
                key={idx} 
                className="reveal-on-scroll bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
                style={{ transitionDelay: `${idx * 100}ms` }} // Waterfall stagger effect
              >
                <h4 className="text-lg md:text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors tracking-wide">{category}</h4>
                <ul className="space-y-4">
                  {skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 p-2 flex items-center justify-center group-hover:bg-slate-900 transition-colors border border-slate-800 group-hover:border-cyan-500/30">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" loading="lazy" />
                      </div>
                      <span className="font-medium text-sm md:text-base">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projects (Featured Work) */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="reveal-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <SmartphoneIcon /> Projects
          </h3>
        </div>
        {/* Responsive Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div 
              key={idx} 
              className="reveal-on-scroll bg-slate-900 rounded-2xl border border-slate-800 hover:-translate-y-3 hover:border-cyan-500/50 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col h-full overflow-hidden group shadow-xl"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="h-52 overflow-hidden relative bg-slate-950">
                 <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-slate-900">
                <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">{project.title}</h4>
                <p className="text-cyan-400 text-sm font-semibold mb-5">{project.role}</p>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 bg-slate-950 text-cyan-300 rounded-md border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors w-fit group/btn">
                  <GithubIcon size={18} /> 
                  <span className="group-hover/btn:underline underline-offset-4 decoration-cyan-400/50">View Source</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education (Clean Grid UI) */}
      <section id="education" className="py-24 px-6 bg-slate-900/40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <GraduationCapIcon /> Education Journey
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="reveal-on-scroll delay-100 bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">B.Tech, Computer Science</h4>
              <p className="text-cyan-400 font-semibold mb-6 text-lg">IIMT University, Meerut</p>
              <div className="inline-block px-4 py-2.5 bg-slate-950 rounded-lg text-sm font-mono text-slate-300 border border-slate-800 shadow-inner">
                2022 - 2026 <span className="mx-2 text-slate-700">|</span> CGPA: 7.26/10
              </div>
            </div>
            
            <div className="reveal-on-scroll delay-200 bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 to-slate-500 opacity-50 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:opacity-100 transition-all duration-500"></div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">High School (UP Board)</h4>
              <p className="text-slate-400 font-semibold mb-6 text-lg">Pre-Engineering Core</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2.5 bg-slate-950 rounded-lg text-sm font-mono text-slate-300 border border-slate-800 shadow-inner">
                  Class XII: 2022 (76%)
                </span>
                <span className="px-4 py-2.5 bg-slate-950 rounded-lg text-sm font-mono text-slate-300 border border-slate-800 shadow-inner">
                  Class X: 2020 (82%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Achievements */}
      <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="reveal-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <TrophyIcon /> Key Achievements
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((text, idx) => (
            <div 
              key={idx} 
              className="reveal-on-scroll bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 group shadow-lg"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 border border-cyan-500/20">
                <AwardIcon className="text-cyan-500" />
              </div>
              <p className="text-slate-300 font-medium leading-relaxed md:text-lg">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Professional Certifications */}
      <section id="certifications" className="py-24 px-6 bg-slate-900/40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <AwardIcon className="text-cyan-500" /> Professional Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {certificationsData.map((cert, idx) => (
              <div 
                key={idx} 
                className="reveal-on-scroll bg-slate-950 rounded-2xl border border-slate-800 hover:-translate-y-2 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden group shadow-xl"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="aspect-video relative overflow-hidden bg-slate-900">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                </div>
                
                <div className="p-5 md:p-6 relative z-10 -mt-8">
                  <h4 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Experience & Milestones */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="reveal-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <BriefcaseIcon /> Experience & Milestones
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {experienceData.map((exp, idx) => (
            <div 
              key={idx} 
              className="reveal-on-scroll bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg relative overflow-hidden group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">{exp.role}</h4>
                  <p className="text-base md:text-lg text-slate-300 font-semibold mt-1">{exp.company}</p>
                </div>
              </div>
              <span className="inline-block px-3.5 py-1.5 bg-slate-950 rounded-lg text-xs md:text-sm font-mono text-cyan-400 border border-slate-800 mb-5 shadow-inner">
                {exp.duration}
              </span>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900/40 relative z-10 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <div className="flex flex-col justify-center text-center bg-gradient-to-br from-slate-900 to-slate-950 p-10 md:p-16 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl group">
             {/* Center Glow */}
             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none"></div>
             
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10 tracking-tight">Let&apos;s Build Something.</h2>
             <p className="text-slate-400 mb-10 text-base md:text-lg relative z-10 max-w-2xl mx-auto leading-relaxed">
               My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
             </p>
             <div className="flex justify-center relative z-10">
               <a href="mailto:iamnikhiltomar@gmail.com" className="inline-flex items-center gap-3 px-8 md:px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg rounded-xl transition-all transform hover:-translate-y-1 shadow-[0_10px_25px_rgba(6,182,212,0.4)] active:scale-95">
                 <MailIcon /> Drop an Email
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-500 text-sm relative z-10 bg-slate-950 border-t border-slate-900">
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://github.com/NikhilTomarr" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1 transform inline-block"><GithubIcon size={24} /></a>
          <a href="https://linkedin.com/in/nikhil-tomar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1 transform inline-block"><LinkedinIcon /></a>
        </div>
        <p className="font-medium tracking-wide">Built with ❤️ by Nikhil Tomar.</p>
      </footer>
    </div>
  );
}
