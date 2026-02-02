import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import milkteaImg from '../assets/milktea.png';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-cloudy-bg">
      {/* Background elements - Dreamy Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-1/2 h-1/2 bg-cloudy-secondary/40 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-1/2 h-1/2 bg-cloudy-accent/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-cloudy-primary/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-sm border border-white/50">
            <span className="flex h-2 w-2 rounded-full bg-cloudy-accent animate-ping"></span>
            <span className="text-cloudy-primary font-poppins font-bold text-xs tracking-[0.2em] uppercase">Est. 2024 • Handcrafted Joy</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-cloudy-primary leading-[1.05] tracking-tight">
            Indulge in <br />
            <span className="text-cloudy-accent italic">Cloudy</span> Perfection
          </h1>

          <p className="text-lg md:text-xl text-gray-500 font-poppins leading-relaxed max-w-lg">
            Experience the ethereal blend of premium hand-picked tea and velvety smooth cream. Every cup is a masterpiece of flavor and serenity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link
              to="/menu"
              className="btn-primary text-lg px-12 py-5 flex items-center justify-center space-x-3 group shadow-xl shadow-cloudy-primary/20"
            >
              <span>Discover Menu</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <button className="flex items-center space-x-4 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="text-cloudy-accent fill-cloudy-accent" size={20} />
              </div>
              <span className="text-cloudy-primary font-poppins font-bold text-sm">Watch Story</span>
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-6 border-t border-gray-100 max-w-md">
            <div>
              <p className="text-2xl font-serif font-bold text-cloudy-primary">4.9/5</p>
              <p className="text-xs text-gray-400 font-poppins font-bold uppercase tracking-widest">Customer Rating</p>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div>
              <p className="text-2xl font-serif font-bold text-cloudy-primary">24+</p>
              <p className="text-xs text-gray-400 font-poppins font-bold uppercase tracking-widest">Unique Blends</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 animate-float">
            <img
              src={milkteaImg}
              alt="Signature Cloudy Milk Tea"
              className="w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(139,111,71,0.25)]"
            />
          </div>

          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border-2 border-cloudy-secondary/30 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-dashed border-cloudy-accent/20 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse]"></div>

          {/* Floating Accent Blobs */}
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-[20%] right-[10%] w-20 h-20 bg-cloudy-secondary rounded-3xl blur-2xl opacity-40 -z-10"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-[20%] left-[10%] w-24 h-24 bg-cloudy-accent/30 rounded-full blur-2xl opacity-40 -z-10"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
