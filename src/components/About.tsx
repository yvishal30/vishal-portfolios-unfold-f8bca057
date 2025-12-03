import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Code2, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "52+", label: "GitHub Contributions" },
    { value: "6+", label: "Technologies" },
    { value: "2+", label: "Years Coding" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate <span className="text-foreground font-medium">Full Stack Developer</span> based in 
                Mumbai, India. I love building web applications that solve real-world problems and 
                creating seamless user experiences.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity about how websites work, and it has 
                evolved into a deep passion for crafting complete solutions—from intuitive 
                frontends to robust backends. I'm particularly interested in the MERN stack 
                and have been exploring machine learning applications.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span>Bhandup, Mumbai</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar size={18} className="text-primary" />
                  <span>Available for Work</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Code2 size={18} className="text-primary" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Heart size={18} className="text-primary" />
                  <span>Loves Problem Solving</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl glass card-hover text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-4xl font-bold gradient-text">{stat.value}</span>
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6 p-6 rounded-2xl glass"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Currently
              </h4>
              <p className="text-muted-foreground text-sm">
                Building innovative web applications, exploring machine learning with MATLAB, 
                and contributing to open-source projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
