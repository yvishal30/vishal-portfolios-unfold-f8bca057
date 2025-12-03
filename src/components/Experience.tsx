import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Linux System Administrator",
    company: "Sequretek Pvt. Ltd.",
    period: "Feb 2024 - Sep 2024",
    description: "Conducted Vulnerability and Compliance Assessments. Applied OS patching via RPM and YUM. Implemented server hardening to minimize attack surfaces and enhance protection.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    description: "Building full-stack applications using MERN stack, PHP, and various modern technologies. Focused on creating scalable and user-friendly solutions.",
  },
];

const education = [
  {
    type: "education",
    title: "Computer Science",
    institution: "University/College",
    period: "2021 - Present",
    description: "Pursuing degree in Computer Science with focus on software development, algorithms, and emerging technologies like Machine Learning.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </motion.div>

            <div className="relative pl-8 border-l border-border">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="p-6 rounded-xl glass card-hover">
                    <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </motion.div>

            <div className="relative pl-8 border-l border-border">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  className="relative mb-8 last:mb-0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="p-6 rounded-xl glass card-hover">
                    <div className="flex items-center gap-2 text-accent font-mono text-sm mb-2">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <h4 className="text-lg font-semibold">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications/Achievements */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4">Achievements</h4>
              <div className="space-y-3">
                <div className="p-4 rounded-xl glass flex items-center gap-4">
                  <div className="text-2xl">🦈</div>
                  <div>
                    <p className="font-medium">Pull Shark</p>
                    <p className="text-muted-foreground text-sm">GitHub Achievement</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl glass flex items-center gap-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <p className="font-medium">52+ Contributions</p>
                    <p className="text-muted-foreground text-sm">GitHub Contributions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
