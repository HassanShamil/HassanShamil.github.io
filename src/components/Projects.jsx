import { FaGithub} from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
    }
  }

  const projects = [
    {
      title: "🎟️ Real-Time Multi-Threaded Ticketing Simulator",
      description: "Java-based simulation of a high-demand ticketing system using multithreading. Includes ticket release/purchase logic with ReentrantLock, CLI config, and persistent logging.",
      tech: ["Java", "Multithreading", "Concurrency", "ReentrantLock", "CLI", "Serialization"],
      github: "https://github.com/HassanShamil/Real-Time-Ticketing-System",
      live: "#"
    },
    {
      title: "🧠 Automated Quality Inspection System",
      description: "AI-powered garment defect detection using YOLOv8 + ESRGAN. Flutter app + Django backend handles real-time data and supervisor dashboards.",
      tech: ["Python", "YOLOv8", "ESRGAN", "Django", "Flutter", "REST APIs", "ML"],
      github: "https://github.com/antonLukshman/Automated-7-0-Inspection-System",
      live: "#"
    },
    {
      title: "✈️ Plane Management System",
      description: "Console-based Java app to manage seat bookings using OOP. Includes real-time seat status, ticket storage, and dynamic pricing logic.",
      tech: ["Java", "OOP", "File I/O", "Console App"],
      github: "https://github.com/HassanShamil/Plane-Management-System",
      live: "#"
    },
    {
      title: "📊 Student Progression Predictor",
      description: "Python program that classifies academic progression based on credits and displays outcome via GUI histogram. Includes validation and data storage.",
      tech: ["Python", "Graphics.py", "Input Validation", "Data Viualization", "File Handling"],
      github: "https://github.com/HassanShamil/Student-Grading-System",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-16 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Projects
            </span>
            <div className="mt-3 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects