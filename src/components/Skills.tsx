import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = {
  "Frontend": [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 80 },
  ],
  "Backend": [
    { name: "Node.js", level: 75 },
    { name: "PHP", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Express.js", level: 75 },
  ],
  "Tools & Others": [
    { name: "Git & GitHub", level: 85 },
    { name: "MATLAB", level: 70 },
    { name: "DevOps", level: 65 },
    { name: "VS Code", level: 90 },
    { name: "XAMPP", level: 85 },
  ],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">What I know</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              className="p-6 rounded-2xl glass"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">{category}</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(175 80% 50%) 0%, hsl(280 70% 60%) 100%)",
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {["React", "Node.js", "PHP", "MySQL", "JavaScript", "Git", "Bootstrap", "MATLAB"].map((tech, index) => (
            <motion.div
              key={tech}
              className="px-6 py-3 rounded-full glass text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
              whileHover={{ scale: 1.1, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
