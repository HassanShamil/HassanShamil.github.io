import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserGraduate, FaBriefcase } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            About me
          </span>
          <div className="mt-3 w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.h2>

        <div className="space-y-8">
          {/* Introduction */}
          <motion.div
            className="space-y-4 text-gray-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg leading-relaxed text-center">
              I’m <span className="text-blue-400 font-semibold">Hassan Shamil</span>, a Computer Science undergraduate at the <span className="text-purple-400 font-semibold">University of Westminster (2023-2027)</span>.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-center">
              Passionate about coding and solving real-world problems through technology, with a strong foundation in <span className="text-red-400 font-semibold">Java</span>, <span className="text-green-400 font-semibold">Data Structures & Algorithms</span>, and <span className="text-blue-400 font-semibold">Object-Oriented Programming</span>.
            </p>
          </motion.div>

          {/* Journey */}
          <motion.div
            className="space-y-4 text-gray-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">My Journey</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 flex items-center">
                <div className="text-2xl text-blue-400 mr-4">
                  <FaUserGraduate />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">2023</h4>
                  <p className="text-gray-300">Started my journey at the University of Westminster, diving deep into the world of computer science.</p>
                </div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 flex items-center">
                <div className="text-2xl text-blue-400 mr-4">
                  <FaLaptopCode />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">2024</h4>
                  <p className="text-gray-300">Developed a strong understanding of Java, OOP, and DSA, and started building my own projects to apply these skills.</p>
                </div>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 flex items-center">
                <div className="text-2xl text-blue-400 mr-4">
                  <FaBriefcase />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">2025</h4>
                  <p className="text-gray-300">Currently seeking an internship to apply my skills in real-world scenarios and learn from industry professionals.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
