import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import milkteaImg from '../assets/milktea.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cloudy-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cloudy-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cloudy-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm border border-cloudy-pink">
            <span className="text-cloudy-brown font-poppins font-semibold text-sm tracking-wider uppercase">New: Strawberry Dream 🍓</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cloudy-brown leading-tight">
            Indulge in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-brown-600">Dreamy</span> Taste
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-poppins leading-relaxed max-w-lg">
            Experience the perfect blend of premium tea and velvety milk. Every sip of Cloudy Cup is a journey through the clouds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/menu"
              className="bg-cloudy-brown text-white px-10 py-4 rounded-full font-poppins font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl text-center"
            >
              Discover Flavors
            </Link>
            <Link
              to="/about"
              className="bg-white text-cloudy-brown border-2 border-cloudy-brown/10 px-10 py-4 rounded-full font-poppins font-bold text-lg hover:bg-cloudy-pink transition-all text-center"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 floating">
            <img
              src={milkteaImg}
              alt="Signature Cloudy Milk Tea"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full -z-10 blur-2xl opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
