import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import milkteaImg from '../assets/milktea.png';
import { ArrowRight, Play, Star, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-cloudy-bg">
      {/* Background elements - Dreamy Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-1/2 h-1/2 bg-cloudy-secondary/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-1/2 h-1/2 bg-cloudy-accent/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-cloudy-primary/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-sm border border-white/50">
            <span className="flex h-2 w-2 rounded-full bg-cloudy-secondary animate-ping"></span>
            <span className="text-cloudy-primary font-poppins font-bold text-xs tracking-[0.2em] uppercase">Est. 2024 • Handcrafted Joy</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-black text-cloudy-text leading-[1.05] tracking-tight">
            Indulge in <br />
            <span className="bg-gradient-to-r from-cloudy-primary to-cloudy-accent bg-clip-text text-transparent italic">Cloudy</span> Perfection
          </h1>

          <p className="text-lg md:text-xl text-gray-500 font-poppins leading-relaxed max-w-lg">
            Experience the ethereal blend of premium hand-picked tea and velvety smooth cream. Every cup is a masterpiece of flavor and serenity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link
              to="/menu"
              className="btn-primary text-lg px-12 py-5 flex items-center justify-center space-x-3 group"
            >
              <span>Discover Menu</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <button className="flex items-center space-x-4 group px-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-cloudy-mist">
                <Play className="text-cloudy-primary fill-cloudy-primary ml-1" size={20} />
              </div>
              <span className="text-cloudy-primary font-poppins font-bold text-sm group-hover:text-cloudy-accent transition-colors">Watch Story</span>
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-6 border-t border-cloudy-mist max-w-md">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-cloudy-mist overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <Star size={12} className="text-cloudy-accent fill-cloudy-accent" />
                  <p className="text-sm font-bold text-cloudy-text">4.9/5</p>
                </div>
                <p className="text-[10px] text-gray-400 font-poppins font-bold uppercase tracking-widest">Happy Sippers</p>
              </div>
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
              className="w-full max-w-lg mx-auto drop-shadow-[0_45px_55px_rgba(110,133,183,0.3)]"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border-2 border-cloudy-mist/50 rounded-[3rem] -z-10 animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-dashed border-cloudy-secondary/30 rounded-full -z-10 animate-[spin_40s_linear_infinite_reverse]"></div>

          {/* Floating Accent Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[0%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white z-20 hidden md:block"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cloudy-pink rounded-xl flex items-center justify-center text-cloudy-secondary">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Best Seller</p>
                <p className="text-sm font-black text-cloudy-text">Ube Cloud Cake</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[15%] left-[-5%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white z-20 hidden md:block"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cloudy-mist rounded-xl flex items-center justify-center text-cloudy-primary">
                <Heart size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Fresh Daily</p>
                <p className="text-sm font-black text-cloudy-text">Organic Milk</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
