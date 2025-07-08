import { motion } from 'framer-motion';
import {FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt} from 'react-icons/fa';
import {SiSpringboot, SiMysql, SiFlutter, SiDjango, SiPostman,SiIntellijidea, SiTailwindcss, SiNodedotjs} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava className="text-orange-600" />, desc: 'OOP & backend' },
      { name: 'Python', icon: <FaPython className="text-blue-500" />, desc: 'Data & scripting' },
      { name: 'HTML', icon: <FaHtml5 className="text-red-500" />, desc: 'Markup & structure' },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" />, desc: 'Styling & layout' },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, desc: 'Interactive web' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: <FaReact className="text-cyan-400" />, desc: 'UI & frontend' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, desc: 'Utility-first CSS' },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" />, desc: 'Java backend' },
      { name: 'Django', icon: <SiDjango className="text-green-600" />, desc: 'Python backend' },
      { name: 'Flutter', icon: <SiFlutter className="text-sky-400" />, desc: 'Mobile apps' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-700" />, desc: 'Relational DB' },
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, desc: 'Version control' },
      { name: 'Postman', icon: <SiPostman className="text-orange-400" />, desc: 'API testing' },
      { name: 'IntelliJ', icon: <SiIntellijidea className="text-purple-600" />, desc: 'IDE' },
      { name: 'VS Code', icon: <DiVisualstudio className="text-blue-500" />, desc: 'Editor' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Skills & Tools
          </span>
          <div className="mt-3 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map(({ category, skills }, idx) => (
            <motion.div
              key={idx}
              className="space-y-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4 border-b border-blue-600 pb-2">
                {category}
              </h3>

              <div className="space-y-5">
                {skills.map(({ name, icon, desc }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/70 backdrop-blur-sm shadow-md hover:shadow-blue-500/40 transition duration-300"
                  >
                    <div className="text-3xl">{icon}</div>
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm text-gray-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
