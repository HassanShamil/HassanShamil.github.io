// import { motion } from 'framer-motion';
// import { FaLaptopCode, FaRocket, FaUserGraduate, FaLightbulb } from 'react-icons/fa';

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const About = () => {
//   return (
//     <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-center mb-16"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">About Me</span>
//           <div className="mt-3 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* Profile Image */}
//           <motion.div
//             className="relative group flex justify-center"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
//               <img
//                 src="profile.png"
//                 alt="Hassan Shamil"
//                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 rounded-lg border-2 border-white/10 animate-spin group-hover:animate-none transition duration-500" style={{ animationDuration: '10s' }}></div>
//             </div>
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             className="space-y-6 text-gray-300"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <p className="text-lg leading-relaxed">
//               Hey there! I’m <span className="text-blue-400 font-semibold">Hassan Shamil</span>, a driven and curious Computer Science student with a strong passion for building performant and delightful web applications.
//             </p>

//             <p className="text-lg leading-relaxed">
//               I specialize in <span className="text-purple-400 font-semibold">Java backends</span>, love working with <span className="text-cyan-400 font-semibold">React</span>, and I’m always exploring new tools to grow as a <span className="text-green-400 font-semibold">Full Stack Developer</span>.
//             </p>

//             <p className="text-lg leading-relaxed">
//               I believe code is more than logic. it’s a craft. I value clean, maintainable solutions and love contributing to projects that make a difference.
//             </p>

//             {/* Fun facts */}
//             <div className="grid grid-cols-2 gap-4 mt-6">
//               {[
//                 { icon: <FaUserGraduate />, text: 'Computer Science Student' },
//                 { icon: <FaLaptopCode />, text: 'Full Stack Developer' },
//                 { icon: <FaRocket />, text: 'Learning Every Day' },
//                 { icon: <FaLightbulb />, text: 'Creative Problem Solver' },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700"
//                 >
//                   <div className="text-xl text-blue-400">{item.icon}</div>
//                   <p>{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion } from 'framer-motion';
import { FaJava, FaProjectDiagram, FaLaptopCode, FaUserGraduate, FaBriefcase } from 'react-icons/fa';

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
          {/* <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">About Me</span> */}
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
