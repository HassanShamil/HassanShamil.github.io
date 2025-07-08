import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_vh8m5ax',
      'template_tcgnn7j',
      formRef.current,
      'kOb1sDTRrsSVDbOLi'
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-24 px-6">
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
              Contact
            </span>
            <div className="mt-3 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I’m open to collaboration, freelance work, or just a friendly chat.
                  Drop your message or connect through any platform below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-blue-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">hassanshamil55@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-blue-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">(+94) 777709620</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-400" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <a href="https://github.com/HassanShamil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex space-x-3 items-center">
                  <FaGithub className='text-3xl text-blue-400'/>
                  <p className='text-[16px] '>HassanShamil</p>
                </a>
                <a href="https://linkedin.com/in/hassan-shamil16" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex space-x-3 items-center">
                  <FaLinkedin className='text-3xl text-blue-400' />
                  <p className='text-[16px]'>hassan-shamil16</p>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 shadow-lg">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    loading && 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <p className="text-green-400 mt-4 text-center font-medium transition-opacity duration-500">
                    ✅ Message sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
