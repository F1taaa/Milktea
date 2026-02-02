import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import milkteaPromotional from '../assets/milkteapromotional.mp4';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Short About / Video Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={milkteaPromotional} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-cloudy-brown/20 mix-blend-multiply"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cloudy-brown">Crafting Memories, One Cup at a Time</h2>
            <div className="w-20 h-1.5 bg-cloudy-pink rounded-full"></div>
            <p className="text-gray-600 text-lg font-poppins leading-relaxed">
              Our journey began with a passion for authentic tea. We source the finest ingredients, blend them with care, and create experiences that warm your heart and delight your senses.
            </p>
            <p className="text-gray-600 text-lg font-poppins leading-relaxed">
              At Cloudy Cup, we believe that every drink should be as dreamy as a cloud. That&apos;s why we use only the freshest milk and premium tea leaves.
            </p>
            <div className="pt-4">
              <Link to="/about" className="text-cloudy-brown font-bold border-b-2 border-cloudy-pink pb-1 hover:border-cloudy-brown transition-all">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Featured />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-cloudy-brown rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full"></div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 relative z-10">
              Ready to Taste the Clouds?
            </h2>
            <p className="text-white/80 text-xl font-poppins mb-12 max-w-2xl mx-auto relative z-10">
              Join thousands of milk tea lovers and experience the magic of Cloudy Cup today.
            </p>
            <Link
              to="/menu"
              className="inline-block bg-white text-cloudy-brown px-12 py-5 rounded-full font-poppins font-bold text-xl hover:bg-cloudy-pink transition-all shadow-lg relative z-10"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;
