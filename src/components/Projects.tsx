import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Real Estate Portal",
    description: "Full-stack MERN application with secure role-based access for Admin, Agent, and Client. Features portfolio creation with property listings, image carousels, and responsive UI with Tailwind CSS.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/yvishal30",
    live: "https://real-estate-portal-nine.vercel.app/",
    featured: true,
  },
  {
    title: "Voice Authentication System",
    description: "A deep-learning based Speaker Recognition system using MFCC features, CNN/LSTM models, and VoxCeleb dataset. Complete pipeline for preprocessing, training, evaluation, and custom dataset handling.",
    tech: ["MATLAB", "Deep Learning", "CNN", "LSTM", "Signal Processing"],
    github: "https://github.com/yvishal30/voice-authentication-matlab",
    featured: true,
  },
  {
    title: "Heart Disease Predictor",
    description: "A full-stack application that predicts heart disease risk using machine learning algorithms. Features an intuitive UI for data input and real-time predictions.",
    tech: ["JavaScript", "Node.js", "Machine Learning", "REST API"],
    github: "https://github.com/yvishal30/heart-disease-predictor",
    featured: true,
  },
  {
    title: "Cafe Management System",
    description: "Restaurant management system with features for order tracking, menu management, and billing. Built with PHP and JavaScript using XAMPP localhost database.",
    tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    github: "https://github.com/yvishal30/Cafe_Managemet",
    featured: false,
  },
  {
    title: "Task Management System",
    description: "A comprehensive task management application for organizing and tracking tasks efficiently with features for categorization and deadlines.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yvishal30/task_management_system",
    featured: false,
  },
  {
    title: "Teacher-Student Classroom",
    description: "An interactive platform connecting teachers and students for virtual classroom management and educational content sharing.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yvishal30/Teacher_Student_Classroom",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">What I've built</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Project Image/Preview */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                } relative group`}
              >
                <div className="relative overflow-hidden rounded-xl aspect-video bg-gradient-to-br from-primary/20 to-accent/20 glass">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                      {index === 0 ? "🎤" : index === 1 ? "❤️" : "🩸"}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 ${
                  index % 2 === 0
                    ? "md:col-start-6 md:text-right"
                    : "md:col-start-1 md:row-start-1"
                } relative z-10`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="p-6 rounded-xl glass mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold">Other Noteworthy Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="p-6 rounded-xl glass card-hover group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-primary" size={40} />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="https://github.com/yvishal30?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All Projects
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
