import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vishal Yadav | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Vishal Yadav - Full Stack Developer from Mumbai specializing in MERN stack, React, Node.js, and Machine Learning. View my projects and get in touch."
        />
        <meta
          name="keywords"
          content="Vishal Yadav, Full Stack Developer, MERN Stack, React Developer, Web Developer Mumbai, Portfolio"
        />
        <meta property="og:title" content="Vishal Yadav | Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer specializing in MERN stack, React, and innovative web solutions."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vishalyadav.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
