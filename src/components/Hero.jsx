import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const titles = ["Java Developer", "Full Stack Developer"];
  const [typewriterText, setTypewriterText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false); 

  useEffect(() => {
    const current = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setTypewriterText(prev => {
        const updatedText = isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1);

        return updatedText;
      });

      if (!isDeleting && typewriterText === current) {
        setTimeout(() => setIsDeleting(true), 1000); 
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentTitleIndex]);
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        <motion.div 
          className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-2xl text-gray-300 mb-4 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hassan Shamil
          </motion.h1>
          
          <motion.div 
            className="text-2xl lg:text-3xl text-gray-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {typewriterText}
            <span className="animate-pulse">|</span>
          </motion.div>

          
          <motion.p 
            className="text-lg text-gray-400 mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Welcome to my personal website. I'm a passionate developer who loves creating 
            innovative solutions and building user-friendly applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="/Hassan_Shamil.pdf"
              download="Hassan_Shamil.pdf"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border-2 border-white/30 hover:border-white/50 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}

        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative group">
            
            <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-spin group-hover:animate-none transition duration-500" style={{ animationDuration: '10s' }}></div>
            
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center border-4 border-white/20 shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
              <div className="w-72 h-72 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden shadow-inner shadow-black/40">
                {!imgError ? (
                  <img
                    src="/profile.png"
                    alt="Profile of Hassan Shamil"
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                    onError={() => setImgError(true)} 
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-center text-sm p-4">
                    Profile image unavailable
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero