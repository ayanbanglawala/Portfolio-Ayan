"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  MapPin,
  Calendar,
  Code,
  Brain,
  Smartphone,
  Trophy,
  BookOpen,
  Target,
  ChevronDown,
  ExternalLink,
  Star,
  Award,
  Zap,
  Rocket,
  Heart,
  Coffee,
  Download,
  Send,
  User,
  Briefcase,
  GraduationCap,
  MessageSquare,
  TrendingUp,
  Database,
  Server,
  Palette,
  Quote,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  // Smooth mouse follower
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "education",
        "skills",
        "projects",
        "achievements",
        "testimonials",
        "blog",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    { name: "JavaScript", level: 90, color: "progress-yellow" },
    { name: "React.js", level: 85, color: "progress-blue" },
    { name: "React Native", level: 80, color: "progress-cyan" },
    { name: "Python", level: 75, color: "progress-green" },
    { name: "Node.js", level: 70, color: "progress-emerald" },
    { name: "AI/ML", level: 65, color: "progress-purple" },
    { name: "C++", level: 80, color: "progress-red" },
    { name: "Firebase", level: 75, color: "progress-orange" },
  ];

  const projects = [
    {
      title: "Angre-G-Grammar",
      description:
        "A comprehensive educational mobile application designed to teach English grammar to Gujarati speakers. Features interactive lessons, audio pronunciation guides, real-time grammar checking, and progress tracking.",
      longDescription:
        "This React Native application addresses the language barrier faced by Gujarati speakers learning English. It includes over 200 grammar lessons, voice recognition for pronunciation practice, gamified learning modules, and offline capability for uninterrupted learning.",
      tech: ["React Native", "Expo", "Firebase", "Audio API", "AsyncStorage"],
      features: [
        "Interactive Lessons",
        "Audio Support",
        "Progress Tracking",
        "Offline Mode",
        "Gamification",
      ],
      status: "Completed",
      color: "timeline-card-purple",
      icon: Smartphone,
    },
    {
      title: "Agentic AI Assistant",
      description:
        "An intelligent AI assistant prototype that leverages OpenAI's GPT models and LangChain for task automation, information retrieval, and natural language interactions.",
      longDescription:
        "This project demonstrates advanced AI integration with features like context-aware conversations, task scheduling, email automation, web scraping, and multi-modal interactions including voice and text processing.",
      tech: [
        "Python",
        "OpenAI API",
        "LangChain",
        "FastAPI",
        "WebSocket",
        "Speech Recognition",
      ],
      features: [
        "Voice Interaction",
        "Task Automation",
        "Context Awareness",
        "Multi-modal Input",
        "Real-time Processing",
      ],
      status: "In Development",
      color: "timeline-card-purple",
      icon: Brain,
    },
    {
      title: "DSA Mastery Platform",
      description:
        "A comprehensive platform for learning and practicing Data Structures and Algorithms with interactive visualizations, code execution, and progress tracking.",
      longDescription:
        "Built with modern web technologies, this platform offers 500+ coding problems, algorithm visualizations, performance analytics, and peer comparison features. Includes support for multiple programming languages.",
      tech: ["React.js", "Node.js", "MongoDB", "Express", "Socket.io", "D3.js"],
      features: [
        "Algorithm Visualization",
        "Code Execution",
        "Progress Analytics",
        "Peer Comparison",
        "Multi-language Support",
      ],
      status: "Completed",
      color: "timeline-card-blue",
      icon: Code,
    },
    {
      title: "Smart Portfolio Generator",
      description:
        "An AI-powered tool that automatically generates personalized portfolio websites based on user input, with customizable themes and responsive design.",
      longDescription:
        "This innovative tool uses machine learning to analyze user skills and experience, then generates a fully functional portfolio website with optimized SEO, responsive design, and integration with popular platforms.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "OpenAI API",
        "Vercel",
        "Prisma",
      ],
      features: [
        "AI Content Generation",
        "Theme Customization",
        "SEO Optimization",
        "Analytics Integration",
        "One-click Deployment",
      ],
      status: "Planning",
      color: "timeline-card-emerald",
      icon: Palette,
    },
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Patel",
      role: "Professor, Computer Science",
      company: "Parul University",
      content:
        "Ayan demonstrates exceptional problem-solving skills and a deep understanding of modern technologies. His work on AI applications is particularly impressive.",
      rating: 5,
      avatar: "RP",
    },
    {
      name: "Priya Sharma",
      role: "Senior Developer",
      company: "Tech Solutions Inc.",
      content:
        "Working with Ayan on the grammar learning app was fantastic. His attention to detail and user-centric approach made the project a huge success.",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Amit Kumar",
      role: "Project Manager",
      company: "Innovation Labs",
      content:
        "Ayan's ability to learn new technologies quickly and implement them effectively is remarkable. He's definitely someone to watch in the AI space.",
      rating: 5,
      avatar: "AK",
    },
  ];

  const blogPosts = [
    {
      title: "Building Intelligent Mobile Apps with React Native and AI",
      excerpt:
        "Exploring the integration of AI capabilities into mobile applications using React Native, OpenAI API, and modern development practices.",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["React Native", "AI", "Mobile Development"],
      color: "timeline-card-blue",
    },
    {
      title: "The Future of Agentic AI: Beyond Chatbots",
      excerpt:
        "Diving deep into the world of agentic AI systems and how they're revolutionizing automation and decision-making processes.",
      date: "2024-12-10",
      readTime: "12 min read",
      tags: ["AI", "Machine Learning", "Automation"],
      color: "timeline-card-purple",
    },
    {
      title: "Mastering Data Structures: A Visual Approach",
      excerpt:
        "Understanding complex data structures through interactive visualizations and practical implementations in C++ and Python.",
      date: "2024-12-05",
      readTime: "15 min read",
      tags: ["DSA", "Programming", "Education"],
      color: "timeline-card-emerald",
    },
  ];

  const experience = [
    {
      title: "MERN Stack & React Native Developer",
      company: "SNM Techcraft Innovation",
      period: "Jan 2025 – Present",
      description:
        "Developing full-stack web and cross-platform mobile applications using the MERN stack and React Native. Collaborating on live client projects and delivering scalable digital solutions.",
      achievements: [
        "Delivered 4+ full-stack web apps and 3 mobile apps",
        "Integrated advanced APIs and third-party services",
        "Improved app performance and user experience",
      ],
      color: "timeline-card-blue",
    },
    {
      title: "Unity & Software Developer (Full-Time)",
      company: "Ciencias in VR",
      period: "Jan 2024 – Dec 2024",
      description:
        "Worked on immersive VR projects and educational simulations using Unity3D and C#. Also contributed to backend systems and software tools.",
      achievements: [
        "Optimized 3D interactions for better UX",
        "Developed a PHP-based device tracking system",
        "Designed and implemented a responsive admin dashboard",
        "Collaborated with cross-functional teams for timely deliveries",
      ],
      color: "timeline-card-purple",
    },
    {
      title: "Software Development Intern",
      company: "Ciencias in VR",
      period: "Jul 2023 – Dec 2023",
      description:
        "Worked as a software development intern contributing to both backend systems and early-stage dashboard design. Learned web development using PHP and design workflows using Figma.",
      achievements: [
        "Built core modules using PHP for internal systems",
        "Designed UI mockups and dashboards using Figma",
        "Gained practical experience in version control and team collaboration",
        "Contributed to live project deployments and debugging",
      ],
      color: "timeline-card-emerald",
    },
  ];

  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div className="portfolio">
      {/* Smooth Mouse Follower */}
      <motion.div
        className="mouse-follower"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      />

      {/* Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Enhanced Navigation */}
      <nav className="navigation">
        <ul className="nav-list">
          {[
            { id: "hero", label: "Home", icon: User },
            { id: "about", label: "About", icon: Heart },
            { id: "experience", label: "Experience", icon: Briefcase },
            { id: "skills", label: "Skills", icon: Zap },
            { id: "projects", label: "Projects", icon: Rocket },
            { id: "contact", label: "Contact", icon: Send },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-item ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                <item.icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="section section-hero mobile-margin-top">
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="hero-avatar"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              AB
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Ayan Banglawala
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="hero-subtitle">
                Passionate{" "}
                <span style={{ color: "#7c3aed", fontWeight: "600" }}>
                  Full-Stack & Mobile Developer
                </span>
              </h2>
              <h3 className="hero-role">MERN Stack & React Native Developer</h3>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              I specialize in building modern web and mobile applications using
              MERN stack and React Native. Exploring AI and machine learning to
              expand my skill set and build intelligent solutions in the future.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="btn btn-primary btn-lg"
              >
                <Rocket className="btn-icon" />
                Explore My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-outline btn-lg"
              >
                <Send className="btn-icon" />
                Let's Connect
              </button>
              <a href="/ResumeAB.pdf" download>
                <button className="btn btn-outline-emerald btn-lg">
                  <Download className="btn-icon" />
                  Download CV
                </button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              {[
                { number: "15+", label: "Projects Completed" },
                { number: "100+", label: "DSA Problems Solved" },
                { number: "3+", label: "Years Learning" },
                { number: "8+", label: "Technologies Mastered" },
              ].map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="hero-stat-number">{stat.number}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="chevron-down"
          >
            <ChevronDown />
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="about-left"
            >
              <div className="card card-gradient-blue about-main-card">
                <div className="about-header">
                  <div className="about-icon-wrapper">
                    <User className="about-icon" />
                  </div>
                  <div>
                    <h3 className="about-title">Who I Am</h3>
                    <p className="about-subtitle">
                      Passionate Developer & Learner
                    </p>
                  </div>
                </div>
                <div className="about-content">
                  <p className="about-text">
                    I am a passionate MERN Stack and React Native Developer
                    currently pursuing an Online MCA from Parul University. I
                    love building modern web and mobile applications that are
                    both functional and user-friendly.
                  </p>
                  <p className="about-text">
                    I believe in continuous learning and regularly explore areas
                    like AI, machine learning, and full-stack architecture to
                    deepen my expertise. My long-term goal is to contribute to
                    intelligent, impactful solutions at the intersection of
                    technology and real-world needs.
                  </p>
                </div>
              </div>

              <div className="mission-vision-grid">
                <div className="card card-gradient-purple mission-card">
                  <div className="mission-header">
                    <h3 className="mission-title">
                      <Target className="mission-icon" />
                      Mission
                    </h3>
                  </div>
                  <div className="mission-content">
                    <p>
                      To build high-quality, user-centric web and mobile
                      applications using modern technologies, while continuously
                      learning and contributing to innovative solutions.
                    </p>
                  </div>
                </div>

                <div className="card card-gradient-blue vision-card">
                  <div className="vision-header">
                    <h3 className="vision-title">
                      <Rocket className="vision-icon" />
                      Vision
                    </h3>
                  </div>
                  <div className="vision-content">
                    <p>
                      To evolve into an expert full-stack developer and agentic
                      AI engineer, creating intelligent, impactful systems that
                      solve real-world problems and benefit society.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="about-right"
            >
              {/* What Drives Me Card */}
              <div className="card card-gradient-emerald drives-card">
                <div className="drives-header">
                  <h3 className="drives-title">
                    <Coffee className="drives-icon" />
                    What Drives Me
                  </h3>
                </div>
                <div className="drives-content">
                  <div className="drives-list">
                    {[
                      {
                        icon: Code,
                        text: "Building robust web and mobile applications using MERN stack and React Native",
                      },
                      {
                        icon: Brain,
                        text: "Exploring AI and future tech to expand my problem-solving toolkit",
                      },
                      {
                        icon: BookOpen,
                        text: "Continuously learning and improving through hands-on projects",
                      },
                      {
                        icon: Heart,
                        text: "Creating user-focused solutions that make a meaningful difference",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="drives-item"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <div
                          className="drives-item-icon"
                          style={{ padding: "15px" }}
                        >
                          <item.icon className="drives-item-icon-svg" />
                        </div>
                        <p className="drives-item-text">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Languages & Communication Card */}
              <div className="card card-gradient-orange languages-card">
                <div className="languages-header">
                  <h3 className="languages-title">
                    <Globe className="languages-icon" />
                    Languages & Communication
                  </h3>
                </div>
                <div className="languages-content">
                  <div className="languages-list">
                    {[
                      { lang: "English", level: "Professional", progress: 75 },
                      { lang: "Gujarati", level: "Native", progress: 100 },
                      { lang: "Hindi", level: "Fluent", progress: 95 },
                    ].map((item, index) => (
                      <div key={index} className="language-item">
                        <div className="language-header">
                          <span className="language-name">{item.lang}</span>
                          <span className="badge badge-orange">
                            {item.level}
                          </span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-indicator progress-orange"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="section section-bg-purple">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title experience-title">
              Experience Journey
            </h2>
            <div className="section-divider experience-divider"></div>
          </motion.div>

          <div className="timeline">
            {/* Timeline Line */}
            <div className="timeline-line"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`timeline-item ${
                  index % 2 === 0 ? "" : "timeline-item-reverse"
                }`}
              >
                <div className="timeline-content">
                  <div className={`card timeline-card ${exp.color}`}>
                    <div className="timeline-card-header">
                      <h3 className="timeline-card-title">{exp.title}</h3>
                      <p className="timeline-card-subtitle">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                    <div className="timeline-card-content">
                      <p className="timeline-card-description">
                        {exp.description}
                      </p>
                      <div className="timeline-achievements">
                        <h4
                          className="achievements-title"
                          style={{ color: "white" }}
                        >
                          Key Achievements:
                        </h4>
                        <ul className="achievements-list">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="achievement-item">
                              <Star className="achievement-star" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title education-title">
              Education & Certifications
            </h2>
            <div className="section-divider education-divider"></div>
          </motion.div>

          <div className="education-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="card card-gradient-emerald education-card">
                <div className="education-card-header">
                  <h3 className="education-card-title">
                    <GraduationCap className="education-icon" />
                    Formal Education
                  </h3>
                </div>
                <div className="education-card-content">
                  <div className="education-item">
                    <h3 className="education-degree">
                      Master of Computer Applications (MCA)
                    </h3>
                    <div className="education-university">
                      <MapPin className="university-icon" />
                      <span className="university-name">Parul University</span>
                    </div>
                    <div className="education-period">
                      <Calendar className="period-icon" />
                      <span>August 2025 – Ongoing</span>
                    </div>
                    <div className="education-subjects">
                      <h4 className="subjects-title">Key Subjects:</h4>
                      <div className="subjects-list">
                        {[
                          "Advanced Programming",
                          "AI & ML",
                          "Database Systems",
                          "Software Engineering",
                          "Data Structures",
                        ].map((subject) => (
                          <span key={subject} className="badge badge-emerald">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="card card-gradient-blue certifications-card">
                <div className="certifications-header">
                  <h3 className="certifications-title">
                    <Award className="certifications-icon" />
                    Certifications & Courses
                  </h3>
                </div>
                <div className="certifications-content">
                  {[
                    {
                      title: "Advanced Linear Algebra for ML",
                      provider: "Coursera",
                      status: "Completed",
                      badgeClass: "badge-green",
                    },
                    {
                      title: "React Native Development",
                      provider: "Udemy",
                      status: "Completed",
                      badgeClass: "badge-green",
                    },
                    {
                      title: "OpenAI API Integration",
                      provider: "Self-paced",
                      status: "Completed",
                      badgeClass: "badge-green",
                    },
                    {
                      title: "Deep Learning Specialization",
                      provider: "Coursera",
                      status: "In Progress",
                      badgeClass: "badge-yellow",
                    },
                    {
                      title: "AWS Cloud Practitioner",
                      provider: "AWS",
                      status: "Planned",
                      badgeClass: "badge-gray",
                    },
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      className="certification-item"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div className="certification-header">
                        <h4 className="certification-title">{cert.title}</h4>
                        <span className={`badge ${cert.badgeClass}`}>
                          {cert.status}
                        </span>
                      </div>
                      <p className="certification-provider">{cert.provider}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="section section-bg-indigo">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title skills-title">Technical Expertise</h2>
            <div className="section-divider skills-divider"></div>
          </motion.div>

          <div className="tabs">
            <div className="tabs-list">
              {[
                { id: "technical", label: "Technical Skills" },
                { id: "tools", label: "Tools & Platforms" },
                { id: "concepts", label: "Core Concepts" },
                { id: "soft", label: "Soft Skills" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tabs-trigger ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "technical" && (
              <div className="tabs-content">
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="skill-item"
                    >
                      <div className="skill-header">
                        <h3 className="skill-name">{skill.name}</h3>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="progress">
                        <motion.div
                          className={`progress-indicator ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tools" && (
              <div className="tabs-content">
                <div className="tools-grid">
                  {[
                    {
                      category: "Development Tools",
                      icon: Code,
                      tools: [
                        "VS Code",
                        "Android Studio",
                        "Expo",
                        "Git",
                        "GitHub",
                        "Postman",
                      ],
                      color: "timeline-card-blue",
                    },
                    {
                      category: "Cloud & Database",
                      icon: Database,
                      tools: [
                        "Firebase",
                        "MongoDB",
                        "PostgreSQL",
                        "AWS",
                        "Vercel",
                        "Netlify",
                      ],
                      color: "timeline-card-emerald",
                    },
                    {
                      category: "Design & Productivity",
                      icon: Palette,
                      tools: [
                        "Figma",
                        "Canva",
                        "Notion",
                        "Slack",
                        "Trello",
                        "Adobe XD",
                      ],
                      color: "timeline-card-purple",
                    },
                  ].map((category, index) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <div className={`card ${category.color} tools-card`}>
                        <div className="tools-card-header">
                          <h3 className="tools-card-title">
                            <category.icon className="tools-card-icon" />
                            {category.category}
                          </h3>
                        </div>
                        <div className="tools-card-content">
                          <div className="tools-list">
                            {category.tools.map((tool) => (
                              <div key={tool} className="tool-item">
                                {tool}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "concepts" && (
              <div className="tabs-content">
                <div className="concepts-grid">
                  {[
                    {
                      name: "Data Structures & Algorithms",
                      progress: 85,
                      icon: Code,
                    },
                    { name: "Linear Algebra", progress: 90, icon: Brain },
                    {
                      name: "Calculus & Statistics",
                      progress: 80,
                      icon: TrendingUp,
                    },
                    { name: "Machine Learning", progress: 75, icon: Brain },
                    {
                      name: "Software Architecture",
                      progress: 70,
                      icon: Server,
                    },
                    {
                      name: "UI/UX Design Principles",
                      progress: 65,
                      icon: Palette,
                    },
                  ].map((concept, index) => (
                    <motion.div
                      key={concept.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="concept-item"
                    >
                      <div className="concept-icon-wrapper">
                        <concept.icon className="concept-icon" />
                      </div>
                      <h3 className="concept-name">{concept.name}</h3>
                      <div className="progress concept-progress">
                        <motion.div
                          className="progress-indicator concept-progress-indicator"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${concept.progress}%` }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="concept-percentage">
                        {concept.progress}% Proficiency
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "soft" && (
              <div className="tabs-content">
                <div className="soft-skills-grid">
                  {[
                    {
                      skill: "Problem Solving",
                      level: 95,
                      icon: Brain,
                      color: "timeline-card-blue",
                    },
                    {
                      skill: "Team Collaboration",
                      level: 88,
                      icon: Heart,
                      color: "timeline-card-emerald",
                    },
                    {
                      skill: "Communication",
                      level: 90,
                      icon: MessageSquare,
                      color: "timeline-card-purple",
                    },
                    {
                      skill: "Leadership",
                      level: 82,
                      icon: Trophy,
                      color: "timeline-card-purple",
                    },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className={`card ${skill.color} soft-skill-card`}
                    >
                      <skill.icon className="soft-skill-icon" />
                      <h3 className="soft-skill-name">{skill.skill}</h3>
                      <div className="soft-skill-percentage">
                        {skill.level}%
                      </div>
                      <div className="soft-skill-progress">
                        <motion.div
                          className="soft-skill-progress-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Explore my journey through innovative projects that showcase my
              skills in AI, mobile development, and full-stack engineering.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="card project-card"
              >
                <div className="project-card-header">
                  <div className="project-header-top">
                    <div className={`project-icon-wrapper ${project.color}`}>
                      <project.icon className="project-icon" />
                    </div>
                    <span
                      className={`badge ${
                        project.status === "Completed"
                          ? "badge-green"
                          : project.status === "In Development"
                          ? "badge-yellow"
                          : "badge-blue"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-card-content">
                  <div className="project-overview">
                    <h4 className="project-overview-title">
                      Detailed Overview:
                    </h4>
                    <p className="project-overview-text">
                      {project.longDescription}
                    </p>
                  </div>

                  <div className="project-tech">
                    <h4 className="project-tech-title">Technologies Used:</h4>
                    <div className="project-tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech} className="badge badge-blue">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    <h4 className="project-features-title">Key Features:</h4>
                    <div className="project-features-list">
                      {project.features.map((feature) => (
                        <div key={feature} className="project-feature">
                          <Star className="project-feature-star" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-buttons">
                    <button className="btn btn-primary project-btn">
                      <ExternalLink className="btn-icon" />
                      View Project
                    </button>
                    <button className="btn btn-outline project-btn">
                      <Github className="btn-icon" />
                      Source Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section section-bg-yellow">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title achievements-title">
              Achievements & Milestones
            </h2>
            <div className="section-divider achievements-divider"></div>
          </motion.div>

          <div className="achievements-grid">
            {[
              {
                icon: Trophy,
                title: "Advanced Mathematics Mastery",
                description:
                  "Successfully completed advanced modules in Linear Algebra and Calculus for Machine Learning applications",
                metric: "95% Score",
                color: "timeline-card-purple",
              },
              {
                icon: Smartphone,
                title: "Mobile App Success",
                description:
                  "Built and deployed a fully functional React Native grammar-learning app with positive user feedback",
                metric: "4.8★ Rating",
                color: "timeline-card-blue",
              },
              {
                icon: Code,
                title: "Problem Solving Excellence",
                description:
                  "Solved 100+ Data Structures and Algorithms problems across multiple platforms",
                metric: "100+ Problems",
                color: "timeline-card-emerald",
              },
              {
                icon: Brain,
                title: "AI Research Contribution",
                description:
                  "Contributed to AI research projects and developed innovative prototypes using cutting-edge technologies",
                metric: "3 Prototypes",
                color: "timeline-card-purple",
              },
              {
                icon: Award,
                title: "Academic Excellence",
                description:
                  "Maintaining high academic performance while pursuing MCA with focus on emerging technologies",
                metric: "Top 10%",
                color: "timeline-card-blue",
              },
              {
                icon: Rocket,
                title: "Innovation Recognition",
                description:
                  "Recognized for innovative approach to solving real-world problems through technology",
                metric: "2 Awards",
                color: "timeline-card-purple",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card achievement-card"
              >
                <div className={`achievement-content ${achievement.color}`}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="achievement-icon-wrapper"
                  >
                    <achievement.icon className="achievement-icon" />
                  </motion.div>
                  <div className="achievement-metric">{achievement.metric}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title testimonials-title">
              What People Say
            </h2>
            <div className="section-divider testimonials-divider"></div>
          </motion.div>

          <div className="testimonials-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="testimonial-wrapper"
              >
                <div className="card card-gradient-purple testimonial-card">
                  <Quote className="testimonial-quote-icon" />
                  <p className="testimonial-content">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="testimonial-rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star key={i} className="testimonial-star" />
                      )
                    )}
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div className="testimonial-author-info">
                      <h4 className="testimonial-author-name">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="testimonial-author-role">
                        {testimonials[currentTestimonial].role} at{" "}
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`testimonial-indicator ${
                    index === currentTestimonial ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section section-bg-cyan">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title blog-title">Latest Insights</h2>
            <div className="section-divider blog-divider"></div>
            <p className="section-description">
              Sharing knowledge and insights about AI, development, and
              technology trends.
            </p>
          </motion.div>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="card blog-card"
              >
                <div className="blog-card-header">
                  <div className={`blog-image ${post.color}`}>
                    <BookOpen className="blog-icon" />
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                </div>
                <div className="blog-card-content">
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="badge badge-blue blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <button className="btn btn-outline blog-btn">
                    Read More
                    <ExternalLink className="blog-btn-icon" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="section section-bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title contact-title">
              Let's Create Something Amazing
            </h2>
            <div className="section-divider contact-divider"></div>
            <p className="section-description contact-description">
              I'm currently seeking internships or freelance opportunities to
              gain real-world experience and contribute to impactful projects in
              AI and app development. Let's connect and build the future
              together!
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="contact-left"
            >
              <div className="contact-card">
                <h3 className="contact-card-title">Get In Touch</h3>
                <div className="contact-items">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "ayanchhipa2278@gmail.com",
                      href: "mailto:ayanchhipa2278@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 816087960",
                      href: "tel:+918160879660",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Gujarat, India",
                      href: "#",
                    },
                    {
                      icon: Globe,
                      label: "Website",
                      value: "ayanbanglawala.dev",
                      href: "https://ayanbanglawala.dev",
                    },
                  ].map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      className="contact-item"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div className="contact-icon">
                        <contact.icon className="contact-icon-svg" />
                      </div>
                      <div className="contact-info">
                        <h4 className="contact-label">{contact.label}</h4>
                        <p className="contact-value">{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="contact-card">
                <h3 className="contact-card-title">Follow Me</h3>
                <div className="social-links">
                  {[
                    {
                      icon: Github,
                      label: "GitHub",
                      username: "@ayanbanglawala",
                      class: "github",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      username: "Ayan Banglawala",
                      class: "linkedin",
                    },
                    {
                      icon: Globe,
                      label: "Portfolio",
                      username: "ayanbanglawala.in",
                      class: "portfolio",
                    },
                  ].map((social, index) => (
                    <motion.button
                      key={social.label}
                      className={`social-link ${social.class}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <social.icon className="social-icon" />
                      <div className="social-info">
                        <h4 className="social-label">{social.label}</h4>
                        <p className="social-username">{social.username}</p>
                      </div>
                      <ExternalLink className="social-external-icon" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="contact-right"
            >
              <div className="contact-card contact-form-card">
                <h3 className="contact-card-title">Send a Message</h3>
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input form-textarea"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <button className="btn btn-primary contact-submit-btn">
                    <Send className="btn-icon" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="contact-cta"
          >
            <div className="cta-content">
              <h3 className="cta-title">Ready to Start Something Great?</h3>
              <p className="cta-description">
                Whether it's a groundbreaking AI project, a mobile app that
                changes lives, or a web platform that connects people - I'm
                excited to bring your vision to reality.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-lg cta-btn-hire">
                  <Briefcase className="btn-icon" />
                  Hire Me
                </button>
                <button className="btn btn-outline btn-lg cta-btn-chat">
                  <Coffee className="btn-icon" />
                  Let's Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-brand">Ayan Banglawala</h3>
              <p className="footer-description">
                Aspiring Agentic AI Engineer passionate about creating
                intelligent solutions that make a difference.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <div className="footer-links">
                {["About", "Projects", "Skills", "Experience", "Contact"].map(
                  (link) => (
                    <button
                      key={link}
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="footer-link"
                    >
                      {link}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-section-title">Technologies</h4>
              <div className="footer-tech">
                {["React", "AI/ML", "Python", "JavaScript", "React Native"].map(
                  (tech) => (
                    <span key={tech} className="badge badge-secondary">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2025 Ayan Banglawala. All rights reserved. Built with ❤️
              using React, Vite & CSS
            </p>
            <p className="footer-quote">
              "The future belongs to those who believe in the beauty of their
              dreams." - Eleanor Roosevelt
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
